import { getAll } from '../_lib/models/listings.js'
import FilterAndDisplay from '../components/FilterAndDisplay.jsx'

export default function Page() {
  const listings = getAll()
  return (
    <FilterAndDisplay listings={listings} />
  )
}