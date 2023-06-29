import { useState} from 'react';
import CustomerFetcher from '../fetchApi/CustomerFetcher';
import CustomTable from '../componet/CustomTable';
import '../style/base.css';

function Customers() {
  const tableHeaders = ['ID', 'Customer Name', 'Created Month'];
  const [ customers , setCustomers] = useState([]);

  return (
    <div>
      <h1>Customers</h1>
      <CustomerFetcher setCustomersData={setCustomers}/>
      {customers.length > 0 ? (
        <CustomTable headers={tableHeaders} data={customers} />
      ) : (
        <p>No Customers found</p>
      )}
    </div>
  );
}

export default Customers;
