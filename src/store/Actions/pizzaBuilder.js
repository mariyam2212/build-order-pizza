import * as actionTypes from './actionTypes';
// import axios from '../../axios-orders';

export const addIngredient = ( seling ,price ) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingSel: seling,
        price:price
    };
};
export const incIngredient = ( index ) => {
    return {
        type: actionTypes.INC_INGREDIENT,
        index: index
    };
};
export const decIngredient = ( index ) => {
    return {
        type: actionTypes.DEC_INGREDIENT,
        index: index
    };
};

export const setIngredients = ( ingredients ) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

// export const initIngredients = () => {
//     return dispatch => {
//         axios.get( 'https://react-my-burger.firebaseio.com/ingredients.json' )
//             .then( response => {
//                dispatch(setIngredients(response.data));
//             } )
//             .catch( error => {
//                 dispatch(fetchIngredientsFailed());
//             } );
//     };
// };