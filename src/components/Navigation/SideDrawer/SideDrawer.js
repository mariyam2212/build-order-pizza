import React from 'react';
import logo from '../../../assets/logo.jpg';
import NavigationItems from '../NavigationItems/NavigationItems';
import Styled from 'styled-components';
import './SideDrawer.css';
import Auxil from '../../../hoc/Auxil';
import Backdrop from '../../UI/Backdrop/Backdrop';

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

const sidedrawer = (props) => {
    let sidecls = ['SideDrawer','Close'];
    if(props.open)
    sidecls = ['SideDrawer','Open'];

    return (
        <Auxil>
            <Backdrop show={props.open} backClick={props.backClick} />
            <div className={sidecls.join(' ')}>
                <Logo />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxil>

    );
}

export default sidedrawer;