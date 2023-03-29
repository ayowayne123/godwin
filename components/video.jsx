import React from 'react'
import { ImYoutube2 } from "react-icons/im";

function Video() {
  return (
    <div  id='videos' className='container '>
        <div data-aos="fade-up" 
    data-aos-anchor-placement="top-center" className=' w-full flex flex-col items-center justify-center gap-5 text-[#1e1e1e] '>
            <span className=' font-bold text-2xl md:text-3xl lg:text-5xl uppercase'>Videos</span>
        <iframe className='md:w-2/3 w-full aspect-video' src="https://www.youtube.com/embed/oa0dyv87RJQ" title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div className='w-full gap-2  flex flex-row items-center justify-center text-xl'>View more on <a className='hover:text-[#f00] text-5xl ' href='https://www.youtube.com/@godw3in'><ImYoutube2/></a></div>
</div>

    </div>
  )
}

export default Video