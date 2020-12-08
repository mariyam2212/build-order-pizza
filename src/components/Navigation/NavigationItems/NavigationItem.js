import React from 'react';
import './NavItem.css';
import {NavLink} from 'react-router-dom';

const navitem = (props) => (
        <li className="NavigationItem">
                <NavLink  activeClassName="active" exact={props.exact} to={props.link}>{props.children}</NavLink>
        </li>
);

export default navitem;