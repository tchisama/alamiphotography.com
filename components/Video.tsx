import React from 'react'

type Props = {}

const Video = (props: Props) => {
  return (
    <div className='my-20'>
      <video src="https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/alami%20site%20web.mp4?alt=media&token=3f473e71-0053-41f6-9173-175464c57f6a" preload="auto" muted autoPlay loop playsInline className="w-full scale-[1.15] md:scale-[1.05] h-full"></video>
    </div>
  )
}

export default Video