import React from 'react'

type Props = {
    index: number
}
const InvestmentStepsCard = ({index}: Props) => {
    const align = index % 2 !== 0 ? 'left' : 'right';
  return (
    <div className={'my-10 flex-col items-center md:flex-row flex gap-2 md:gap-8 '+(align === 'left' ? ' md:flex-row-reverse' : '')}>
        <div className={'flex-1 flex '+(align === 'left' ? ' flex-row-reverse' : '')}>
            <div className={'w-[250px] h-[300px] bg-[#a9b9b8] text-8xl text-white fontroman flex items-center justify-center '+(align === 'right' ? ' translate-x-4' : '-translate-x-4')}>0{index+1}</div>
            <img className={'md:w-[350px]'} src={"https://www.niallscullyphotography.com/wp-content/uploads/2017/06/Aisling-42-600x871.jpg"} alt="" />
        </div>
        <div className='flex-1 flex flex-col items-center gap-4'>
            <h2 className='text-4xl text-center w-fit fontroman md:text-5xl'>What to expect</h2>
            <p className='text-md text-center md:text-xl fontcharm'>Your wedding is a unique reflection of you. That’s why I love getting to know you, and your wedding details, personally. Knowing your wedding day dreams enables me to create authentic images that reflect the real you. My shooting style produces images that reveal the intimate and authentic expressions of the love and commitment you share. Unguarded. Natural. Emotional. The cherished images of a lifetime. Your wedding day will be filled with extraordinary moments — intimate, surprising, and joyous. Captured creatively, those moments shine through as timeless heirlooms, instantly bringing you back to the essence of your day.</p>
        </div>
    </div>
  )
}

export default InvestmentStepsCard