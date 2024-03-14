import React, { useEffect } from 'react'
import Sidebar from '../main/Sidebar'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faWhatsapp, faIma } from '@fortawesome/free-brands-svg-icons';
import { useAuthContext } from '../../context/ContextProvider'
import tech from '../images/tech.gif'
import axiosClient from '../../axios/AxiosClient'
import { useLocation, useNavigate } from 'react-router-dom';

const Add = () => {
    const navigate = useLocation()
    const { userId } = useAuthContext()
    const [files, setFiles] = useState(0)
    const [error, setError] = useState('')
    const [isError, setIsError] = useState(false)
    const [image, setImage] = useState()

    const [payload, setPayload] = useState({
        title: '',
        article: '',
        category: '',
        user_id: userId
    })
    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setPayload((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleChange = (e) => {

        setFiles(e.target.files.length);
        const file = setImage(e.target.files[0])
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (payload.title === '' || payload.article === '', payload.category === '') {
            setError('Fill all fields. Cannot Submit empty fields')
            setIsError(true)

        }
        const formData = new FormData();
        formData.append('title', payload.title);
        formData.append('article', payload.article);
        formData.append('category', payload.category);
        formData.append('user_id', userId);
        formData.append('image', image);    

        console.log('fd1:', formData.title)
        axiosClient.post('add/article', formData)
            .then((response) => {
                console.log('lff:', response)
                setError("You have successfully submitted an article")
                setIsError(true)
                setPayload({
                    title: '',
                    article: '',
                    category: '',
                    user_id: userId
                });
                navigate('/add/article')

            })
            .catch(({ error }) => {
                console.log(error)
            })

    }
    useEffect(() => {
        if (isError) {
            const timer = setTimeout(() => {
                setIsError(false)

            }, 5000);
            return () => clearInterval(timer)
        }
    }, [isError])




    return (
        <div className='flex gap-7  bg-slate-300'>
            <div className='w-4/12 md:block hidden bg-slate-300 overflow-auto'> <Sidebar /></div>
            <div className='w-full h-scre bg-slate-400 p-3'>
                <p className='text-center md:text-2xl font-extrabold text-neutral-600'>Publish New Article</p>
                <form className='  place-items-center relativ md:p-4' onSubmit={handleSubmit}  encType='multipart/form-data'>
                    {isError && (<motion.div
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                        className='absolute bg-red-600 p-1 md:w-6/12 w-11/12 rounded text-center text-white'>{error}</motion.div>)}

                    <div className='md:w-full bg-green-00'>
                        <div className='md:flex justify-between space-x-1 w-full bg-green-00 '>
                            <div className='md:w-8/12 space-x-1 p-1 md:flex '>
                                <div><label className='md:text-2xl font-semibold text-neutral-300'>Title</label></div>
                                <input
                                    name='title'
                                    value={payload.title}
                                    onChange={handleInputChange}
                                    className='md:w-10/12 bg-slate-200 w-8/12 border focus:outline-none focus:border-none font-bold md:h-8 h-6 rounded-xl px-2' name='title' placeholder='Title...' type="text" />
                            </div>
                            <div className='md:flex md:w-6/12 p-1 space-x-1'>
                                <div><label className='md:text- text-sm text-neutral-300 font-bold'>Category</label></div>
                                <select defaultValue={payload.category} onChange={handleInputChange} name='category'
                                    className='focus:outline-none bg-slate-200 rounded-xl md:w-8/12 w-8/12 md:text-sm md:h-8 h-6'
                                >
                                    <option value="">Select Category</option>
                                    <option value="Artificial Intelligence" >Artificial Intelligence</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Computer Science">Cyber Security</option>
                                    <option value="Software Engineering">Software Engineering</option>
                                </select>
                            </div>
                        </div>
                        <div className=' flex'>
                            <label htmlFor='image' className='ml-2 text-4x cursor-pointer text-blue-800' title='Upload FrontLine Image'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>

                                </div>
                                <input type="file" id='image' name='image' className='hidden' onChange={handleChange} />
                                <span className='text-sm text-green-400'>({files})photo</span>
                            </label>

                        </div>

                        <div className='md:px-4 mt-2'>
                            <textarea className='md:w-11/12 w-full focus:outline-none p-2 border W rounded bg-slate-200 '
                                name='article'
                                value={payload.article}
                                onChange={handleInputChange}
                                type="text" cols="10" rows="15" placeholder='Type Your Article Here...'></textarea>
                        </div>


                        <div className='flex justify-center w-full'>
                            <button className='w-6/12 p-1 h-10 font-bold text-neutral-300 bg-green-400 hover:bg-green-500 rounded'>Post</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Add