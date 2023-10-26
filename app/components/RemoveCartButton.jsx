'use client'
import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext'
const RemoveCartButton = ({ product }) => {
  const { dispatch } = useContext(BasketContext)
  console.log(product.id);
  const id = product.id

  const onRemoveHandler = () => {
    dispatch({ type: 'delete', payload: { id } })
  }

  return (
    <>
      <button onClick={onRemoveHandler} className='button-1'>
        Remove from cart
      </button>
    </>
  )
}

export default RemoveCartButton
