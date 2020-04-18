import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>(
    <Modal
    isOpen = {!!props.selectedOption}
    contentLabel = 'Selected Option'
    onRequestClose = {props.handleCloseModal}
    closeTimeoutMS ={700}
    className="modal"
    >
    <h3 className="modal__title">Do this</h3>
    {props.selectedOption && <p className="modal--body">{props.selectedOption}</p>}
    <button className='button' onClick = {props.handleCloseModal}>Okay!</button>
    </Modal>
)

export default OptionModal