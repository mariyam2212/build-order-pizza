import React from 'react';
import './Button.css';

const Button = (props) => (
<button onClick={props.click} className={['buttonCls' , props.classes].join(' ')} disabled={props.disabled}>{props.children}</button>
);

export default Button;