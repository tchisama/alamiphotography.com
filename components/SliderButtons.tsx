import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import {useSwiper} from "swiper/react"

type Props = {
  current:number,
  images:number,
  setCurrent:(n:number)=>void
}

const SliderButtons = ({current,images,setCurrent}: Props) => {
    // const swipe = useSwiper()
  return (
    <div className="flex gap-4  mx-auto   items-center justify-between max-w-[250px] md:max-w-md img mt-2 md:mt-8">
      <button onClick={() => setCurrent(current==0?0:current - 1)} className="text-primary flex items-center p-2 group" >
        <ArrowLeft/>
        <div className="w-[30px] md:w-[50px] h-[2px]  duration-200  -translate-x-2 bg-primary">
        </div>
        </button>
        {
          current > 0 ? (
            <div className="text-sm md:text-lg">{(((current % images)??0) + 1)} / {images}</div>
          )
          :
          (
            <div className="text-sm md:text-lg">{1} / {images}</div>
          )
        }
      <button onClick={() => setCurrent(current + 1)} className="text-primary group flex items-center p-2" >
        <div className="w-[30px] md:w-[50px] h-[2px]  duration-200 translate-x-2 bg-primary">
        </div>
        <ArrowRight/>
      </button>
    </div>
  )
}

export default SliderButtons