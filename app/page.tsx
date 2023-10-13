"use client"
import ImageSlider from '@/components/ImageSlider'
import Loading from '@/components/Loading'
import Navbar from '@/components/Navbar'
import gsap from 'gsap'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const texth = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)


  },[])
  useEffect(() => {
      let tl = gsap.timeline()
     
       tl
      .from(
          ".texth",
          {y: 40, opacity: 0},
      ).to(
          ".texth",
          {y: 0, opacity: 1, duration: 1}
      )
  },[loading])
  if(loading){
    return(
      <Loading/>
    )
  }
  return (
      <div className='px-6'>
        <div className='max-w-[1500px] mx-auto'>
          <div className='texth'>
            <Navbar/>
          </div>
        </div>
        <div className='my-8 '>
          <ImageSlider/>
        </div>
        <div className="texth my-10">
        <div ref={texth} className='max-w-[1500px] texth mx-auto flex flex-col items-center'>
          <h1 className='text-4xl font-light text-center max-w-[800px]'>
              NATURAL & ELEGANT <br/>
              FINE ART WEDDING & LIFESTYLE PHOTOGRAPHER & VIDEOGRAPHER
          </h1>
          <h2 className='text-2xl font-light  text-center my-4'>Capturing Timeless Beauty & Emotion</h2>
        </div>
        </div>
      </div>
  )
}
