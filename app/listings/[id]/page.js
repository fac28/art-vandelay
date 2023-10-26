import React from 'react'
import Image from 'next/image'
import { getProductById } from '@/app/_lib/models/listings'

//Components
import AddToCartButton from '@/app/components/AddToCartButton'
import BackArrow from '@/app/components/BackArrow'

const ProductDetails = ({ params }) => {
  const id = params.id
  const product = getProductById(id)
  return (
    <main>
      <BackArrow path={'listings'} />
      <div className='text-center mx-4 mt-10 '>
        <div>
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
          <p className='mt-4'>{product.description}</p>
          <div className='flex items-center justify-center gap-40 py-6 '>
            <p>
              <small>{product.formatted_price}</small>
            </p>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetails
