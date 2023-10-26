import { getAll } from '../_lib/models/listings.js'
import Listing from '../../app/components/Listing.jsx'

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
