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
            img: 'https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F182201294%204G0A7905-min.jpg?alt=media&token=c2451074-9e99-4d61-a71d-72dde98dd9ea',
            subtitle: 'CEO'
        },
        {
            name: 'John Doe',
            review: 'LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore llllllt dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F494606873%204G0A6767-min.jpg?alt=media&token=64c6aa07-9f45-48c0-a438-d4e974fd8405',
            subtitle: 'CEO'
        },
        {
            name: 'John Doe',
            review: 'LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore llllllt dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F672688252%204G0A1918-min.jpg?alt=media&token=1d980f28-2581-4e51-991f-12312d837323',
            subtitle: 'CEO'
        }
    ])
  return (
    <div>
        <h1 className=' text-4xl md:text-6xl my-16 fontcharm'>What Client Says</h1>
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