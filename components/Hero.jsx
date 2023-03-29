import React, { useState } from "react";
import Image from 'next/image'
import hero from '../public/godwinWhite.png'
import heroPhone from '../public/godwinWhitePhone.png'
import Logo from '../public/logo.png'
import LogoVertical from '../public/logoVertical.png'
import { Link } from 'react-scroll'
import { BiMenu } from "react-icons/bi";
import { FaSpotify, FaTimes,FaApple, FaYoutube, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

function Hero() {

  const [colorChange, setColorchange] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavbarColor);
  }
  
   const toggleNav = () => {
    setShowNav(!showNav);
  }


  return (
    <div className='grid lg:grid-cols-2 h-[100vh] w-full overflow-hidden'>

      <div className='lg:grid grid-cols-9 hidden h-full w-full overflow-hidden'>
        <span className='col-span-1 flex h-full w-full bg-[#B9B9B9]'></span>
        <span className='col-span-2 flex h-full w-full bg-[#C9C9C9]'></span>
        <span className='col-span-2 flex h-full w-full bg-[#D0CFCF]'></span>
        <span className='col-span-2 flex h-full w-full bg-[#D6D5D5]'></span>
        <span className='col-span-2 flex h-full w-full bg-[#DEDEDE]'></span>
      </div>

      <div className='relative w-full h-full hidden lg:flex'>
        <Image src={hero} alt='hero Image' className='object-cover  bg-[#DEDEDE]' fill />
       
      </div>

      <div className='relative w-full h-full lg:hidden flex'>
        <Image src={heroPhone} alt='hero Image' className='object-cover object-right  bg-[#DEDEDE]' fill />
      </div>

   

<div className={` top-0 w-full z-20 absolute hidden lg:flex ${colorChange ? "bg-white" : "bg-inherit"} `}>
    <div className='grid grid-cols-3 w-full container  relative'> 
    <div  className="absolute top-20 py-10 left-0 container">
       <div data-aos="fade-right" className="flex flex-col gap-8">
       <div className="  text-2xl">
          <div className="text-[#1E1E1E] font-bold uppercase">Listen</div>
          <div className="flex items-center justify-start mt-4">
          <a href='https://open.spotify.com/artist/2mzRsCFnmBdMKFgSCVqE3Y' target='_blank' rel='noopener noreferrer' className="text-[#1E1E1E] text-4xl mr-4 hover:text-green-500">
  <FaSpotify />
</a>
<a href='https://music.apple.com/us/artist/godw3in/1642321558' target='_blank' rel='noopener noreferrer' className="text-[#1E1E1E] text-4xl mr-4 hover:text-gray-700">
  <FaApple />
</a>
<a href='https://www.youtube.com/@godw3in' target='_blank' rel='noopener noreferrer' className="text-[#1E1E1E] text-4xl hover:text-red-600">
  <FaYoutube />
</a>
          </div>
        </div>
        <div className="  text-2xl">
          <div className="text-[#1E1E1E] font-bold uppercase">Follow</div>
          <div className="flex items-center justify-start mt-4">
          <a href='https://www.instagram.com/godw3in' target='_blank' rel='noopener noreferrer' className="text-[#1E1E1E] text-4xl mr-4 hover:text-pink-500">
  <FaInstagram />
</a>
<a href='https://www.twitter.com/godw3in' target='_blank' rel='noopener noreferrer' className="text-[#1E1E1E] text-4xl mr-4 hover:text-blue-400">
  <FaTwitter />
</a>
<a href='https://www.tiktok.com/@godw3in' target='_blank' rel='noopener noreferrer' className="text-[#1E1E1E] text-4xl hover:text-black">
  <FaTiktok />
</a>
          </div>
        </div>
       </div>
         </div>
   
    <div className="h-16 col-span-1 w-full inline-flex items-center justify-self=start  "> 
    <div className="relative h-10 w-full items-center justify-start flex  ">
      <Image src={Logo} alt='hero Image' className='object-contain relative w-fit h-8 ' /></div>
      
    </div>
    
    <div className='flex flex-row col-span-2 justify-around h-16 items-center font-bold text-[#1E1E1E] text-lg'>
      <Link className='cursor-pointer' smooth={true}  to='music'>Music</Link>
    <Link className='cursor-pointer' smooth={true} to='videos'>Videos</Link>
    <Link className='cursor-pointer' smooth={true} to='events'>Events</Link>
    <Link className='cursor-pointer' smooth={true} to='about'>About</Link>
    
    </div>
    </div>
    
</div>
<div className={`inset-0  h-full  w-full z-20 justify-end absolute lg:hidden flex  p-4`}>
 
<div className="relative w-12 md:w-24 h-full items-start    flex   ">
      <Image src={LogoVertical} alt='hero Image' className='object-contain  ' /></div>
    </div>
    <div className="z-30 fixed lg:hidden p-2 bg-white rounded-md text-3xl md:text-5xl top-4 left-4"> <BiMenu onClick={toggleNav}/> </div>
    

<div className={`w-full h-full fixed top-0 left-0 bg-white z-30 transform transition-all ease-in-out duration-300 lg:hidden ${showNav ? "translate-x-0" : "-translate-x-full"}`}>
  <div className='flex flex-col justify-center items-center h-full'>
  <span className="absolute  top-0 right-0 text-3xl p-4"><FaTimes  onClick={() => setShowNav(false)}/> </span>  
    <div className='flex flex-col justify-center items-center'>
      <Link to='music' smooth={true} onClick={() => setShowNav(false)} className='my-2 text-4xl font-semibold text-[#1e1e1e] cursor-pointer'>Music</Link>
      <Link to='videos' smooth={true} onClick={() => setShowNav(false)} className='my-2 text-4xl font-semibold text-[#1e1e1e] cursor-pointer'>Videos</Link>
      <Link to='events' smooth={true} onClick={() => setShowNav(false)} className='my-2 text-4xl font-semibold text-[#1e1e1e] cursor-pointer'>Events</Link>
      <Link to='about' smooth={true} onClick={() => setShowNav(false)} className='my-2 text-4xl font-semibold text-[#1e1e1e] cursor-pointer'>About</Link>
    </div>
    <div className="mt-10 flex flex-col justify-center items-center gap-2"> 
    <span className="text-sm">Listen and follow</span>
    <div className='flex flex-row justify-center items-center '>
     
      <a href='https://open.spotify.com/artist/2mzRsCFnmBdMKFgSCVqE3Y' target='_blank' rel='noopener noreferrer' className='text-[#1e1e1e] text-3xl mx-2 hover:text-green-500'><FaSpotify /></a>
      <a href='https://music.apple.com/us/artist/godw3in/1642321558' target='_blank' rel='noopener noreferrer' className='text-[#1e1e1e] text-3xl mx-2 hover:text-gray-700'><FaApple /></a>
      <a href='https://www.youtube.com/@godw3in' target='_blank' rel='noopener noreferrer' className='text-[#1e1e1e] text-3xl mx-2 hover:text-red-600'><FaYoutube /></a>
      <a href='https://www.instagram.com/godw3in' target='_blank' rel='noopener noreferrer' className='text-[#1e1e1e] text-3xl mx-2 hover:text-pink-500'><FaInstagram /></a>
      <a href='https://www.twitter.com/godw3in' target='_blank' rel='noopener noreferrer' className='text-[#1e1e1e] text-3xl mx-2 hover:text-blue-400'><FaTwitter /></a>
      <a href='https://www.tiktok.com/@godw3in' target='_blank' rel='noopener noreferrer' className='text-[#1e1e1e] text-3xl mx-2 hover:text-black'><FaTiktok /></a>
    </div>
    </div>
  </div>
</div>
</div>

    
    
  )
}

export default Hero