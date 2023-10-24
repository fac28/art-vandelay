import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const CartButton = () => {
  return (
    <button className='px-5'>
        <FaShoppingCart size={30} />
      </button>
  )
}

export default CartButton