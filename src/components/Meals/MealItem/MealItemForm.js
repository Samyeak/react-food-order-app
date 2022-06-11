import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

import React, { useRef, useState } from 'react'

const MealItemForm = ({id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event)=>{
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(!enteredAmount.trim() || enteredAmount < 1 || enteredAmount > 5){
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    onAddToCart(enteredAmountNumber);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input
            label="Amount"
            ref={amountInputRef}
            input={{
                id: `amount_${id}`,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}
        />
        <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}

export default MealItemForm;