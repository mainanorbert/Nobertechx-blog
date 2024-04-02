import React from 'react'
import Display from '../pages/Display'

import Sidebar from './Sidebar'
import Categories from '../pages/Categories'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <div className='md:flex block md:gap-0 overflow-y-auto '>
        <div className='w-5/12 md:block hidden'><Sidebar /></div>
        <div className='w-full bg-green bg-slate-300 md:ml-2'><Display /></div>
        <div className='mb-0  mt-5 p-4 md:p-0  md:w-3/12'> <Categories /></div>
        <div className=' md:hidden text-sm mt-8 '><Sidebar /></div>



      </div>
      <div><Footer /></div>
    </div>

  )
}

export default Home
