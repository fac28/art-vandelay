import Image from 'next/image'
import Link from 'next/link.js'
import { getAll } from '../_lib/models/listings.js'
import AddToCartButton from '../components/AddToCartButton.jsx'

export default function Page() {
  const listings = getAll()
  return (
    <>
      {listings.map((listing) => {
        return <Listing key={listing.id} {...listing} />
      })}
    </>
  )
}

const Listing = ({ image, artist, date, price, id, name }) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='my-5'>
        <Link href={`/listings/${id}`}>
          <Image src={image} width={500} height={500} alt='A pretty painting' />
        </Link>
        <div className='bg-secondary flex flex-col items-center'>
          <h2 className='py-4 text-white text-3xl'>{name}</h2>
          <div className='flex gap-5'>
            <p className='text-sm italic'>{artist}</p>
            <p className='text-sm italic'>{date}</p>
          </div>
          <div className='flex items-center py-4 gap-14'>
            <p>{price}</p>
            <AddToCartButton />
          </div>
        </div>
      </div>

    </div>
  )
}
