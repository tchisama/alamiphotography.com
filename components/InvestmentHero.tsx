import React from 'react'

type Props = {}

const InvestmentHero = (props: Props) => {
  return (
    <div className='relative'>
        <img className='w-full h-[60vh] object-top object-cover' src="https://www.niallscullyphotography.com/wp-content/uploads/2022/12/Fiona-Dean-919-2048x1365.jpg" alt="" />
        <h1 className='text-7xl absolute text-white bottom-8 left-8 max-w-[700px] text-center'>ELEGANCE IS TIMELESS</h1>
    </div>
  )
}

export default InvestmentHero