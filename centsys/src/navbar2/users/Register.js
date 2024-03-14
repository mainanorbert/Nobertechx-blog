import React, { useEffect, useState } from 'react'
import image from '../images/tech.gif'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import axiosClient from '../../axios/AxiosClient'
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [iserror, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name === '' || email === '' || password === '' || passwordConf === '') {
      setErrorMessage('All fields are required')
      setIsError(true);
    }
    else {
      const payload = {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConf
      }
      axiosClient.post('/register', payload)
        .then((response) => {
          console.log(response.data.token)
          navigate('/login');

        })
        .catch((error) => {
          setErrorMessage(error.response.data.message)
          setIsError(true);
           console.log(error);
        })

    }

  }
  useEffect(() => {
    if (iserror) {
      const timer = setTimeout(() => {
        setIsError(false)
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [iserror])

  const handleShowPassword = () => {
    setShowPass(!showPass);
  }
  return (
    <div className="w-full grid place-items-center pb-6 h-screen" style={{ backgroundImage: `url("data:image/jpeg;base64,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")` }}>
      <form className='md:w-4/12 w-8/12 relative border p-2 grid' onSubmit={handleSubmit} >
        {iserror && (<motion.div
          initial={{ sclae: 0, y: 0 }}
          animate={{ sclae: 1, y: 2 }}
          duration={{ duration: 4 }}
          className='bg-red-600 absolute w-full text-center p-1 text-white rounded'>
          {errorMessage}

        </motion.div>)}
        <p className='text-center text-2xl text-neutral-300 font-bold'>Register Here</p>
        <div className='p-2'>
          <label className='text-neutral-300 font-bold'>Name</label><br />
          <input
            type="text"
            name='name'
            onChange={(e) => setName(e.target.value)}
            className='md:w-8/12 w-full p-1 h-8 border rounded' />
        </div>
        <div className='p-2'>
          <label className='text-neutral-300 font-bold'>Email</label><br />
          <input
            type="text"
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            className='md:w-8/12 w-full p-1 h-8 border rounded' />
        </div>
        <div className='p-2'>
          <label className='text-neutral-300 font-bold'>Password</label><br />
          <input
            type={showPass ? 'text' : 'password'}
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            className='md:w-8/12 w-full p-1  h-8 border rounded' />
        </div>
        <div className='p-2'>
          <label className='text-neutral-300 font-bold'>Confirm Password</label><br />
          <input
            type={showPass ? 'text' : 'password'}
            name='password_confirmation'
            onChange={(e) => setPasswordConf(e.target.value)}

            className='md:w-8/12 w-full p-1  h-8  border rounded' />
        </div>
        <div className='text-white p-2'>
          <input type="checkbox"
            checked={showPass}
            onChange={handleShowPassword}
          />
          <span>Show password</span>
        </div>

        <div className='w-full md:flex pl- justify-between'>
          <button className='bg-green-400 w-8/12 rounded font-bold text-neutral-300 hover:bg-green-500 h-8 '>Register</button>
         <div> <Link className="text-xs hover:font-bold text-neutral-300 underline" to="/login">Already Register? Login</Link></div>
        </div>

      </form>
    </div>
  )
}

export default Register