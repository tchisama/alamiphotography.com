import React from 'react'

type Props = {}

const Video = (props: Props) => {
  return (
    <div className='my-20'>
      <video 
        src="https://d1x1vnlqahqq2y.cloudfront.net/alami_photography_home_video.mp4" 
        // preload="auto" 
        muted 
        autoPlay 
        playsInline
        loop 
        // controls
        className="w-full  aspect-square object-cover md:aspect-video  bg-[#0002] scale-[1.15] md:scale-[1.05] h-full">
      </video>
    </div>
  )
}

export default Video