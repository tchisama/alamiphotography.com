"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import { Play } from 'lucide-react';
import SliderButtons from './SliderButtons';
import VideoPlayer from './VideoPlayer';
import _Flip from 'gsap/Flip';

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
          slidesPerView: 1.2,
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
              [
                {
                  name : "Christine & Nicolas",
                  href:"https://galleries.vidflow.co/p9qqidiy",
                  img:"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F80138509Screenshot%202023-11-27%20at%2016.21.48.png?alt=media&token=479e56a5-0399-4c1c-a26c-a7ea5ebd185a"
                },
                {
                  name:'Eve & Julien',
                  href:"https://galleries.vidflow.co/73tf9icl",
                  img:"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F83851006Screenshot%202023-11-27%20at%2016.25.58.png?alt=media&token=05164e6b-39ea-4b65-bbaa-91623ce31590"
                },
                {
                  name:"Janna & Hamza",
                  href:"https://galleries.vidflow.co/hs75yqw2",
                  img:"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F17511596Screenshot%202023-11-27%20at%2016.27.23.png?alt=media&token=001ab9ba-7341-42ab-8884-8e73e23b6e79"
                },
                {
                  name:"Aleigha & Mike",
                  href:"https://galleries.vidflow.co/bhj0v3uo",
                  img:"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F81718500Screenshot%202023-11-27%20at%2016.30.16.png?alt=media&token=38a50318-873f-466e-9a27-56edebb3d05b"
                },
                {
                  name:"Audrey & Rubin",
                  href:"https://galleries.vidflow.co/xsstglxc",
                  img:"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F96636107Screenshot%202023-11-27%20at%2016.32.58.png?alt=media&token=266489f2-2a6b-4475-9c63-56b057fc70ab"
                },
                {
                  name:"Sarah & Liam",
                  href:"https://galleries.vidflow.co/rptepuab",
                  img:"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F67400677Screenshot%202023-11-27%20at%2016.33.44.png?alt=media&token=cf3ab73d-bfbc-43b5-9db1-cb087fb64bb2"
                }
              ]
                .map((_, index) => {
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
                                <div className={' mx-2 md:mx-8'}>
                                    <Image alt="" className="w-full bg-[#0002] filter brightness-95 aspect-[3/2]" width={1200} height={800} src={_.img}></Image>
                                    <h3 className='md:text-xl text-xs uppercase text-center absolute duration-200 bottom-2 md:bottom-10 drop-shadow-md md:font-bold left-[50%] translate-x-[-50%] text-white'>{_.name}</h3>
                                    <VideoPlayer href={_.href}/>
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