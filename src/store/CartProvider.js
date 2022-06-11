import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) =>{
    if(action.type === "ADD"){
        let updatedItems = [...state.items];
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        
        const existingItemIndex = updatedItems.findIndex(item => item.id === action.item.id);

        if(existingItemIndex !== -1){
            const existingItem = updatedItems[existingItemIndex];
            let updatedItem  = {...existingItem, amount: existingItem.amount + action.item.amount};
            updatedItems[existingItemIndex] = updatedItem;
        }else{
            updatedItems = updatedItems.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if(action.type === "REMOVE"){
        let updatedItems = [...state.items];
        const existingItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        if(existingItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id);
        }else{
            let updatedItem  = {...existingItem, amount: existingItem.amount - 1};
            updatedItems[existingItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return defaultCartState;
}

const CartProvider = ({children}) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => dispatchCartAction({type: "ADD", item: item});
    const removeItemFromCartHandler = (id) => dispatchCartAction({type: "REMOVE", id: id});

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

  return (
    <CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;