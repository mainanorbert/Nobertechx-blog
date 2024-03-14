import React from 'react'
// import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Categories from '../pages/Categories'

const About = () => {
  return (
    <>
      <div className='md:flex justify-center block w-full '>
        <div className='md:w-6/12 flex justify-center px-4 '>
          <div className='md:w-10/12 bg-slate-300  mr-[rem] mt-1.5'>
            <div className='md:p-1'>
              <div className='text-center text-green-700 font-semibold'>About NoberTechx</div>
              <p>NoberTechx is an online platform that offers technology tips and trending in technology
                through daily articles. The website seeks to encourage newbies in technology and hence promote technology in and out of Africa.
                Technology is radical and rapid, it changes daily and this is the reason we have taken position to research and identify the right trends for those willing to join technology field.
              </p>
            </div>
            <div className='md:p-2'>
              <div className='text-center text-green-700 font-semibold'>How we Promote Talent</div>
              <p> Here at NoberTechx we promote talent in many ways. First is through giving those with writing experience and passion in technology to write well researched articles as a way of promoting technology and exploring their talent
                By writing on our website you become exposed to our benevolent readers. Writing at our website gives you a chance to encourage and increase your chances of being paid depending on the size of audience you will command.
              </p>
            </div>
            <div className='md:p-2 p-0'>
              <div className='text-center text-green-700 font-semibold'>Technology Consultancy</div>
              <p>NoberTechx celebrates its rich and depth grasp of technology, this motivates our resolve to providing consultant services. As
                a result were have keenly chosen the two areas of focus to our customers i.e., Giving advice to beginners in technology on the best path to take
                and realize your profession. Secondly, We offer technology solutions to startups and this includes websites for advertisements, all graphic solutions, and how to best deploy technology for business values.  </p>
            </div>

          </div>
        </div>
      </div>
      
    </>
  )
}

export default About