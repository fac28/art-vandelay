'use client'
import React, { useContext, useState, useEffect } from 'react'
import {CartContext} from '../components/CartProvider'

const AddToCartButton = ({ id }) => {
  const [inCart, setInCart] = useState(false)

  const { items, addToCart, removeFromCart } = useContext(CartContext)

  console.log(items);

  // useEffect(() => {
  //   const inCart = items.find((item) => item.id === id)
  //   if (inCart) {
  //     setInCart(true)
  //   } else {
  //     setInCart(false)
  //   }
  // }, [items, id])

  // console.log(inCart);
  const handleAddClick = () => {
        const inCart = items.find((item) => item.id === id)
    if (inCart) {
      setInCart(true)
      addToCartFromCart(id)
    } else {
      setInCart(false)
    }
  }
  return (
    <>
      {inCart ? (
        <button onClick={() => removeFromCart(id)} className='button-1'>
          Remove from cart
        </button>
      ) : (
        <button onClick={() => handleAddClick} className='button-1'>
          Add to cart
        </button>
      )}
    </>
  )
}

export default AddToCartButton
