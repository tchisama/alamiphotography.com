import Image from 'next/image'
import React from 'react'

type Props = {
    index: number,
    item:{
        img:string,
        title:string
        content:string
    }
}
const links = [
    "",
    "",
]
const InvestmentStepsCard = ({index,item}: Props) => {
    const align = index % 2 !== 0 ? 'left' : 'right';
  return (
    <div className={'my-10  pt-24 border-t flex-col items-center md:flex-row flex gap-2 md:gap-8 '+(align === 'left' ? ' md:flex-row-reverse' : '')}>
        <div className={'flex-1 flex '+(align === 'left' ? ' flex-row-reverse' : '')}>
            <div className={'w-[250px] h-[300px] bg-[#a9b9b8] text-8xl text-white fontroman flex items-center justify-center '+(align === 'right' ? ' translate-x-4' : '-translate-x-4')}>0{index+1}</div>
            <Image width={400} height={600} className={'md:w-[350px] bg-[#0002]'} src={item.img} alt="" />
        </div>
        <div className='flex-1 flex flex-col items-center gap-4'>
            <h2 className='text-4xl text-center w-fit fontroman md:text-5xl'>{item.title}</h2>
            <p className='text-md text-center md:text-xl fontcharm'>{item.content}</p>
        </div>
    </div>
  )
}

export default InvestmentStepsCard