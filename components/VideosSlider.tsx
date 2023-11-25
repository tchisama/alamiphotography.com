"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import { Play } from 'lucide-react';
import SliderButtons from './SliderButtons';
import VideoPlayer from './VideoPlayer';

type Props = {}

const VideosSlider = (props: Props) => {
    const [current, setCurrent] = useState(0);
  return (
    <div>
        <Swiper
      spaceBetween={8}
      navigation
      breakpoints={{
        140: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1.6,
          spaceBetween: 10,
        },
      }} 
      autoCorrect="off"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className='my-12 '
        >
            {
                new Array(5).fill(0).map((_, index) => {
                    return (
                        <SwiperSlide
                        className="w-full h-full overflow-hidden group relative"
                        key={index}
                        >
                        {({ isActive }) => {
                            if(isActive){
                                setCurrent(index)
                            }
                            return(
                                <div className={index === 0 ? 'mx-8' : 'mx-8'}>
                                    <Image alt="" className="w-full bg-[#0002] filter brightness-95 aspect-[3/2]" width={1200} height={800} src="https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F427258471%20ELEGANCE%20IS%20TIMELESS.jpg?alt=media&token=8651ed7b-4f87-426b-9659-6994109eb412"></Image>
                                    <h3 className='text-xl uppercase text-center absolute duration-200 bottom-12 drop-shadow-md font-bold left-[50%] translate-x-[-50%] text-white'>nour & sam <br/>millennim parklands</h3>
                                    <VideoPlayer/>
                                </div>
                            )}}
                        </SwiperSlide>
                    )
                })
            }
            <SliderButtons current={current} images={5}/>
        
        </Swiper>
    </div>
  )
}

export default VideosSlider