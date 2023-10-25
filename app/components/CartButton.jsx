'use client'
import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { BasketContext } from '../context/cart.context'

const CartButton = ({ id }) => {
  const {state} = useContext(BasketContext)

  console.log(state);

  return (
    <div>
      <button className='px-5'>
        <FaShoppingCart size={30} />
      </button>
    </div>
  )
}

export default CartButton
