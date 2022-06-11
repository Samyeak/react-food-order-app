import classes from './MealItem.module.css';

import React, { useContext } from 'react'
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = ({id, name, description, price}) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount)=>{
    console.log("one")
    cartContext.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price
    });
  }
  return (
    <li>
        <div>
            <h3>{name}</h3>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <MealItemForm id={id} onAddToCart={addToCartHandler}/>
    </li>
  )
}

export default MealItem;