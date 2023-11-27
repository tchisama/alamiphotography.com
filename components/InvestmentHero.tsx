import Image from 'next/image'
import React from 'react'

type Props = {}

const InvestmentHero = (props: Props) => {
  return (
    <div className=''>
        <div className=' z-0'>
            <Image alt="" width={1500} height={1000} className='w-full bg-[#0002] h-[60vh] object-center object-cover' src="https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F427258471%20ELEGANCE%20IS%20TIMELESS.jpg?alt=media&token=8651ed7b-4f87-426b-9659-6994109eb412" />
        </div>
        <h1 className='text-7xl font-thin -translate-y-52 absolute text-white bottom-8 left-8 max-w-[700px] text-center'>ELEGANCE IS TIMELESS</h1>
    </div>
  )
}

export default InvestmentHero