'use client'
import React, { useState } from "react";
import Image from 'next/image'
import hero from '../public/godwinWhite.png'
import heroPhone from '../public/godwinWhitePhone.png'
import Logo from '../public/logo.png'
import LogoVertical from '../public/logoVertical.png'
import { Link } from 'react-scroll'
import { BiMenu } from "react-icons/bi";


function Hero() {
  
  
  const [colorChange, setColorchange] = useState(false);

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
   

  
  return (
    <div className='grid lg:grid-cols-2 h-[100dvh] w-full overflow-hidden'>
        
<div className='lg:grid grid-cols-9 hidden h-full w-full overflow-hidden'>
<span className='col-span-1 flex h-full w-full bg-[#B9B9B9]'></span>
<span className='col-span-2 flex h-full w-full bg-[#C9C9C9]'></span>
<span className='col-span-2 flex h-full w-full bg-[#D0CFCF]'></span>
<span className='col-span-2 flex h-full w-full bg-[#D6D5D5]'></span>
<span className='col-span-2 flex h-full w-full bg-[#DEDEDE]'></span>
</div>
<div className='relative w-full h-full hidden lg:flex' > 
<Image src={hero} alt='hero Image' className='object-cover  bg-[#DEDEDE]' fill/> </div>
<div className='relative w-full h-full lg:hidden flex' > 
<Image src={heroPhone} alt='hero Image' className='object-cover object-right  bg-[#DEDEDE]' fill/> </div>
<div className={` top-0 w-full z-20 absolute hidden lg:flex ${colorChange ? "bg-white" : "bg-inherit"} `}>
    <div className='grid grid-cols-3 w-full container '> 
    <div className="h-16 col-span-1 w-full inline-flex items-center justify-self=start  "> 
    <div className="relative h-10 w-full items-center justify-start flex  ">
      <Image src={Logo} alt='hero Image' className='object-contain  w-fit h-8 ' /></div>
    </div>
    
    <div className='flex flex-row col-span-2 justify-around h-16 items-center font-bold text-[#1E1E1E] text-lg'>
      <Link className='cursor-pointer' smooth={true}  to='music'>Music</Link>
    <Link className='cursor-pointer' smooth={true} to='videos'>Videos</Link>
    <Link className='cursor-pointer' smooth={true} to='#events'>Events</Link>
    <Link className='cursor-pointer' smooth={true} to='#about'>About</Link>
    <Link className='cursor-pointer' smooth={true} to='#contact'>Contact</Link>
    </div>
    </div>
    
</div>
<div className={`inset-0  h-full  w-full z-20 justify-end absolute lg:hidden flex  p-4`}>
 
<div className="relative w-12 md:w-24 h-full items-start    flex   ">
      <Image src={LogoVertical} alt='hero Image' className='object-contain  ' /></div>
    </div>
    <div className="z-30 fixed lg:hidden p-2 bg-white rounded-md text-3xl md:text-5xl top-4 left-4"> <BiMenu/> </div>

</div>
    
    
  )
}

export default Hero