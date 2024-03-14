import React from 'react'
import passport from '../images/download.jpg'
import Typewriter from 'typewriter-effect'
import { motion, Variants } from 'framer-motion'
import "../../mycss.css"
import axiosClient from '../../axios/AxiosClient'

const Display = () => {

  const wordVariants: Variants = {
    initial: {
      fontSize: '10px', // Initial font size (small)
    },
    animate: {
      fontSize: '40px', // Final font size (big)
    },
  };
  const DownloadCv = () => {
    axiosClient.get('/download/cv', { responseType: 'blob' })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'nober_cv.pdf');
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
      })
  }

  return (
    <div className='relative'>

      <div className='flex justify-center pt-1 relative'>
        <motion.img

          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className=' md:w-10/12 w-11/12 md:mr-[rem] h-[35rem] justify-center object-cover'
          src={passport} alt="" />

        <p className='absolute md:text-3xl text-xl w-full text-center text-neutral-200 font-bold'>
          <Typewriter
            options={{
              strings: [
                "NoberTechx Hub",
                "Get Latest Articles on Technology",
                "We are here to motivate upcoming Techies"
              ],
              autoStart: true,
              loop: true,
              delay: 1,
              cursor: "",
              deleteSpeed: 40

            }}
          />
        </p>



      </div>
      <motion.div className='absolute top-[16rem] left-[4rem] text-left flex justify-start md:text-3xl text-sm font-bold text-white'
        initial={{ x: 0 }} // Initial position of the word
        animate={{ x: 100 }} // Animation position
        transition={{ duration: 5, repeat: Infinity }} // Animation duration and repeat
        variants={wordVariants}
      // Custom styling
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('The Goal is Technology').start();
          }}
          options={{
            // strings:["Absolute"],
            autoStart: true,
            loop: true,

          }}
        />
      </motion.div>
      <div className='md:pt-8 pt-4 flex justify-center'>
        <div className='md:w-10/12 p-1'>
          <div className='text-center font-bold text-xl'>About the Developer</div>
          <div>Norbert Osiemo is a fervent advocate of web development, possessing adeptness
            in various web technologies, including HTML, Tailwind CSS, Vanilla JavaScript, and React.js. Coupled
            with proficiency in Programming Languages such as C and PHP (with a specialization in Laravel), Norbert's
            commitment to augmenting his skill set is exemplified by his ongoing pursuit of mastery in Python. Holding a
            distinguished bachelor's degree (BSc. Mathematics and Computer Science), Norbert Osiemo aspires to catalyze
            transformative change on a global scale through the strategic utilization of technology. His unwavering
            objective is to orchestrate the alignment of technological prowess with business imperatives, effecting
            operational enhancements in a streamlined and productive manner.</div>

          <div className='mt-2 text-slate-700'>See Developer's CV Below:</div>
          <div onClick={DownloadCv} className='text-center cursor-pointer flex justify-center pt-2 rounded-xl bg-green-400'>
            <div className='animate-bounce'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-8 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg></div>
            <div className='font-bold text-xl text-neutral-700'>Download CV</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Display