'use client'
import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { BasketContext } from '../context/BasketContext'
import Link from 'next/link'

const CartButton = () => {
  const { state } = useContext(BasketContext)

  return (
    <Link href='/cart'>
      <div className='flex items-center justify-center'>
        <p>{state.length}</p>
        <button className='px-5'>
          <FaShoppingCart size={30} />
        </button>
      </div>
    </Link>
  )
}

export default CartButton
