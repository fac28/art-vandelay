'use client'
import React from 'react'
import { useContext } from 'react'
//Components
import { BasketContext } from '../context/BasketContext'
import Image from 'next/image'
import BackArrow from '@/app/components/BackArrow'
import RemoveCartButton from '../components/RemoveCartButton'

const Cart = () => {
  const { state } = useContext(BasketContext)
  console.log(state);

  return (
    <main>
      <BackArrow path={'listings'} />
      <div className='text-center mx-4 mt-10 '>
        {state.map((product) => {
          return (
            <>
              <div key={product.id}>
                <Image
                  src={product.image}
                  layout='responsive'
                  width={1000}
                  height={700}
                  alt='A pretty painting'
                />
              </div>
              <div className='bg-secondary px-4 shadow-lg'>
                <h2 className='py-4 text-white text-3xl'>{product.name}</h2>
                <div className='flex gap-2 justify-center'>
                  <p className='text-sm italic'>{product.artist}</p>
                  <p className='text-sm italic'>{product.date}</p>
                </div>
                <div className='flex items-center justify-center gap-40 py-6 '>
                  <p>
                    <small>{product.price}</small>
                  </p>
                  <RemoveCartButton product={product} />
                </div>
              </div>
            </>
          )
        })}
      </div>
    </main>
  )
}

export default Cart
