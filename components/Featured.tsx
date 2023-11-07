import React from 'react'
import img1 from "@/public/1.png"
import img2 from "@/public/2.png"
import Image from 'next/image'

type Props = {}

const Featured = (props: Props) => {
  return (
    <div className='my-20'>

    <h1 className='text-center text-2xl md:text-4xl my-10 fontcharm'>Featured on</h1>
    <div className='flex drop-shadow-xl md:flex-row flex-col gap-8 items-center justify-center  '>
        <Image className='' height={120} src={img1}   alt="" />
        <Image className='' height={110} src={img2}   alt="" />
    </div>
    </div>
  )
}

export default Featured