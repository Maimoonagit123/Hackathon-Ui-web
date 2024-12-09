import React from 'react'
import Link from 'next/link'

const Navbar2 = () => {
  return (
    <div>
      <div className=' flex justify-between items-center h-[74px]  pl-[180px] gap[400px]'>
        <div className=' '>
          <ul className=' flex  justify-between items-center text-sm w-[339px] h-[15px] '>
            <li  className='hover:text-blue-400'><Link href="/">Home</Link></li>
            <li className='hover:text-blue-400'><Link href="/">Shop</Link></li>
            <li className='hover:text-blue-400'><Link href="/">Product</Link></li>
            <li className='hover:text-blue-400'><Link href="/">Pages</Link></li>
            <li className='hover:text-blue-400'><Link href="/">About</Link></li>
          </ul>
        </div>
        <div className='flex w-[168px] gap-1 h-[15px] text-xs'>
        <div className= 'opacity-70 '>
          Contact:
        </div>
        <div>
        (808) 555-0111
        </div>
        </div>
        

      </div>
    </div>
  )
}

export default Navbar2
