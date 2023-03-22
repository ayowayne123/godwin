import React from 'react'
import Image from 'next/image'
import hero from '../public/godwinWhite.png'
import Link from 'next/link'


function Hero() {
  return (
    <div className='grid grid-cols-2 h-[100dvh] overflow-hidden'>
        
<div className='grid grid-cols-9 h-full w-full overflow-hidden'>
<span className='col-span-1 flex h-full w-full bg-[#B9B9B9]'></span>
<span className='col-span-2 flex h-full w-full bg-[#C9C9C9]'></span>
<span className='col-span-2 flex h-full w-full bg-[#D0CFCF]'></span>
<span className='col-span-2 flex h-full w-full bg-[#D6D5D5]'></span>
<span className='col-span-2 flex h-full w-full bg-[#DEDEDE]'></span>
</div>
<div className='relative w-full h-full'> 
<Image src={hero} alt='hero Image' className='object-cover bg-[#DEDEDE]' fill/> </div>
<div className='fixed top-0 w-full z-20  '>
    <div className='grid grid-cols-3 w-full '> 
    <div></div>
    <div className='flex flex-row col-span-2 justify-around h-16 items-center font-bold text-[#1E1E1E] text-lg'><Link href='#music'>Music</Link>
    <Link href='#videos'>Videos</Link>
    <Link href='#events'>Events</Link>
    <Link href='#about'>About</Link>
    <Link href='#contact'>Contact</Link>
    </div>
    </div>
    
</div>
    </div>
    
  )
}

export default Hero