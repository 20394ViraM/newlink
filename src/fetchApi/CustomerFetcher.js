import { useEffect } from 'react';

function CustomerFetcher({ setCustomersData }) {

  useEffect(() => {
    
    const getCustomers = () => {
      // Fetch customer data from 'API Link'/file
      fetch('data/customers.json')
        .then((response) => response.json()) // Parse the response as JSON
        .then((customer) => {
          setCustomersData(customer);
        })
        .catch((error) => console.error(error));
    };
    console.log('./data/customers.json');
    getCustomers();
  }, [setCustomersData]);

  return null;
}

export default CustomerFetcher;
