import React from 'react'
import nobertechx from '../images/nobertechx.jpg'
import nobertechx3 from '../images/nobertechx3.jpg'
export const DefaultPost = () => {
  return (
    <div className='grid justify-items-center w-full'>
    <div className='w-full flex justify-center'><img className='md:w-8/12 w-10/12 md:h-[25rem]'  src={nobertechx} alt="" /></div>
    <div className='w-full flex justify-center'><img className='md:w-8/12 w-10/12 md:h-[25rem]' src={nobertechx3} alt="" /></div>
    </div>
  )
}
