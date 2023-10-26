'use client'
import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext'

const AddToCartButton = ({ product }) => {
  const { state, dispatch } = useContext(BasketContext)

  const addToBasketHandler = (product) => {
    dispatch({ type: 'add', payload: { product } })
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
