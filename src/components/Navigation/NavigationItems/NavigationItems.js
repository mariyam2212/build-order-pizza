import React from 'react';
import Navitem from './NavigationItem';
import './NavItems.css';

const navitems = (props) => (
    <ul className="NavigationItems">
        <Navitem link="/" exact>Build</Navitem>
        <Navitem link="/orders">Orders</Navitem>
        <Navitem link="/auth">Authenticate</Navitem>
    </ul>
);

export default navitems;