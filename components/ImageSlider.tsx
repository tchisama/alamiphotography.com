"use client"
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';
type Props = {}
const images=[
    "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1439261/pexels-photo-1439261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]
const ImageSlider = (props: Props) => {
    useEffect(
        () => {
            gsap.fromTo(
                '.mySwiper',
                {y: 30, opacity: 0},
                {y: 0, opacity: 1, duration: 1}
            )
    },[])

  return (
    <Swiper
        spaceBetween={10}
        slidesPerView={3.5}
        autoCorrect='off'
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className='mySwiper'
        >
        {images.map((image, index) => (
            <SwiperSlide className='w-full h-full rounded-md overflow-hidden group' key={index} >
                <div className='h-[70vh]  bg-repeat-no-repeat group-hover:scale-105 scale-100 duration-300 group-hover:rotate-2'  style={{backgroundSize:'cover',backgroundImage: `url(${image})`}}>
                </div>
            </SwiperSlide>
        ))}
  </Swiper>
  )
}

export default ImageSlider