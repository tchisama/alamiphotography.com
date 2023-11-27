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
            img: 'https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F254393367V1A1361.jpg?alt=media&token=5df1bf22-b2d6-40b1-ac1d-4b0bfcd275c3',
            subtitle: 'marrakesh ,morocco'
        },
        {
            name: 'John Doe',
            review: 'LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore llllllt dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F954863827V1A4411.jpg?alt=media&token=6c67a155-2e9a-4338-9d3d-6703f6fe6853',
            subtitle: 'marrakesh ,morocco'
        },
        {
            name: 'John Doe',
            review: 'LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore llllllt dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F451508274G0A7985.jpg?alt=media&token=ffb21c5d-f6de-46c2-bc0b-0e35dacc5630',
            subtitle: 'marrakesh ,morocco'
        }
    ])
  return (
    <div>
        {
            reviews.map((review, index) => (
                <>
                <ClientReview key={index} review={review} align={index % 2 !== 0 ? "left" : "right"}/>
                <Separator/>
                </>
            ))
        }

    </div>
  )
}

export default WhatClientSays