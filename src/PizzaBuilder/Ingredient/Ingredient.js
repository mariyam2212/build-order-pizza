import React from 'react';
import '../PizzaBuilder/PizzaBuilder.css';
import styled from 'styled-components';
import Button from '../../components/UI/Button/Button';

// const Button = styled.button`
//     margin: 0px 10px;
//     font-size: 20px;
//     width: 10%;
//     background-color: black;
//     color: white;
//     border: none;
// `;
const Quantity = styled.label`
    border: 1px solid white;
    border-radius: 30px;
    padding: 2px 10px;
    color : white;
    width:6%;
    float: right;`;

const IngName = styled.label`
    float:left;
    color:white;
    width:40%;
`;

const Ingredient = (props) => {
    return (
        <div className="ingredientCls">
            <IngName>{props.ingredient}</IngName>
            <Button click={props.incIng}>+</Button>
            <Button click={props.decIng}>-</Button>
            <Quantity>{props.quantity}</Quantity>
            <Quantity>{props.price}</Quantity>
        </div>
    );
}
export default Ingredient;