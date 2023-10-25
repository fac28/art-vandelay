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

const Listing = ({ image, artist, date, price, id, formatted_price }) => {
  return (
    <div>
      <Link href={`/listings/${id}`}>
        <Image src={image} width={500} height={500} alt='A pretty painting' />
      </Link>
      <p>{formatted_price}</p>
      <p>{artist}</p>
      <p>{date}</p>
      <AddToCartButton />
    </div>
  )
}
