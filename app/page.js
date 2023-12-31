import Image from 'next/image'
import Link from 'next/link'
import { getRandomImage } from './_lib/models/random-image.js'

export default function Home() {
  const isHomePage = true

  return (
    <main className='bg-purple w-[100vw]'>
      <div className='flex items-center justify-between'>
        <div className='w-[60vw] h-[84vh] block overflow-hidden relative'>
          <Image
            priority
            src={getRandomImage().image}
            layout='fill'
            objectFit='cover'
            alt=''
          />
        </div>

        <div className='mx-auto text'>
          <p className='mb-5 text-white px-2 italic'>new arrivals</p>
          <h2 className='text-white text-3xl px-2 pb-2 font-inder font-bold italic'>
            Fine art just a click away...
          </h2>
          <p className='mb-10 text-white px-2 text-justify text-xl max-w-28rem'>
            Handpicked treasures from every corner of the world, especially
            selected for the discerning collector. Stocks limited.
          </p>
          <div className='text-center'>
            <Link
              className='p-4 text-black bg-secondary rounded-lg text-center drop-shadow-lg relative border-secondary active:top-0.5'
              href='/listings/'
            >
              See the collection
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
