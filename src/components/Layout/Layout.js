import React, { Component } from 'react';
import Auxil from '../../hoc/Auxil';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        isSideDrawer: false
    }

    openDrawerHandler = () => {
        const val = this.state.isSideDrawer;
        this.setState({isSideDrawer : !val})
    }

    render() {
        return (
        <Auxil>
            <Toolbar opendrawer={this.openDrawerHandler}/>
            <SideDrawer open={this.state.isSideDrawer} backClick={this.openDrawerHandler}/>
            <main style={{height:"600px",overflow:"auto"}}>{this.props.children}</main>
        </Auxil>
        );
    }
}

export default Layout;