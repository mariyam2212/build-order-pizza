import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import './ContactData.css';
import { connect } from 'react-redux';
import Input from '../../../components/UI/Input/Input';
import * as pizzaBuilderActions from '../../../store/Actions/index';

class ContactData extends Component {
    state = {orderForm: {
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: ''
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Street'
            },
            value: ''
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ZIP Code'
            },
            value: ''
        },
        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Country'
            },
            value: ''
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            },
            value: ''
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'}
                ]
            },
            value: 'fastest'
        }
    },
       
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        
        const formdata = {};
        for ( let i in this.state.orderForm){
            formdata[i] = this.state.orderForm[i].value
        }
        const order = {
            ingredients : this.props.ingl,
            price : this.props.finalCost,
            customerData : formdata
        }
        this.props.purchasePizza(order);
    }
    
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});
    }
    render () {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button  classes="buttonCheckout">ORDER</Button>
            </form>
        );
        if ( this.props.loading ) {
            form = <Spinner />;
        }
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        ingl : state.pizzaBuilder.myIngredients,
        loading : state.pizzaBuilder.loading,
        finalCost : state.order.finalCost
    };
}
const mapDispatchToProps = dispatch => {
    return {
        purchasePizza : (orderData) => dispatch(pizzaBuilderActions.purchasePizza( orderData )),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactData);