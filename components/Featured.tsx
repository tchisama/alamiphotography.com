import React from 'react'
import img1 from "@/public/1.png"
import img2 from "@/public/2.png"
import img3 from "@/public/3.png"
import Image from 'next/image'
import H from './H'

type Props = {}

const Featured = (props: Props) => {
  return (
    <div className='my-40'>

        <div className='text-center uppercase mb-6'>
            <H h={5}>Featured on</H>
        </div>
    <div className='flex drop-shadow-xl md:flex-row flex-col gap-8 items-center justify-center  '>
        <Image className='' height={110} src={img2}   alt="" />
        <Image className='' height={110} src={img3}   alt="" />
    </div>
    </div>
  )
}

export default Featured