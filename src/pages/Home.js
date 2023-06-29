
import {FaBars} from "react-icons/fa";
import '../style/base.css';
import '../style/Home.css';

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <h2>New Link</h2>
        <p>Click the navbar <span><FaBars/> </span> on top right to navigate to customers, transactions and reward details</p>
        <hr className="footer"></hr>
        <h4>by Vira Anil Meherkar</h4>
    </div>
  );
}

export default Home;
