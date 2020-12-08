import React from 'react';
import Button from '../../UI/Button/Button';
import '../CheckoutSummary/CheckoutSummary.css';
import OrderLIst from '../../Pizza/OrderSummary/OrderList';

const checkoutsummary = (props) => {
    return (
        <div className="checkoutsummaryCls">
            <h1>Hope it tastes well !</h1>
            <div style={{ width:"100%", margin:"auto" }}>
                <ul>
                    <OrderLIst ingredientlist={props.ingredientlist} />
                </ul>
            </div>
            <div style={{ display: "flex" }}>
                <Button classes="buttonCheckout" click={props.checkoutCancel}>Cancel</Button>
                <Button classes="buttonCheckout" click={props.checkoutContinue}>Continue</Button>
            </div>
        </div>
    );
}

export default checkoutsummary;