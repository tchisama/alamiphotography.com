import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import {useSwiper} from "swiper/react"

type Props = {}

const SliderButtons = (props: Props) => {
    const swipe = useSwiper()
  return (
    <div className="flex gap-4 items-center justify-center img mt-8">
      <div className="flex-1 flex justify-end">
      <button onClick={() => swipe.slidePrev()} className="text-primary flex items-center p-2 group" >
        <ArrowLeft/>
        <div className="w-[70px] md:w-[100px] h-[2px]  duration-200  -translate-x-2 bg-primary">
        </div>
        </button>
      </div>
      <div className="text-lg md:text-xl">1 / 3</div>
      <div className="flex-1 flex justify-start">
      <button onClick={() => swipe.slideNext()} className="text-primary group flex items-center p-2" >
        <div className="w-[70px] md:w-[100px] h-[2px]  duration-200 translate-x-2 bg-primary">
        </div>
        <ArrowRight/>
      </button>
      </div>
    </div>
  )
}

export default SliderButtons