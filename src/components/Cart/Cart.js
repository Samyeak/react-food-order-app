import React from 'react'
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = ({onClose}) => {
    const tempCartlist = [
        { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }
    ];

  return (
    <Modal onClose={onClose}>
        <CartList list={tempCartlist}/>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

const CartList = ({list}) =>{
    const items = list.map(item=><CartItem item key={item.name}/>)
    return (
        <ul className={classes["cart-items"]}>
            {items}
        </ul>
    )
};

const CartItem = ({name}) => (
    <li>{name}</li>
);

export default Cart;