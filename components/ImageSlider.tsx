"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight, LineChart } from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
type Props = {};
const ImageSlider = (props: Props) => {
  const [images, setImages] = useState<string[]>([]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     gsap
  //       .fromTo(
  //         ".mySwiper",
  //         { y: 120, opacity: 0,  },
  //         { y: 0, opacity: 1, duration: 0.3 }
  //       )
  //       .then(() => {});
  //     gsap.to(".img", { y: 0, scale: 1, opacity: 1, duration: 0.3 });
  //   }, 400);
  // }, [images]);
  useEffect(() => {
    getDoc(doc(db, "configs","homePageImagesSlider")).then((docSnap) => {
      setImages(docSnap.data()?.images as string[])
    })
  },[])
  return (
    <>
    <Swiper
      spaceBetween={10}
      breakpoints={{
        140: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
      }} 
      autoCorrect="off"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper my-[15vh] z-[-10] scale-[2.4] md:scale-[1.5]  "
    >
      {[...images,...images,...images].map((image, index) => (
        <SwiperSlide
          className="w-full h-full overflow-hidden group"
          key={index}
        >
          <div className="h-full  w-full overflow-hidden ">
            <div
              className=" aspect-[3/4] img w-full  bg-repeat-no-repeat group-hover:scale-[1.02] duration-300 "
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${image})`,
              }}
            ></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="flex gap-4 items-center justify-center img">
      <div className="flex-1 flex justify-end">
      <button className="text-primary flex items-center p-2 group" >
        <ArrowLeft/>
        <div className="w-[70px] md:w-[100px] h-[2px]  duration-200  -translate-x-2 bg-primary">
        </div>
        </button>
      </div>
      <div className="text-lg md:text-xl">1 / {images.length}</div>
      <div className="flex-1 flex justify-start">
      <button className="text-primary group flex items-center p-2" >
        <div className="w-[70px] md:w-[100px] h-[2px]  duration-200 translate-x-2 bg-primary">
        </div>
        <ArrowRight/>
      </button>
      </div>
    </div>
    </>
  );
};

export default ImageSlider;
