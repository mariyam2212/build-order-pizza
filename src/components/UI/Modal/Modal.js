import React from 'react';
import '../Modal/Modal.css';
import Styled from 'styled-components';
import Auxil from '../../../hoc/Auxil';
import Backdrop from '../Backdrop/Backdrop';

const ModalDiv = Styled.div`
    transition : ${props => props.alt ? 'translateY(0)' : 'translateY(-100vh)'};
    opacity : ${props => props.alt ? '1' : '0'};
    display: ${props => props.alt ? 'inline' : 'none'}
`;

const modal = (props) => (
    <Auxil>
        <Backdrop show={props.show} backClick={props.backClick}/>
        <ModalDiv
            alt={props.show}
            className="Modal">
            {props.children}
        </ModalDiv>
    </Auxil>
);

export default modal;