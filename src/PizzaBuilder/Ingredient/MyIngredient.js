import React from 'react';
import Ingredient from './Ingredient';
import { connect } from 'react-redux';
// import * as actionTypes from '../../store/Actions/actionTypes';
import * as pizzaBuilderActions from '../../store/Actions/index';

const MyIngredient = (props) => props.ingl.map((ing, index) => {
    if (ing.quantity !== 0)
        return <Ingredient
            ingredient={ing.name}
            quantity={ing.quantity}
            price={ing.price}
            incIng={() => props.incIng(index)}
            decIng={() => props.decIng(index)}
            key={ing.name} />
    return null;
})

const mapStateToProps = (state) => {
    return {
        ingl : state.pizzaBuilder.myIngredients,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        selectHandler : (ingSel,price) => dispatch(pizzaBuilderActions.addIngredient(ingSel,price)),
        incIng : (index) => dispatch(pizzaBuilderActions.incIngredient(index)),
        decIng : (index) => dispatch(pizzaBuilderActions.decIngredient(index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyIngredient);
