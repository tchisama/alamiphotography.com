"use client"
import React, { useEffect, useState } from 'react'
import ClientReview from './ClientReview'
import { Separator } from './ui/separator'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase'

type Review = {
    Address : string,
    Image: string,
    Message: string,
    Name: string,
    id: string
}
type Props = {}
const WhatClientSays = (props: Props) => {
    const [reviews, setReviews] = useState<Review[]>([])
    useEffect(() => {
        // onsnapshot from wedding stories
        const unsub = onSnapshot(
        collection(db, "reviews"),( snap) => {
            setReviews(
                snap.docs.map((doc) => ({ ...doc.data() as Review, id: doc.id })) as Review[]
            );
        }
        )
        return () => unsub()
    },[])
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