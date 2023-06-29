import {  Route , Routes} from 'react-router-dom';
import SideNav from './SideNav';
import '../style/base.css';
import Customers from "../pages/Customers.js"
import Transactions from '../pages/Transactions.js';
import Rewards from '../pages/Rewards.js';
import Home from '../pages/Home.js';

function Menu() {
  //sidenav paths
  return (
    <>
      <SideNav/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/rewards' element={<Rewards/>} />
        <Route path='/transactions' element={<Transactions/>} />
        <Route path='/customers' element={<Customers/>} />
      </Routes>

    </>
  );
}

export default Menu;
