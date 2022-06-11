import React, { useContext } from 'react'
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from './../../store/cart-context';
import CartItem from './CartItem';

const Cart = ({ onClose }) => {
    const cartContext = useContext(CartContext);
    const totalAmount = cartContext.totalAmount;
    const hasItems = cartContext.items.length > 0;

    const CartList = ({ list }) => {
        const items = list.map((item, index) => <CartItem {...item}
            key={item.id}
            onAdd={()=>cartContext.addItem({...item, amount: 1})}
            onRemove={()=>cartContext.removeItem(item.id)}
        />
        );
        return (
            <ul className={classes["cart-items"]}>
                {items}
            </ul>
        )
    };

    return (
        <Modal onClose={onClose}>
            <CartList list={cartContext.items} />
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;