import Image from 'next/image'
import React from 'react'
import GetText from './GetText'
import GetImage from './GetImage'

type Props = {}

const InvestmentHero = (props: Props) => {
  return (
    <div className='relative'>
        <div className=' z-0'>
            <GetImage name="hero" width={1500} height={1000} className='w-full bg-[#0002] h-[60vh] object-center object-cover' section="experiencePage" />
        </div>
        <h1 className='text-3xl drop-shadow-xl md:text-7xl font-thin  -translate-x-1/2 md:translate-x-0 absolute text-white md:text-white bottom-8 left-1/2 md:left-8 max-w-[700px] text-center'>
            <GetText id="experiencePage_hero_title"/>
        </h1>
    </div>
  )
}

export default InvestmentHero