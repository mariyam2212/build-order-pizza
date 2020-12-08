import React from 'react';

const orderlist = (props) => props.ingredientlist.map((ing) => {
        return <li key={ing.name}><span>{ing.name}</span> : {ing.quantity}</li>
})

export default orderlist;