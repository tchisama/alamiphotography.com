"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide,useSwiper } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight, LineChart } from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
type Props = {};
const ImageSlider = (props: Props) => {
  const [images, setImages] = useState<string[]>([]);
  const swiper = useSwiper();

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
      navigation
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
      className="mySwiper my-[10vh] z-[-10] scale-[2.4] md:scale-[1.2]  "
    >
      {[...images,...images,...images].map((image, index) => (
        <SwiperSlide
          className="w-full h-full overflow-hidden group"
          key={index}
        >
          <div className="h-full  w-full overflow-hidden ">
            <div
              className=" aspect-[2/3] img w-full  bg-repeat-no-repeat group-hover:scale-[1.02] duration-300 "
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${image})`,
              }}
            ></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};

export default ImageSlider;