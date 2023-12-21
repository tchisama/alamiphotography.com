import Image from 'next/image'
import React from 'react'
import GetImage from './GetImage'

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
    <div className={'my-10  pt-24 border-t flex-col items-center md:flex-row flex gap-10 '+(align === 'left' ? ' md:flex-row-reverse' : '')}>
        <div className={'flex-1 flex justify-center  '+(align === 'left' ? ' flex-row-reverse' : '')}>
            <div className={'w-[250px] md:h-[300px] bg-[#a9b9b8] text-6xl h-[150px]  md:text-8xl text-white fontroman flex items-center justify-center '+(align === 'right' ? ' translate-x-4' : '-translate-x-4')}>0{index+1}</div>
            <GetImage width={400} height={600} className={'md:w-[350px] w-[220px] bg-[#0002]'} section={"experiencePage"} name={item.img} />
        </div>
        <div className='flex-1 flex flex-col items-center gap-4'>
            <h2 className='text-4xl text-center w-fit fontroman md:text-5xl'>{item.title}</h2>
            <p className='text-sm md:text-md text-center md:text-xl fontcharm'>{item.content}</p>
        </div>
    </div>
  )
}

export default InvestmentStepsCard