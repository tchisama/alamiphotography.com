import Image from 'next/image'
import React from 'react'

type Props = {
    index: number
}
const links = [
    "https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F205116552%20What%20to%20expect.jpg?alt=media&token=84e6bb84-ecfd-461f-a7cb-23fef395a6d6",
    "https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F226170573%20From%20start%20to%20finish.jpg?alt=media&token=4cafca51-1198-4dc4-beae-160dc70ba620",
]
const InvestmentStepsCard = ({index}: Props) => {
    const align = index % 2 !== 0 ? 'left' : 'right';
  return (
    <div className={'my-10  pt-24 border-t flex-col items-center md:flex-row flex gap-2 md:gap-8 '+(align === 'left' ? ' md:flex-row-reverse' : '')}>
        <div className={'flex-1 flex '+(align === 'left' ? ' flex-row-reverse' : '')}>
            <div className={'w-[250px] h-[300px] bg-[#a9b9b8] text-8xl text-white fontroman flex items-center justify-center '+(align === 'right' ? ' translate-x-4' : '-translate-x-4')}>0{index+1}</div>
            <Image width={400} height={600} className={'md:w-[350px] bg-[#0002]'} src={links[index]} alt="" />
        </div>
        <div className='flex-1 flex flex-col items-center gap-4'>
            <h2 className='text-4xl text-center w-fit fontroman md:text-5xl'>What to expect</h2>
            <p className='text-md text-center md:text-xl fontcharm'>Your wedding is a unique reflection of you. That’s why I love getting to know you, and your wedding details, personally. Knowing your wedding day dreams enables me to create authentic images that reflect the real you. My shooting style produces images that reveal the intimate and authentic expressions of the love and commitment you share. Unguarded. Natural. Emotional. The cherished images of a lifetime. Your wedding day will be filled with extraordinary moments — intimate, surprising, and joyous. Captured creatively, those moments shine through as timeless heirlooms, instantly bringing you back to the essence of your day.</p>
            ok
        </div>
    </div>
  )
}

export default InvestmentStepsCard