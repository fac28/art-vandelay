import Image from 'next/image'
import Link from 'next/link'
import { getRandomImage } from './_lib/models/random-image.js'

export default function Home() {
  const isHomePage = true
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

        <Link
          className='mx-auto p-4 text-black bg-white rounded-lg text-center'
          href='/listings/'
        >
          See the collection
        </Link>
      </div>
    </main>
  )
}
