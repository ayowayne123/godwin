import Link from 'next/link';
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
import { AiFillYoutube } from "react-icons/ai";
import EpCover from '../public/EpCover.jpg'



function Music() {


  return (
    <div id='music' className='container text-[#1E1E1E] w-full py-10 overflow-hidden'>
        
        <div  className='grid md:grid-cols-2 gap-8 w-full'>
            <div   className='relative md:h-full h-96 w-full'>
            <Image src={EpCover} alt='deezer' className=' object-contain p-4' fill loading='lazy'/>
            </div>
            <div className='flex flex-col gap-8 lg:pr-10'>
                <span className='font-bold md:text-3xl text-xl lg:text-5xl uppercase text-center lg:text-left'>{Ep.name}</span>
                <span className=' lg:text-2xl md:text-xl text-lg text-center lg:text-left '>{Ep.desc}</span>
                <span>
                <span className='font-medium lg:text-2xl md:text-xl text-lg text-center lg:text-left uppercase w-full'> Available now on:</span>
                    <span className='grid grid-cols-3 gap-1 md:gap-3 lg:py-4 py-2 items-center w-full'> 
                    {Ep.links.spotify && <a className=' font-bold flex  items-center' href={Ep.links.spotify}>  <Spotify/> </a>}
                    {Ep.links.appleMusic && <a className=' font-bold flex  items-center' href={Ep.links.appleMusic}>  <AppleMusic/> </a>}
                    {Ep.links.deezer && <a className='font-bold flex  items-center h-12 relative w-full' href={Ep.links.deezer}> 
                    <Image src={Deezer} alt='deezer' className='h-12 w-20 object-contain grayscale hover:grayscale-0' fill/> </a>}
                    {Ep.links.audioMack && <a className=' font-bold flex relative h-full w-full  items-center' href={Ep.links.audioMack}>  
                   <AudioMack/> </a>}
                    {Ep.links.tidal && <a className=' font-bold flex  items-center' href={Ep.links.tidal}>  <Tidal/> </a>}
                    {Ep.links.youtubeMusic && <a className='font-bold flex flex-row gap-1 items-center text-xl md:text-2xl lg:text-4xl justify-center group' href={Ep.links.youtubeMusic}> <span className='text-2xl md:text-3xl lg:text-5xl  group-hover:text-[#f00]'><SiYoutubemusic/> </span> Music </a>}
                    {Ep.links.itunes && <a className='font-bold flex  items-center' href={Ep.links.itunes}> <ITunes/> </a>}
                    {Ep.links.boomPlay && <a className='font-bold flex  items-center' href={Ep.links.boomPlay}> <Boomplay/> </a>}
                    </span>
                </span>
            </div>
        </div>
        <div data-aos="fade-up" className='items-center w-full flex flex-col justify-center'> 
        <div className='lg:w-[800px] md:w-[650px] w-3/4 gap-3 md:gap-6 py-16 flex flex-col  ' > 
<span className='flex w-full justify-center text-2xl md:text-4xl font-medium uppercase'>Song List</span>

  <div className='border-b-2 border-black'></div>
  {Ep.songList.map(song =>
    
    <div key={song.id} className='w-full flex flex-col md:flex-row justify-between items-center '>
    <span className='md:text-2xl text-xl'>{song.name}</span>
    <span className='md:w-1/5  flex-row flex md:justify-between gap-3 items-center'>
      <Link className="uppercase font-medium hover:text-slate-600 text-sm md:text-base" href={song.audLink}> Play</Link>
      <Link className="text-[#1e1e1e] text-xl md:text-3xl hover:text-[#f00]" href={song.vidLink}> <AiFillYoutube/> </Link>
      <span className='md:text-2xl'>{song.time}</span>
    </span>
    </div>
    
    
    )}
  <div className='border-b-2 border-black'></div>
</div>
<div className='flex flex-col text-center gap-1'>
  <span className='uppercase font-medium text-2xl '>Notes </span>
  <span>Performed by <span className='uppercase font-medium'>{Ep.additions.performedBy}</span></span>
  <span>Produced by <span className='uppercase font-medium'>{Ep.additions.producedBy}</span></span>
  <span>Lyrics by <span className='uppercase font-medium'>{Ep.additions.lyricsBy}</span></span>
  <span>Additional Vocals by <span className='uppercase font-medium'>{Ep.additions.additionalVocals}</span></span>
</div>
</div>

        </div>
    
  )
}

export default Music