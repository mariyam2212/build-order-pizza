import React from 'react';
import Styled from 'styled-components';
import logo from '../../../assets/logo.jpg';
import menu from '../../../assets/menu.svg';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css';

const Logo = Styled.label`
    background-image: url(${logo});
    width: 80px;
    height: 60px;
    display: inline-block;
    /* text-align: center; */
    float: left;
    background-position: center;
    background-size: cover;
`;
const Menu = Styled.img`
height: 30px;
width: 30px;
margin: 15px;`;

const Toolbar = (props) =>(
    <header className="toolbarCls">
        <div onClick={props.opendrawer}><Menu src={menu} /></div>
        <div style={{width:"80%"}}><Logo/></div>
        <nav className="mobileOnly">
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;