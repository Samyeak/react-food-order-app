import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

import React from 'react'

const MealItemForm = ({id}) => {
  return (
    <form className={classes.form}>
        <Input
            label="Amount"
            input={{
                id: `amount_${id}`,
                type: 'number',
                min: 1,
                max: 5,
                step: 5,
                defaultValue: 1
            }}
        />
        <button>+ Add</button>
    </form>
  )
}

export default MealItemForm;