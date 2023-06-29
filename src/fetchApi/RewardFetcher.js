import { useEffect, useState } from 'react';
import "../style/base.css"

function RewardFetcher({ setData }) {
  //state to store reward data and month selected
  const [rewardsData, setRewardsData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');

  useEffect(() => {
    // Fetch transactions data from 'API Link'/file
    fetch('data/transactions.json')
      .then((response) => response.json())
      .then((transactions) => {
        // Fetch customer data from 'API Link'/file
        fetch('../data/customers.json')
          .then((response) => response.json())
          .then((customers) => {
            const rewardsData = calculateRewards(customers, transactions);
            setRewardsData(rewardsData);
            setData(rewardsData);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }, [setData]);


  // Calculate rewards for each customer based on their transactions
  const calculateRewards = (customers, transactions) => {
    const rewardsData = customers.map((customer) => {
      const { id, name } = customer;
      const customerTransactions = transactions.filter((transaction) => transaction.customer_id === id);
      const totalTransaction = calculateTotalTransaction(customerTransactions);
      const rewardsEarned = calculateRewardsEarned(totalTransaction);
      return {
        customer_id: id,
        customer_name: name,
        total_transaction: totalTransaction,
        rewards_earned: rewardsEarned
      };
    });
    return rewardsData;
  };

  // Calculate total transaction for a customer based on their transactions
  const calculateTotalTransaction = (transactions) => {
    if (selectedMonth === "All" || selectedMonth === "") {
      // Calculate total transaction for all months
      const totalTransaction = transactions.reduce((sum, transaction) => {
        return sum + transaction.purchase_value;
      }, 0);
      return totalTransaction;
    } else {
    // Calculate total transaction for a specific month
      const totalTransaction = transactions.reduce((sum, transaction) => {
        if (transaction.month === selectedMonth) {
          return sum + transaction.purchase_value;
        }
        return sum;
      }, 0);
      return totalTransaction;
    } 
  };

  // Calculate rewards earned for a customer based on their transactions
  const calculateRewardsEarned = (totalTransaction ) => {
    let rewardsEarned = 0;
    const purchaseValue = totalTransaction;
    const rewardPoints = calculateRewardPoints(purchaseValue);
    rewardsEarned += rewardPoints;
    return rewardsEarned;
  };

  // Calculate reward points based on purchase value
  const calculateRewardPoints = (totalTransaction) => {
    let rewardPoints = 0;
    if (totalTransaction > 100) {
      rewardPoints = ((totalTransaction - 100) * 2)+50;
    } else if (totalTransaction > 50) {
      rewardPoints = (totalTransaction - 50);
    }
    return rewardPoints;
  };

  // Handle dropdown change event
  const handleDropdownChange = (event) => {
    if(event.target.value.length > 0){
      setSelectedMonth(event.target.value);
    }
  };

 return (
    <div >
      <select className='select-drop' value={selectedMonth} onChange={handleDropdownChange}>
        <option value= "All" >All Months</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
      </select>
    </div>
  );
}

export default RewardFetcher;
