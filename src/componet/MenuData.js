import React from 'react';
import { BsPeopleFill } from "react-icons/bs";
import { BiSolidHome , BiTransferAlt } from "react-icons/bi";
import { TbAwardFilled } from "react-icons/tb";

// Array of menu data
export const MenuData = [
    {
      title: 'Home',
      path: '/',
      icon: <BiSolidHome />,
      name: 'nav-text'
    },
    {
      title: 'Customers',
      path: '/customers',
      icon: <BsPeopleFill />,
      name: 'nav-text'
    },
    {
      title: 'Transactions',
      path: '/transactions',
      icon: <BiTransferAlt />,
      name: 'nav-text'
    },
    {
      title: 'Rewards',
      path: '/rewards',
      icon: <TbAwardFilled />,
      name: 'nav-text'
    }
];