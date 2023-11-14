import React from 'react'

type Props = {}

const Video = (props: Props) => {
  return (
    <div className='my-20'>
      <video 
        src="https://alamiphotography.com/media/alamisiteweb.mp4" 
        preload="auto" 
        muted 
        autoPlay 
        loop 
        playsInline 
        className="w-full scale-[1.15] md:scale-[1.05] h-full">
      </video>
    </div>
  )
}

export default Video