import React from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

const BackArrow = ({ path }) => {
  return (
    <div className='mx-5 my-5'>
      <Link href={`/${path}`}>
        <FaArrowLeft size={20} />
      </Link>
    </div>
  )
}

export default BackArrow
