import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    myIngredients: [
        {
            name: 'pizza base',
            quantity: 1,
            price: '20$'
        }
    ],
    finalCost: 20
};

const reducer = (state = initialState, action) => {
    const myingcopy = [...state.myIngredients];
    const copyIndex = myingcopy[action.index];
    let fc = state.finalCost;

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                myIngredients: state.myIngredients.concat({
                    name: action.ingSel.value,
                    quantity: 1,
                    price: action.ingSel.price,
                }),
                finalCost : fc + parseFloat(action.ingSel.price)
            };

        case actionTypes.INC_INGREDIENT:
            copyIndex.quantity = copyIndex.quantity + 1;
            return {
                ...state,
                myIngredients : [...state.myIngredients],
                finalCost : fc + parseFloat(copyIndex.price)
            };
        case actionTypes.DEC_INGREDIENT:
            const myingcopy1 = [...state.myIngredients];
            const copyIndex1 = myingcopy1[action.index];
            copyIndex1.quantity = copyIndex1.quantity - 1;
            return {
                ...state,
                myIngredients : [...state.myIngredients],
                finalCost : fc - parseFloat(copyIndex.price)
            };
            case actionTypes.SET_INGREDIENTS:
            return {
                myIngredients: [
                    {
                        name: 'pizza base',
                        quantity: 1,
                        price: '20$'
                    }
                ],
                finalCost: 20
            };
        default:
            return state;
    }
};

export default reducer; 