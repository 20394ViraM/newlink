import { useEffect } from 'react';

function CustomerFetcher({ setCustomerData }) {
  useEffect(() => {
    const getCustomers = () => {
      // Fetch customer data from 'API Link'/file
      fetch('../data/customers.json')
        .then((response) => response.json()) // Parse the response as JSON
        .then((customer) => {
          setCustomerData(customer); //update the data using the 'set' 
        })
        .catch((error) => console.error(error));
    };
    getCustomers();
  }, [setCustomerData]);
  return null;
}

export default CustomerFetcher;
