import React from 'react'

import image from "../images/passport.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Profile = () => {
    return (
        <div className='p-2 z-10'>
            <div className='bg-green-0 p-1'>
                <p className='text-center text-2xl font-extrabold text-green-0'>Author's Profile</p>
                <div className=" grid md:grid-cols-4 grid-cols-3 md:pl-[25rem]">
                    <div className="col-span-2  align-baseline relative">
                        <img className='w-[10rem] rounded-full' src={image} alt="" />
                        
                        <label htmlFor='image' className='absolute bottom-4 left-[6.5rem]'><svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                        </svg>
                        <input className='hidden' id='image' type="file" />

                        </label>

                    </div>
                    <div title='Update Profile'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={2} stroke="green" className="w-10 h-10 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>

                    </div>



                </div>
                <div className='md:pl-[20rem] grid grid-cols-2 md:text-2xl gap-2 place-items-start'>
                    <p className=''> <i>Name:</i> <span className='underline'>Norbert Osiemo</span></p>
                    <p className=''> <i>Specialist:</i> <span className='underline'>Tech Articles</span></p>
                    <p className=''> <i>Nationality:</i> <span className='underline'>Kenyan</span></p>
                    <p className=''> <i>Experience:</i> <span className='underline'>10 Years</span></p>
                    <p className=''> <i>Location:</i> <span className='underline'>Nairobi</span></p>
                </div>
                <div>
                    <div className='grid place-items-center'>
                        <div className='w-8/12'>
                            <p className='text-center text-2xl font-bold '>Biography</p>
                            <p>A technical specialist is a professional who has advanced knowledge and skills in a specific technology or field. They are experts in their respective areas and provide technical support, troubleshooting, implementation, and maintenance services for complex systems and technologies. They are often sought after for their expertise and experience in resolving complex technical issues, improving system performance, and finding innovative solutions to technical challenges. They continuously update their knowledge to keep pace with advancements in technology and industry trends.
                            </p>

                        </div>

                    </div>

                </div>

                <div className='flex justify-center'>
                    <button className='md:w-2/12 flex justify-center p-1 rounded gap-2 hover:bg-green-500  bg-green-600'>
                        <p className='text-neutral-800 hover:text-neutral-700'>Delete Account </p>
                        <p className='text-red-800 '><i class="fas fa-trash"></i></p>
                    </button>

                </div>


            </div>

        </div>
    )
}

export default Profile