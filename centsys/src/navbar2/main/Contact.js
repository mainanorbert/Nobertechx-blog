import React from 'react'
import Sidebar from './Sidebar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDown } from "@fortawesome/free-solid-svg-icons";


const Contact = () => {
  return (
    <div className=' md:flex grid w-full'>

      <div className='md:w-4/12 md:overflow-auto bg-slate-300'>
        <Sidebar />
      </div>

      <div className='md:w-8/12 bg-slate-300 m-2 ml-1 relative'>   

        <form className=' md:w-full grid  p-2'>

        <p className='text-left pl-[3rem] text-green-600 font-bold text-2xl'>Contact Us to Publish Your Article</p>



            <div className=''>
              <input  placeholder='Subject if your issue' className='md:w-8/12 w-full bg-white p-1 border rounded' type="text" />
            </div>

            <div className='mt-1 '>
              <textarea className=' bg-white md:w-8/12 w-full rounded border p-1' placeholder='Describe your issue....' 
               cols="30" rows="10"></textarea>
            </div>

        
          <div className='pl-4 w-full items-center  '>
            <button className='w-4/12 p-1   font-bold hover:bg-green-700 hover:text-neutral-200 rounded text-neutral-300 bg-green-600 text-center'>Submit</button>
            </div>
        
        </form>

        <a href="#footer" className='absolute md:block  hidden top-4 right-6 justify-center border '>
        <div className='font-extrabold text-green-500'>More Contacts <span><i class="fas fa-down"></i></span></div>
        <p className='text-center flex animate-bounce  text-green-600 mt-4 justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
        </p>

        </a>
        
      </div>

    </div>
  )
}

export default Contact
