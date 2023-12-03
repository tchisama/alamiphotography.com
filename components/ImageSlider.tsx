"use client";
import gsap from "gsap";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide,useSwiper } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight, LineChart } from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import SliderButtons from "./SliderButtons";
import Image from "next/image";



type Props = {};
const ImageSlider = (props: Props) => {
  const [images, setImages] = useState<string[]>([]);
  const swiper = useSwiper();
  const [current, setCurrent] = useState(200);
  useEffect(() => {
    getDoc(doc(db, "configs","homePageImagesSlider")).then((docSnap) => {
      setImages(docSnap.data()?.images as string[])
    })
  },[])


  useEffect(() => {
    const time = setInterval(() => {
      setCurrent(current + 1);
    }, 7000);
    return () => {
      clearInterval(time);
    }
  },[current])


  return (
    <>
    {/* <Swiper
      spaceBetween={10}
      navigation
      breakpoints={{
        140: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }} 
      autoCorrect="off"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper my-[16vh] md:my-[11vh] z-[-10] scale-[2.2] md:scale-[1.2]  "
    >
      {[...images,...images,...images].map((image, index) => (
        <SwiperSlide
          className="w-full h-full overflow-hidden group"
          key={index}
        >

              {({ isActive }) => {
                  if(isActive){
                      setCurrent(index)
                  }
                  return(
                        <div className="h-full  w-full overflow-hidden ">
                          <div
                            className=" aspect-[2/3] img w-full  bg-repeat-no-repeat duration-300 "
                          >
                            <Image width={400} height={600} src={image} className="w-full bg-[#0002]  aspect-[2/3]" alt="" />
                          </div>
                        </div>
                  )}}
        </SwiperSlide>
      ))}
    </Swiper> */}
    <div className=" hidden lg:flex w-[calc(100vw+15%)] translate-x-[-7.6%] overflow-hidden gap-8 ">
        {
          new Array(100).fill(images).flat(1).slice(current,current+5).map((image, index) => (
            <div key={index+current} className="flex-1 duration-200 aspect-[2/3]">
              <Image alt="" width={600} height={900} src={image} key={index} className="w-full object-contain"></Image>
            </div>
          ))
        }
    </div>
    <div className="flex lg:hidden  w-[calc(100vw+100%)] mt-8 translate-x-[-26%] overflow-hidden gap-8 ">
        {
          new Array(100).fill(images).flat(1).slice(current,current+3).map((image, index) => (
            <div key={index} className="flex-1 aspect-[2/3]">
              <Image alt="" width={600} height={900} src={image} key={index} className="w-full object-contain"></Image>
            </div>
          ))
        }
    </div>
        <div>
        <div className="flex gap-4  mx-auto   items-center justify-between max-w-[250px] md:max-w-md img mt-2 md:mt-8">
      <button onClick={() => setCurrent(current==0?0:current - 1)} className="text-primary flex items-center p-2 group" >
        <ArrowLeft/>
        <div className="w-[30px] md:w-[50px] h-[2px]  duration-200  -translate-x-2 bg-primary">
        </div>
        </button>
        {
          current > 0 ? (
            <div className="text-sm md:text-lg">{(((current % images.length)??0) + 1)} / {images.length}</div>
          )
          :
          (
            <div className="text-sm md:text-lg">{1} / {images.length}</div>
          )
        }
      <button onClick={() => setCurrent(current + 1)} className="text-primary group flex items-center p-2" >
        <div className="w-[30px] md:w-[50px] h-[2px]  duration-200 translate-x-2 bg-primary">
        </div>
        <ArrowRight/>
      </button>
    </div>
        </div>
    </>
  );
};

export default ImageSlider;