import React, {useState}from 'react';
import {FaBars} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import { Link } from 'react-router-dom';
import '../style/component/SideNav.css';
import {MenuData} from './MenuData';
import { IconContext } from 'react-icons';

function SideNav() {
   // State variable to control nav bar visibility
    const [navbar, setNavbar] = useState(false);
    //toggle navbar
    const showNavbar = () => setNavbar(!navbar);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link  to='#' className='menu-bars'>
            <FaBars onClick={showNavbar}/>
          </Link>
        </div>
        <nav className={navbar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showNavbar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiOutlineClose />
              </Link>
            </li>
            {MenuData.map((data, index) => {
              return (
                <li key={index} className={data.name}>
                  <Link to={data.path}>
                    {data.icon}
                    <span>{data.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        </IconContext.Provider>
    </>
  );
}

export default SideNav;
