import React from 'react'
import img1 from "@/public/1.png"
import img2 from "@/public/2.png"
import Image from 'next/image'

type Props = {}

const Featured = (props: Props) => {
  return (
    <div className='my-20'>

    <h1 className='text-center text-4xl my-10 fontcharm'>Featured By</h1>
    <div className='flex drop-shadow-xl gap-8 items-center justify-center  '>
        <Image height={140} src={img1}   alt="" />
        <Image className='darken' height={120} src={img2}   alt="" />
    </div>
    </div>
  )
}

export default Featured