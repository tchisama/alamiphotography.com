"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight, LineChart } from "lucide-react";
type Props = {};
const images = [
  "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1439261/pexels-photo-1439261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1439261/pexels-photo-1439261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1439261/pexels-photo-1439261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1439261/pexels-photo-1439261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const ImageSlider = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      gsap
        .fromTo(
          ".mySwiper",
          { y: 120, opacity: 0,  },
          { y: 0, opacity: 1, duration: 0.3 }
        )
        .then(() => {});
      gsap.to(".img", { y: 0, scale: 1, opacity: 1, duration: 0.3 });
    }, 400);
  }, []);

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
      className="mySwiper my-[16vh] z-[-10] scale-[2.4] md:scale-[1.5] opacity-0 "
    >
      {images.map((image, index) => (
        <SwiperSlide
          className="w-full h-full overflow-hidden group"
          key={index}
        >
          <div className="h-full  w-full overflow-hidden ">
            <div
              className=" aspect-[3/4] img translate-y-[150px] w-full  bg-repeat-no-repeat group-hover:scale-[1.02] duration-300 "
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
      <div className="text-lg md:text-xl">1 / 3</div>
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
