import React, { useState } from 'react'
import ClientReview from './ClientReview'
import { Review } from '@/types'
import { Separator } from './ui/separator'

type Props = {}
const WhatClientSays = (props: Props) => {
    const [reviews, setReviews] = useState<Review[]>([
        {
            name: 'John Doe',
            review: 'LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'https://www.niallscullyphotography.com/wp-content/uploads/2021/10/Laura-NEW-1-1-595x894.jpg',
            subtitle: 'CEO'
        },
        {
            name: 'John Doe',
            review: 'LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore llllllt dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'https://www.niallscullyphotography.com/wp-content/uploads/2021/10/Laura-NEW-1-1-595x894.jpg',
            subtitle: 'CEO'
        }
    ])
  return (
    <div>
        <h1 className=' text-2xl md:text-6xl my-10 fontcharm'>What Client Says</h1>
        {
            reviews.map((review, index) => (
                <>
                <ClientReview key={index} review={review} align={index % 2 === 0 ? "left" : "right"}/>
                <Separator/>
                </>
            ))
        }

    </div>
  )
}

export default WhatClientSays