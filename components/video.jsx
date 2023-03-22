import React from 'react'

function Video() {
  return (
    <div data-aos="fade-up" id='videos'>
        <div className='w-full flex flex-col items-center justify-center py-16 gap-5 '>
            <span className='font-bold text-5xl uppercase'>Videos</span>
        <iframe className='w-2/3 aspect-video' src="https://www.youtube.com/embed/oa0dyv87RJQ" title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div>
    </div>
  )
}

export default Video