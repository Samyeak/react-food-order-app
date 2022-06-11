import React from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = ({onShowCart}) => {
  return (
    <>
    <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onShowCart}/>
    </header>
    <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious meal" />
    </div>
    </>
  )
}

export default Header;