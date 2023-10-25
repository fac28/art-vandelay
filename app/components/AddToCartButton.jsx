'use client'
import React, { useContext } from 'react'
import { BasketContext } from '../context/cart.context'

const AddToCartButton = ({ product }) => {
  const { state, dispatch } = useContext(BasketContext)
  
  const addToBasketHandler = (product) => {
    dispatch({ dispatch: 'Add', article: product })
  }
  return (
    <>
      <button onClick={() => addToBasketHandler(product)} className='button-1'>
        Add to cart
      </button>
    </>
  )
}

export default AddToCartButton
