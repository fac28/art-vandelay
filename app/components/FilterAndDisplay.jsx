'use client';

import Image from 'next/image'
import Link from 'next/link.js'
import { useState } from 'react'
import FilterMenu from './FilterMenu.jsx'
import AddToCartButton from './AddToCartButton.jsx'

export default function FilterAndDisplay({ listings }) {
  const [maxPrice, setMaxPrice] = useState(1250000);

  return (
    <>
      <FilterMenu
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      {listings
        .filter(listing => listing.price <= maxPrice)
        .map((listing) => {
          return <Listing key={listing.id} {...listing} />
        })}
    </>
  )
}

const Listing = ({ image, artist, date, price, formatted_price, id }) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='my-5'>
        <Link href={`/listings/${id}`}>
          <Image src={image} width={500} height={500} alt='A pretty painting' />
          <div className='bg-secondary flex flex-col items-center'>
            <h2 className='py-4 text-white text-3xl'>{name}</h2>
            <div className='flex gap-5'>
              <p className='text-sm italic'>{artist}</p>
              <p className='text-sm italic'>{date}</p>
            </div>
            <div className='flex items-center py-4 gap-14'>
              <p>{formatted_price}</p>
            </div>
          </div>
        </Link>
      </div>
    </div >
  )
}
