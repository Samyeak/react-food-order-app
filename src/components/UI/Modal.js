import React from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const portalElement = document.getElementById("overlays");

const ModalOverlay = ({children})=>(
    <div className={classes.modal}>
        <div className={classes.content}>
            {children}
        </div>
    </div>
);

const Backdrop = ({onClose}) => <div className={classes.backdrop} onClick={onClose}></div>;

const Modal = ({children, onClose}) => {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  )
};

export default Modal;