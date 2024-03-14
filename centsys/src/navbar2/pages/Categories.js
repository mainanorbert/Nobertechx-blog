import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (

        <div className='text-cent p-1'>
            <div className=' text-center bg-green-500 p-1 hover:bg-green-600 hover:text-white rounded-full'>
                <Link to='/quotes' className=' md:text-left font-bold text-lg text-center text-white'>Inspiration and Resources</Link>
            </div>

           <div className='bg-blue-00 w-full'>
           <div div className='text-left text-green-800 font-bold text-lg my-2 w-full bg-blue-00'>NoberTechx Services</div>
           <ul className='px-1 grid gap-2 list-disc'>

               <li className='text-sm'><a href="">Artificial Intelligence</a></li>
               <li className='text-sm'><a href="">Web Development</a></li>
               <li className='text-sm'><a href="">Cyber Security</a></li>
               <li className='text-sm'><a href="">Software Engineering</a></li>
           </ul>
           </div>
        </div>
    )
}

export default Categories