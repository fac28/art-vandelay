import Image from "next/image"
import { getAll } from "../_lib/models/listings.js"

export default function Page() {
    const listings = getAll();
    return (
        <>
            {listings.map(listing => {
                return <Listing key={listing.id} {...listing} />
            })}
        </>
    )
}

const Listing = ({image, artist, description, price}) => {
    return (
        <div>
            <Image
                src={ image }
                width={ 500 }
                height={ 500 }
                alt="A pretty painting"
            />
            <p>{price}</p>
            <p>{artist}</p>
            <p>{description}</p>
        </div>
    )
}