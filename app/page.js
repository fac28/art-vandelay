import Layout from './layout.js'
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
    <Layout>
      <main>
        <Image
          priority
          src={getRandomImage().image.toString()}
          height={750}
          width={750}
          alt=''
        />
        <h1>Art Vandelay</h1>
        <h2>import/export</h2>

        <Link href='/listings/'>See the collection</Link>
      </main>
    </Layout>
  )
}
