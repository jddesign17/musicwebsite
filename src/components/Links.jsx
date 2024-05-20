import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { IoHeartDislikeCircle } from "react-icons/io5";
import { GiLoveSong } from "react-icons/gi";
const Links = () => {
  return (
    <div className=' border-r border-gray h-screen '>
        <Navbar/>
        <div className=' flex flex-col space-y-2'>
        <Link to="/" className=' text-md text-gray flex  items-center py-5 px-5'> <span className='text-xl mr-2 '><GiLoveSong /></span> Songs</Link>
        <Link to="/likes" className=' text-md text-gray flex items-center py-5 px-5'><span className=' text-xl mr-2'> <IoHeartDislikeCircle/></span> Like</Link>
        </div>
  
    </div>
  )
}

export default Links