import React from 'react'
import { FaTiktok, FaInstagram, FaTwitter, FaYoutube, FaSpotify } from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-gray-200 w-full h-60 mt-16'>
      <div className='container flex flex-col items-center gap-2 justify-center h-full text-[#1e1e1e]'>
        <div className='flex flex-col items-center justify-center gap-2 mb-4'>
          <span className='text-xl font-bold'>Join the Mailing List</span>
          <form className='flex flex-row mt-2'>
            <input type='email' placeholder='Enter your email address' className='py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent' />
            <button type='submit' className='bg-[#1e1e1e] text-white py-2 px-4 rounded-r-md ml-1 hover:bg-[#1e1e1e90] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent'>Sign Up</button>
          </form>
        </div>
        <div className='flex flex-row space-x-4'>
          <a href='https://www.tiktok.com/@godw3in' target='_blank' rel='noopener noreferrer'>
            <FaTiktok className='w-6 h-6 hover:text-[#1e1e1e90]' />
          </a>
          <a href='https://www.instagram.com/godw3in' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='w-6 h-6 hover:text-[#1e1e1e90]' />
          </a>
          <a href='https://www.twitter.com/godw3in' target='_blank' rel='noopener noreferrer'>
            <FaTwitter className='w-6 h-6 hover:text-[#1e1e1e90]' />
          </a>
          <a href='https://www.youtube.com/@godw3in' target='_blank' rel='noopener noreferrer'>
            <FaYoutube className='w-6 h-6 hover:text-[#1e1e1e90]' />
          </a>
          <a href='https://open.spotify.com/artist/2mzRsCFnmBdMKFgSCVqE3Y' target='_blank' rel='noopener noreferrer'>
            <FaSpotify className='w-6 h-6 hover:text-[#1e1e1e90]' />
          </a>
        </div>
        <div className='text-[#1e1e1e] mt-4'>
          <span>&copy; {new Date().getFullYear()} Godwin . </span>
          <span className='text-[8px]'>Built by Bard Design Agency</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
