import React, { Component } from 'react';
import Auxil from '../../hoc/Auxil';
import Select from 'react-select';
import './PizzaBuilder.css';
import '../../App.css';
import MyIngredient from '../Ingredient/MyIngredient';
import ClassDiv from '../../hoc/ClassDiv';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';
import Button from '../../components/UI/Button/Button';
import axios from '../../axios-orders';
import ErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import { connect } from 'react-redux';
import * as pizzaBuilderActions from '../../store/Actions/index';

const options = [
    { value: 'chicken', label: 'chicken', price: '50$' },
    { value: 'cheese', label: 'cheese', price: '40.5$' },
    { value: 'olives', label: 'olives', price: '20.5$' },
    { value: 'onion', label: 'onion', price: '20$' },
    { value: 'pepperoni', label: 'pepperoni', price: '20.4$' },
    { value: 'mushrooms', label: 'mushrooms', price: '30.8$' },
    { value: 'cherry tomato', label: 'cherry tomato', price: '20$' },
    { value: 'capsicum', label: 'capsicum', price: '20$' },
];


class PizzaBuilder extends Component {

    state = {
        selectedIng: null,
        myIngredients: [{ name: 'pizza base', quantity: 1, price: '20$' }],
        finalCost: 20,
        isPurchasable: false,
        purchasing: false
    }

     componentDidMount() {
        this.props.setIngredients();
     }

    // incIng = (index) => {
    //     const ilist = [...this.props.ingl];
    //     let q = ilist[index].quantity;
    //     let pp = parseFloat(ilist[index].price);
    //     let fc = this.state.finalCost;
    //     fc += (pp / q);
    //     pp = (pp / q) * (q + 1);
    //     q += 1;
    //     ilist[index].quantity = q;
    //     ilist[index].price = pp + '$';
    //     this.setState({ myIngredients: ilist, finalCost: fc });
    // }

    // decIng = (index) => {
    //     const ilist = [...this.props.ingl];
    //     let fc = this.state.finalCost;
    //     if (ilist[index].quantity > 0) {
    //         let q = ilist[index].quantity;
    //         let pp = parseFloat(ilist[index].price);
    //         fc -= (pp / q);
    //         pp = (pp / q) * (q - 1);
    //         q -= 1;
    //         ilist[index].quantity = q;
    //         ilist[index].price = pp + '$';
    //     }
    //     this.setState({ myIngredients: ilist, finalCost: fc });
    // }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCloseHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        this.props.purchaseInit();
        this.props.history.push('/checkout');
    }

    render() {
        return (
            <Auxil>
                <Modal show={this.state.purchasing} backClick={this.purchaseCloseHandler}>
                    <OrderSummary
                        ingredientlist={this.props.ingl}
                        finalCost={this.props.finalCost}
                        cancelclk={this.purchaseCloseHandler}
                        continueclk={this.purchaseContinueHandler} />
                </Modal>
                <div className="pizzabuildstyle">
                    <Select className="selectCls" onChange={this.props.selectHandler} options={options} />
                    <ClassDiv classes="height60">
                        <MyIngredient decIng={this.decIng}  />
                    </ClassDiv>
                    <ClassDiv classes="height20">
                        <label className="blackLabelCls">{this.props.finalCost} $</label>
                        <Button classes="buttonCheckout" click={this.purchaseHandler} disabled={this.props.finalCost <= 20}>Checkout</Button>
                    </ClassDiv>
                </div>
            </Auxil>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingl : state.pizzaBuilder.myIngredients,
        finalCost : state.pizzaBuilder.finalCost
    };
}

const mapDispatchToProps = dispatch => {
    return {
        selectHandler : (ingSel,price) => dispatch(pizzaBuilderActions.addIngredient(ingSel,price)),
        incIng : (index) => dispatch(pizzaBuilderActions.incIngredient(index)),
        purchaseInit : () => dispatch(pizzaBuilderActions.purchaseInit()),
        setIngredients : () => dispatch(pizzaBuilderActions.setIngredients())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ErrorHandler(PizzaBuilder, axios));
// export default PizzaBuilder;