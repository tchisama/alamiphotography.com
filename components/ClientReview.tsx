import Image from 'next/image'
import React from 'react'
type Review = {
    Address : string,
    Image: string,
    Message: string,
    Name: string,
}
type Props = {
    review:Review
    align: 'left' | 'right'
}

const ClientReview = ({review,align}: Props) => {
  return (
    <div className={'my-10 flex-col md:flex-row flex gap-12 md:gap-8 '+(align === 'left' ? ' md:flex-row-reverse' : '')}>
        <div className={'flex flex-1 min-w-[500px] gap-2'+(align === 'left' ? ' md:flex-row-reverse' : '')}>
          <Image width={300} height={450} className={'md:w-[250px] w-[120px] bg-[#0002] '} src={review.Image} alt="" />
          <div className={'p-2 md:p-4'+(align === 'left' ? ' md:text-right' : '')}>
              <h2 className='md:text-4xl text-xl uppercase'>{review.Name}</h2>
              <h3 className=' md:text-sm text-xs opacity-60 uppercase font-sans '>{review.Address}</h3>
          </div>
        </div>
        <p className='text-sm md:text-xl fontcharm flex-1 opacity-80 '>{review.Message}</p>
    </div>
  )
}

export default ClientReview