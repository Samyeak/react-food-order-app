import React from 'react'

const Cart = () => {
    const tempCartlist = [
        { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }
    ];

  return (
    <div>
        <CartList list={tempCartlist}/>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes["button--alt"]}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </div>
  )
}

const CartList = (list) =>{
    const items = list.map(item=><CartItem item/>)
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