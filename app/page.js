import Image from 'next/image'
import Link from 'next/link'
import db from './_lib/database/db.js'

const getRandomImage = () => {
  const randomProduct = db.prepare(/*sql*/ `
      SELECT image
      FROM products
      ORDER BY RANDOM()
      LIMIT 1
  `)

  return randomProduct.get()
}

export default function Home() {
  return (
    <main>
      <Image
        priority
        src={getRandomImage().image.toString()}
        height={750}
        width={750}
        alt=''
      />

      <Link href='/listings/'>See the collection</Link>
    </main>
  )
}
