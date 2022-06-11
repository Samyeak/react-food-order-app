import classes from './HeaderCartButton.module.css';

import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = ({onClick}) => {
  const cartContext = useContext(CartContext);

  const cartItemCount = cartContext.items.reduce((sum, item)=> sum+ item.amount, 0);
  return (
    <button className={classes.button} onClick={onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartItemCount}</span>
    </button>
  )
}

export default HeaderCartButton;