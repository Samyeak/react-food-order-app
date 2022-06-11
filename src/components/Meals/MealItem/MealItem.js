import classes from './MealItem.module.css';

import React from 'react'
import MealItemForm from './MealItemForm';

const MealItem = ({id, name, description, price}) => {
  return (
    <li>
        <div>
            <h3>{name}</h3>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <MealItemForm id={id}/>
    </li>
  )
}

export default MealItem;