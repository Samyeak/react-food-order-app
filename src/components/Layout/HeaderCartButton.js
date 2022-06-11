import classes from './HeaderCartButton.module.css';

import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = ({onClick}) => {
  const cartContext = useContext(CartContext);
  const cartItemCount = cartContext.items.reduce((sum, item)=> sum+ item.amount, 0);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if(cartContext.items.length === 0)
      return;
    
    setBtnIsHighlighted(true);

    const timer = setTimeout(()=> {
      setBtnIsHighlighted(false);
    }, 300);
  
    return () => {
      clearTimeout(timer)
    }
  }, [cartContext.items]);
  return (
    <button className={btnClasses} onClick={onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartItemCount}</span>
    </button>
  )
}

export default HeaderCartButton;