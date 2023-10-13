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
  

  return (
    <Swiper
        spaceBetween={10}
        slidesPerView={4}
        autoCorrect='off'
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        >
        {images.map((image, index) => (
            <SwiperSlide className='w-full h-full' key={index} >
                <div className='h-[70vh] rounded-md bg-repeat-no-repeat'  style={{backgroundSize:'cover',backgroundImage: `url(${image})`}}>

                </div>
            </SwiperSlide>
        ))}
  </Swiper>
  )
}

export default ImageSlider