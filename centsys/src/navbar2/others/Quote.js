import React, { useEffect, useState } from 'react'
import quotes from './MyQuotes'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import motivation2 from '../images/motivation2.jpg'
import backg from '../images/backg.jpg'
import bg2 from '../images/bg_photo2.png'
const Quote = () => {
  const [index, setIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0)
  const texts = ['We Inspire Young People to Attain their goals', 'We Encourage Relentless Puersuasion of Goals',
    'We Motivate techies to conquer challenges']
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 10000)

    return () => {
      clearInterval(interval);
    };
  }, [texts.length])



  const handleNext = () => {

    { (index === quotes.length - 1) ? setIndex(0) : (setIndex(index + 1)) }
  }
  let myquotes = quotes[index];
  return (
    <>
      <div className='bg-slate-800'>

        <motion.div

          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ duration: 5, repeat: Infinity }}

          className='text-center font-bold text-white md:text-3xl w-full'>
          {texts[currentIndex]}
        </motion.div>

      </div>
      <div className='h-screen md:flex justify-center p-'>

        <div className='md:w-6/12 bg-green-80' style={{ backgroundImage: `url(${bg2})` }}>
          <div className=''>
            <div className='text-center md:text-3xl text-white font-bold '>Get Inspired</div>
            <div className='bg-green-80 flex justify-center'> <motion.img
              className='md:w-8/12 w-11/12'
              whileHover={{
                scale: [1, 1.4, 1.4, 1, 1],
                rotate: [0, 0, 100, 100, 0],
                borderRadius: ["15%", "15%", "45%", "45%", "15%"],
              }}

              src={motivation2} alt="" /></div>
          </div>
          <div className='text-center text-white font-bold text-xl p-4'>More Motivation</div>
        </div>

        <motion.div
          whileHover={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 0, 10, 10, 0],
            borderRadius: ["0%", "0%", "0%", "0%", "0%"],
          }}
          className='md:w-6/12' style={{ backgroundImage: `url(${backg})` }}>
          <div className='bg-gree-500 flex justify-evenly'>
            <div className='text-2xl rounded-full col-span-4  text-center ml-8 font-bold text-yellow-300'>Todays' Quote</div>
            <div>
              <Link to="/" className='text-white flex justify-center ' title='Go Home'>
              <div className='animate-bounce'><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-12 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg></div>
            <span>Go Home</span>
              </Link>
            </div>

          </div>

          <di className='bg-green-00  p-1'>
            <div className='flex justify-end px-1'>
              <button className='bg-green-400 p-1 rounded hover:bg-green-500 hover:text-white' onClick={handleNext}>New Quote</button>
            </div>

            <div className='bg-blue-60 relative'>
              <div className='absolut'> <img src={myquotes.image} alt="" className='absolut md:w-[6rem] w-[3rem] eft-4 rounded-full top-' /></div>
              <div className='md:px-12 absolute md:text-lg text-xs top-2 rounded w-10/12 right-0 text-neutral-300 font-serif'>"{myquotes.quote}"</div>
              <p className='text-right pb-6 mt-4 text-yellow-300'>~ {myquotes.name}</p>
            </div>
          </di>
          <div>
            <div className='text-white font-bold text-2xl text-center'><Link to='https://www.w3schools.com/' target={'_blank'}>Get Started Today to Learn your </Link></div>
            <div className='text-neutral-400 px-4 font-bold'>Visit <Link to="https://www.w3schools.com/" target={'_blank'}  className='text-blue-500 underline'>@w3schools</Link> to Learn the basics of Web Development and Hence Kick Start Your Journey Now. You can Learn:</div>
            <ol className='text-neutral-300 px-[6rem] list-disc'>
              <li>Web Development</li>
              <li>Software Engineering</li>
              <li>UI Design</li>
            </ol>
          </div>
        </motion.div>

      </div>
    </>
  )
}

export default Quote