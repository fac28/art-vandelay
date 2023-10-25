'use client'
import React, { useReducer } from 'react'
import { cartReducer } from '../api/cartReducer'
import { createContext } from "react";

export const CartContext = createContext({
  items: [],
})

const CartProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(cartReducer, { items: [] })


  //Util functions
  const addToCart = (id) => {
    const updatedCart = [...state.items, id]
    dispatch({
      type: 'ADD',
      payload: {
        items: updatedCart,
      },
    })
  }
  const removeFromCart = (id) => {
    const updatedCart = state.items.filter(
      (currentProduct) => currentProduct.id !== id
    )
    dispatch({
      type: 'REMOVE',
      payload: {
        items: updatedCart,
      },
    })
  }

  const cart = {
    items: state.items,
    addToCart,
    removeFromCart
  }

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>
}

export default CartProvider
