import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import { connect } from 'react-redux';
import * as actionsList from '../../store/Actions/index';

class Orders extends Component {
    
    componentDidMount(){
        this.props.fetchOrders();
    }
    
    render () {
        return (
            <div style={{
                overflow:'auto',
                height:'600px'
            }}>
                {this.props.orders.map(order => (
                    <Order 
                    ingredients={order.ingredients}
                    price={order.price}/>
                ))}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        orders : state.order.orders,
        loading : state.order.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders : (ingSel,price) => dispatch(actionsList.fetchOrders()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders, axios));