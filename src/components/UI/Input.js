import classes from './Input.module.css';

import React from 'react'

const Input = ({input, label}) => {
  return (
    <div className={classes.input}>
        <label htmlFor={input.id}>{label}</label>
        <input {...input}/>
    </div>
  )
}

export default Input;