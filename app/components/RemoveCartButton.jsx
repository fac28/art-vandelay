'use client'
import React, { useContext } from 'react'
import { CartContext } from './CartProvider.jsx'

const RemoveCartButton = ({ id }) => {
  const { items, removeFromCart } = useContext(CartContext)

  console.log(items)
  return (
    <>
      <button onClick={() => removeFromCart(id)} className='button-1'>
        Remove from cart
      </button>
    </>
  )
}

export default RemoveCartButton
