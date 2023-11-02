import React from 'react'

type Props = {}

const Video = (props: Props) => {
  return (
    <div className='my-20'>
      <video src="https://saltatelier.com.au/wp-content/uploads/2023/03/Sydney-Wedding-Videography-Cover.mov" preload="auto" muted autoPlay loop playsInline className="w-full scale-[1.15] md:scale-[1.05] h-full"></video>
    </div>
  )
}

export default Video