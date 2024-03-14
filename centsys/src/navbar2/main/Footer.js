import React from 'react'
import Navbar from './Navbar'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {


    const [activeLink, setActiveLink] = useState(null)
    const location = useLocation();
    useEffect(() => {
        setActiveLink(location.pathname)
    }, [location]);

    return (
        <div id='footer'
        className="md:flex text-left shadow-2xl  justify-between px-4 bg-slate-500 gap-2 text-white place-items-center  mt-[rem] ">

            <div className='bg-green-00 w-ful'>
                <div className='underline font-bold hover:text-white md:text-neutral-400 text-neutral-200'>Links</div>
               <div className='flex space-x-4  hover:text-blue-600'>
                    <div><Link to="/" className={`${activeLink === '/' ? 'text-yellow-300 underline' : ''}`} onClick={() => setActiveLink('/')}>Home</Link></div>
                    <div> <Link to="/articles" className={`${activeLink === '/articles' ? 'text-yellow-300 underline' : ''}`}>Articles</Link></div>
                    <div><Link to="/about" className={`${activeLink === '/about' ? 'text-yellow-300 underline' : ''}`} >About</Link></div>
                    <div><Link to="/contact" className={`${activeLink === '/contact' ? 'text-yellow-300 underline' : ''}`}>Contact</Link></div>
                    </div>
            </div>
            <div>

                <div className='underline font-bold list-disc text-left hover:text-white md:text-neutral-400 text-neutral-200'>Contacts</div>
                <div className='text-left  hover:text-blue-600'>
                    <div className=' space-x-2'> <span className='space-x-2'>Email Us <i class="fas fa-envelope"></i>: mainanorbert@gmail.com</span>

                    </div>
                    <div className=' space-x-2'> <span className='space-x-2'>Phone: 0799535642</span>

                        
                    </div>
                </div>
            </div>

            <div  className='bg-gree-500'>
                <div className=' font-bold md:text-neutral-400 hover:text-white text-neutral-200 underline'>Follow us: Social media</div>
                <div className='flex space-x-6 hover:text-blue-600'>
                    <div><Link to="https://web.facebook.com/?_rdc=1&_rdr" target={'_blank'}  ><FontAwesomeIcon className='md:h-5 text-blue-500' icon={faFacebook} /></Link></div>
                    <div><Link to="https://www.instagram.com/" target={'_blank'}  ><FontAwesomeIcon className='md:h-5 text-slate-400' icon={faInstagram} /></Link></div>
                    <div><Link to="https://web.whatsapp.com/" target={'_blank'} ><FontAwesomeIcon className='md:h-5  text-green-500' icon={faWhatsapp} /></Link></div>
                    <div><Link to="https://twitter.com/mainanorbert2" target={'_blank'} ><FontAwesomeIcon className='md:h-5  text-blue-500' icon={faTwitter} /></Link></div>


                </div>
            </div>

        </div>
    )
}

export default Footer
