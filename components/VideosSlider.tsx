"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import { Play } from 'lucide-react';
import SliderButtons from './SliderButtons';
import VideoPlayer from './VideoPlayer';
import _Flip from 'gsap/Flip';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase';

type Props = {}


type Video = {
  Image: string,
  Name: string,
  "Video link": string,
  id: string
}

const VideosSlider = (props: Props) => {
    const [current, setCurrent] = useState(0);
    const [videos,setVideos] = useState<Video[]>([])
    useEffect(() => {
        // get docs from wedding films collection
        onSnapshot(collection(db, "wedding films"), (snapshot) => {
            setVideos(snapshot.docs.map((doc) => ({...doc.data(),id:doc.id})) as Video[])
        }) 
    },[])
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
                videos
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
                                    <Image alt="" className="w-full bg-[#0002] filter brightness-95 aspect-[3/2]" width={1200} height={800} src={_.Image}></Image>
                                    <h3 className='md:text-xl text-xs uppercase text-center absolute duration-200 bottom-2 md:bottom-10 drop-shadow-md md:font-bold left-[50%] translate-x-[-50%] text-white'>{_.Name}</h3>
                                    <VideoPlayer href={_['Video link']}/>
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