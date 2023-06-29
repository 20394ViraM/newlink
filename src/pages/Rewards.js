import {useState} from 'react';
import '../style/Rewards.css';
import '../style/base.css';

import RewardFetcher from '../fetchApi/RewardFetcher';


function Rewards() {
  const [ rewardsData, setRewardsData] = useState([]);

  const handleDataUpdate = (data) => {
    setRewardsData(data);
  };

  return (
    <div>
      <h1>Reward Points</h1>
      
      <RewardFetcher
       setRewardsData={handleDataUpdate}
      />
      <div className="card-container">
      {rewardsData.map((reward) => (
        <div className="reward-card">
        <div key={reward.customer_id}>
          <h4>{reward.customer_name}</h4>
          <p>Customer ID: {reward.customer_id}</p>
          <p>Overall Transaction: $ {reward.total_transaction}</p>
          <hr/>
          <h3>Rewards Earned: {reward.rewards_earned}</h3>
        </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Rewards;
