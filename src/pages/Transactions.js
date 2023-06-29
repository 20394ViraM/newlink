import { useState , useEffect} from 'react';
import TransactionFetcher from '../fetchApi/TransactionFetcher';
import CustomTable from '../componet/CustomTable';
import '../style/base.css';


function Transactions() {
  const tableHeaders = ['ID', 'Customer Name', 'Purchase Amount', 'Purchase Month'];
  const [purchase, setPurchase] = useState([]);

  return (
    <div>
      <h1>Transactions</h1>
      {purchase.length > 0 ? (
        <CustomTable headers={tableHeaders} data={purchase} />
      ) : (
        < TransactionFetcher setPurchaseData={setPurchase} />
      )}
    </div>
  );
}

export default Transactions;
