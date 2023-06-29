import { useEffect , useState } from 'react';

function TransactionFetcher({ setPurchaseData }) {
  const [purchaseData, setPurchase] = useState([]);

  useEffect(() => {
    // Fetch transactions data from 'API Link'/file
    fetch('../data/transactions.json')
      .then((response) => response.json())
      .then((data) => {
        // Fetch customer data from 'API Link'/file
        fetch('../data/customers.json')
          .then((response) => response.json())
          .then((customers) => {
            //Map the transaction data with customer details to get customer name
            const purchaseData = data.map((transaction) => {
              const customer = customers.find((customer) => customer.id === transaction.customer_id);
              return {
                id: transaction.id,
                name: customer.name,
                purchase_value: transaction.purchase_value,
                month: transaction.month
              };
            });
            setPurchaseData(purchaseData); //setting new data
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }, [setPurchaseData]);

  return purchaseData;
}

export default TransactionFetcher;
