import React from 'react'
import { FaTwitterSquare, FaInstagram, FaGithubAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='flex items-center justify-between bg-secondary py-3 fixed inset-x-0 bottom-0'>
      <div className='px-3'>
        <p>
          <small>All art is really for sale.</small>
        </p>
      </div>
      <div className='flex gap-5 px-3'>
        <FaTwitterSquare size={30} />
        <FaInstagram size={30} />
        <FaGithubAlt size={30} />
      </div>
    </footer>
  )
}

export default Footer
