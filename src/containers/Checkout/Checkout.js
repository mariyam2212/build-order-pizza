import React, { Component } from 'react';
import Checkoutsummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import * as orderActions from '../../store/Actions/index';

class Checkout extends Component {
   
    checkoutCancel = () => {
        this.props.history.goBack();
    }

    checkoutContinue = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    
    render () {
        let summary = <Redirect to="/" />
        if ( this.props.ings ) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
            summary = (
                <div>
                {purchasedRedirect}
                <Checkoutsummary
                    ingredientlist={this.props.ings}
                    checkoutCancel={this.checkoutCancel}
                    checkoutContinue={this.checkoutContinue} />
                <Route
                path={this.props.match.path + '/contact-data'} 
                render={(props) => (<ContactData {...props}/>)}/>
            </div>
            );
        }
        return summary;
    }
}
const mapStateToProps = state => {
    return {
        ings: state.pizzaBuilder.myIngredients,
        purchased: state.order.purchased
    }
};

const mapDispatchToProps = dispatch => {
    return {
        purchaseInit : () => dispatch(orderActions.purchaseInit())
    }
}
export default connect( mapStateToProps ,mapDispatchToProps)( Checkout );