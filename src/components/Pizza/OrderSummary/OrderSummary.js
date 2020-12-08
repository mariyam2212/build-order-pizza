import React from 'react';
import Auxil from '../../../hoc/Auxil';
import OrderLIst from './OrderList';
import '../../Pizza/pizza.css';
import Button from '../../UI/Button/Button';

const ordersummary = (props) => {


    return (
        <Auxil>
            <h3>Your order</h3>
            <label style={{fontWeight:"bold"}}>Your final price : {props.finalCost} $</label>
            <div className="listCls">
                <ul>
                    <OrderLIst ingredientlist={props.ingredientlist} />
                </ul>
            </div><br></br>
            <div style={{display:"flex"}}>
                <Button classes="buttonCheckout" click={props.cancelclk}>Cancel</Button>
                <Button classes="buttonCheckout" click={props.continueclk}>Continue</Button>
            </div>
        </Auxil>
    );
};
export default ordersummary;