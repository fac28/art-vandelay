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
    <main className='bg-purple' style={{ width: '100vw' }}>
      <div className='flex items-center justify-between'>
        <div
          style={{
            width: '60vw',
            height: '84vh',
            display: 'block',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Image
            priority
            src={getRandomImage().image}
            layout='fill'
            objectFit='cover'
            alt=''
          />
        </div>

        <Link className='mx-auto p-4 text-white' href='/listings/'>
          See the collection
        </Link>
      </div>
    </main>
  )
}
