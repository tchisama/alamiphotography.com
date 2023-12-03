import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import {useSwiper} from "swiper/react"

type Props = {
  current:number,
  images:number
}

const SliderButtons = ({current,images}: Props) => {
    const swipe = useSwiper()
  return (
    <div className="flex gap-4 md:scale-[.8] mx-auto scale-[0.5] items-center justify-between max-w-md img mt-2 md:mt-8">
      <button onClick={() => swipe.slidePrev()} className="text-primary flex items-center p-2 group" >
        <ArrowLeft/>
        <div className="w-[30px] md:w-[50px] h-[2px]  duration-200  -translate-x-2 bg-primary">
        </div>
        </button>
        {
          current > 0 ? (
            <div className="text-md md:text-lg">{(((current % images)??0) + 1)} / {images}</div>
          )
          :
          (
            <div className="text-md md:text-lg">{1} / {images}</div>
          )
        }
      <button onClick={() => swipe.slideNext()} className="text-primary group flex items-center p-2" >
        <div className="w-[30px] md:w-[50px] h-[2px]  duration-200 translate-x-2 bg-primary">
        </div>
        <ArrowRight/>
      </button>
    </div>
  )
}

export default SliderButtons