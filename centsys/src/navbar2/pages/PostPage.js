import axios from 'axios'
import React, { useState, useEffect } from 'react'
import axiosClient from '../../axios/AxiosClient'
import '../../mycss.css'
import { useNavigate } from 'react-router-dom'
import passport from '../images/passport.jpg'
import { Helmet } from 'react-helmet';
import Footer from '../main/Footer'

import { useParams, Link, useLocation } from 'react-router-dom'
import { resolveMotionValue } from 'framer-motion'
import { useAuthContext } from '../../context/ContextProvider'


const PostPage = () => {
  const [post, setPost] = useState([]);
  const { postId } = useParams()
  const postCreated = new Date(post.created_at).toLocaleDateString()
  const [deleteMessage, setDeleteMessage] = useState('')
  const [author, setAuthor] = useState('')
  const [email, setEmail] = useState()
  const navigate = useNavigate();
  const {user} = useAuthContext();
  console.log("user", user.email);


  useEffect(() => {
    fetchArticles()
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axiosClient.get(`articles/${postId}`);

      setPost(response.data)


    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUser()
  })
  const getUser = () => {
    axiosClient.get(`/get_user/${post.user_id}`)
      .then((response) => {
        setAuthor(response.data.name)
        setEmail(response.data.email)
      })
      .catch((error) => {

      })
  }
  const handleDelete = () => {
    axiosClient.delete(`/delete/article/${postId}`)
      .then((response) => {
        console.log('res', response);
        setDeleteMessage(response.data.message)
        navigate('/articles');

      })
      .catch((error) => {
        console.log(error)
      })
  }
  const location = useLocation()

  return (
    <>
    <div className='flex justify-center'>
      <div className='md:w-6/12 bg-slate-400'>
        <div className='text-center font-bold text-xl '>
        <Helmet>
        <meta property="og:title" content={post.title} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={location.pathname} />
        </Helmet>
        

        {post.title} </div>
        
       
        
        
        <div className='p-1'><img className='justify-center h-[22rem] md:w-10/12 p-1 w-full' src={post.image} alt="Tech Image" /></div>
        <div className=' md:w-10/12 w-full mt-1'>
          <div>{deleteMessage}</div>
          <div className='bg-slate-500 flex justify-center hover:bg-slate-600 bg-green- mx-1 cursor-pointer hover:text-neutral-300 text-xs rounded p-1'>
<div>
            <i className='text-sm'> <i className='text-green-300'>Posted on:</i> {postCreated} </i> |
            <i>  <i className='text-green-300'>Category: </i>{post.category} </i>|
            <i className=''>  <i className='text-green-300'>Author:</i> {author} </i>
            </div>
            </div>
        </div>
        <div className=' max-w text-contain text-container'>
          <pre className=' rounded-xl text-container'>
            <p className='p-2 bg-slate-400 '>{post.article}</p>
          </pre>
        </div>
        <div className='flex justify-center'><div className=''>--------------------END-------------------</div></div>
        {user && user.email === 'mainanorbert@gmail.com'? 
        <div className='flex justify-end space-x-2'>
          <Link to={`/edit/${postId}`} className='flex' title="Edit this article" >

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </Link>
          <button className='flex' title="Delete this article" onClick={handleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
        :''}
        
        <div className=''>
        
        <div className='bg-slate-00 p-2 border-dotted border-2 mb-7'> 
        <div className='bg-slate-00 pl-4 text-center text-neutral-300 font-bold text-xl'>About the Author</div>
        <div className='flex'>
        <img src={passport} alt="Author image" className='w-[6rem] h-[6rem] rounded-full' /> 
        <div className='p-1'>Norbert Osiemo is a rising Software Engineer and web development anthusiast, possessing adeptness
         in various web technologies, including HTML, Tailwind CSS, Vanilla JavaScript, and React.js. Coupled
        with proficiency in Programming Languages such as C and PHP (with a specialization in Laravel), Norbert's
        commitment to augmenting his skill set is exemplified by his ongoing pursuit of mastery in Python. Holding a
        distinguished bachelor's degree (BSc. Mathematics and Computer Science), Norbert Aspires to catalyze
        transformative change on a global scale through the strategic utilization of technology. His unwavering 
        objective is to orchestrate the alignment of technological prowess with business imperatives, effecting 
        operational enhancements in a streamlined and productive manner. Currently I am specializing in backend development <Link className='text-blue-800 underline' to="https://twitter.com/alx_africa" target={'blank'}>@alx_africa</Link></div>
        </div>
        <div className='mb-[5rem]'>
        <h1 className='font-bold text-neutral-200 text-lg'>Skills</h1>
        <div className='font-light md:flex justify-between pl-5 text-neutral-00'>
            <div>
                <h1 className='text-yellow-300'>Programming Languages</h1>
                <ul className='list-disc pl-2'>
                    <li>C</li>
                    <li>PHP</li>
                    <li>Python</li>
                    <li>JavaSript</li>
                    <li>HTML</li>
                    <li>CSS</li>

                </ul>
            </div>
            <div>
                <h1 className='text-yellow-300'>Frameworks</h1>
                <ul className='list-disc pl-6'>
                    <li>Laravel</li>
                    <li>Flask</li>
                    <li>Django</li>
                    <li>React Js</li>
                    <li>Tailwind</li>
                </ul>
            </div>
            <div>
                <h1 className='text-yellow-300'>Databases</h1>
                <ul className='list-disc pl-6'>
                    <li>SQLite</li>
                    <li>MySQL</li>
                </ul>
            </div>
        </div>
    </div>
        </div>
        
        </div>
      </div>

      

    </div>
    <Footer/>
    </>
  )
}


export default PostPage
