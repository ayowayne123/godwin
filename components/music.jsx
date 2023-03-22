'use client'
import React,{useEffect} from "react";
import Ep from './ep'
import Image from 'next/image';
import Spotify from './logos/spotify';
import AppleMusic from './logos/appleMusic';
import ITunes from './logos/iTunes';
import AudioMack from './logos/audioMack';
import Tidal from './logos/tidal';
import Deezer from '../public/deezer.svg'
import Boomplay from './logos/boomplay';
import { SiYoutubemusic } from "react-icons/si";
import EpCover from '../public/EpCover.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Music() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id='music' className='container text-[#1E1E1E] w-full py-10'>
        
        <div className='grid md:grid-cols-2 gap-8 w-full'>
            <div data-aos="fade-right" className='relative'>
            <Image src={EpCover} alt='deezer' className='h-full w-full object-contain p-4' fill/>
            </div>
            <div data-aos="fade-left" className='flex flex-col gap-8 pr-10'>
                <span className='font-bold text-5xl uppercase'>{Ep.name}</span>
                <span className=' text-2xl '>{Ep.desc}</span>
                <span>
                <span className='font-medium text-2xl uppercase'> Available now on:</span>
                    <span className='grid grid-cols-3 gap-3 py-4 items-center w-full'> 
                    {Ep.links.spotify && <a className=' font-bold flex  items-center' href={Ep.links.spotify}>  <Spotify/> </a>}
                    {Ep.links.appleMusic && <a className=' font-bold flex  items-center' href={Ep.links.appleMusic}>  <AppleMusic/> </a>}
                    {Ep.links.deezer && <a className='font-bold flex  items-center h-12 relative w-full' href={Ep.links.deezer}> 
                    <Image src={Deezer} alt='deezer' className='h-12 w-20 object-contain grayscale hover:grayscale-0' fill/> </a>}
                    {Ep.links.audioMack && <a className=' font-bold flex relative h-full w-full  items-center' href={Ep.links.audioMack}>  
                   <AudioMack/> </a>}
                    {Ep.links.tidal && <a className=' font-bold flex  items-center' href={Ep.links.tidal}>  <Tidal/> </a>}
                    {Ep.links.youtubeMusic && <a className='font-bold flex flex-row gap-1 items-center text-4xl justify-center group' href={Ep.links.youtubeMusic}> <span className='text-5xl group-hover:text-[#f00]'><SiYoutubemusic/> </span> Music </a>}
                    {Ep.links.itunes && <a className='font-bold flex  items-center' href={Ep.links.itunes}> <ITunes/> </a>}
                    {Ep.links.boomPlay && <a className='font-bold flex  items-center' href={Ep.links.boomPlay}> <Boomplay/> </a>}
                    </span>
                </span>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Music