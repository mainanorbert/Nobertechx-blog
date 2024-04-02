import React from 'react'
import images from '../images/images.png'
import tech from '../images/tech.webp'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/ContextProvider'
import axiosClient from '../../axios/AxiosClient'
import { useState, useEffect } from 'react'
import { DefaultPost } from '../posts/DefaultPost'
import Footer from './Footer'

// import {Route, Link } from 'react-router-dom'

const Sidebar = () => {
  const [articles, setArticles] = useState([])
  const { mypost, setPosts, setPost } = useAuthContext()
  const [selectedPost, setSelectedPost] = useState(null)
  const [defaultPost, setDefaultPost] = useState(null)
  const [isPost, setIsPost] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [author, setAuthor] = useState('')
  const [filter, setFilter] = useState('All')


  useEffect(() => {
    fetchArticles();
  }, [filter]);


  const fetchArticles = async () => {
    try {
      const response = await axiosClient.get('get/mypost');

      setArticles(response.data);
      setDefaultPost(response.data[0])



    } catch (error) {
      console.error(error);
    }
  };

  const calculateDaysAgo = (publishDate) => {
    const today = new Date();
    const publishDateTime = new Date(publishDate);
    const timeDifference = today - publishDateTime;
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysAgo;
  };

  return (
    <div className=''>
      <div className='mt-1   md:px-2 md:flex block justify-center bg-slate-300 md:mb-[8rem mb-12rem]'>
        <div className={`${location.pathname === '/articles' ? ' md:w-6/12 h-screen overflow-y-scroll pl-10 bg-slate-400 ' : ''}`} >

          <p className='text-center md:text-2xl text-xl font-bold'>Tech Trending</p>
          <div className=' bg-transparent justify-center p-1 rounded-xl'>
            <select
              className='text-center w-6/12 h-6  bg-transparen border-none'
              name='filter'
            >
              <option value='All' >All Categories</option>
              <option value="Software Engineering" >Software Engineering</option>
              <option value="Web Development">Web Development</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Artificial Intelligence" key="">Artificial Intelligence</option>
            </select>
          </div>
          {articles.map((post) => (
            <div className='border-b'>
              <div id={post.id} className='p-1 text-ce'>
                <p className=' text-green-700 font-bold'>{post.title}</p>
                <img className='justify-center w-[24rem] h-[20rem]' src={post.image} alt="Tech Image" />

                <span>  <i className='text-xs text-yellow-900'>Posted ({calculateDaysAgo(post.created_at)} days ago)</i></span>
                <p>
                  {post.article.substring(0, 150)} <span><Link to={`/articles/${post.id}`} className='text-blue-700 px-1'>Read More...</Link></span>
                </p>

              </div>

            </div>
          ))}
        </div>

      </div >
      {location.pathname ==='/articles'? <Footer/>:''}
      </div>

  )
}

export default Sidebar
