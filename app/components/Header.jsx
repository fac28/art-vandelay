import React from 'react'
import Link from 'next/link'

//Components
import FilterButton from './FilterButton'
import CartButton from './CartButton'

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-secondary' style={{
      
      height: '8vh',
    
    }}>
        <Link className='flex items-center gap-3 py-3 px-5' href='/'>
        <div className='w-11 h-11 bg-black shadow-lg'></div>
        <h1 className='text-2xl'>Art Vandelay</h1>
        </Link>
      <FilterButton />
      <CartButton />
    </header>
  )
}

export default Header
