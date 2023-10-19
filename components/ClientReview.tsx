import { Review } from '@/types'
import React from 'react'

type Props = {
    review:Review
    align: 'left' | 'right'
}

const ClientReview = ({review,align}: Props) => {
  return (
    <div className={'my-10 flex gap-8 '+(align === 'left' ? ' flex-row-reverse' : '')}>
        <img className={'w-[250px] rounded-xl shadow-xl '+(align === 'left' ? 'rotate-2' : '-rotate-2')} src={review.img} alt="" />
        <div className={'min-w-[350px] p-4'+(align === 'left' ? ' text-right' : '')}>
            <h2 className='text-2xl fontroman md:text-5xl'>{review.name}</h2>
            <h3 className='text-xl md:text-2xl fontcharm text-muted-foreground'>{review.subtitle}</h3>
        </div>
        <p className='text-lg md:text-2xl fontcharm'>{review.review}</p>
    </div>
  )
}

export default ClientReview