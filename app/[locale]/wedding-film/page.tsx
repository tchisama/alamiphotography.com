"use client"
import AlamiSection from '@/components/AlamiSection'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'
import Navbar from '@/components/Navbar'
import VideosSlider from '@/components/VideosSlider'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

type Props = {}

const Page = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const texth = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(".nav", { y: 0, opacity: 1, duration: 1 });
    setTimeout(() => {
      let tl = gsap.timeline();
      tl.to(".texth", { y: 0, opacity: 1, duration: 1 });
    }, 1000);
  }, [loading]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className=" bg-[#fafaf8] overflow-x-hidden">

        <div className="max-w-[1500px] mx-auto relative z-50">
            <div className="nav px-6 opacity-0 -translate-y-6">
                <Navbar/>
            </div>
        </div>
        <div className="relative nav mt-8 opacity-0 -translate-y-6">
            <Image width={1500} height={1000} alt="" className="h-[50vh]  bg-[#0002]  md:h-[70vh] scale-105 w-full  object-cover mb-8 " src="https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F244157121%20Landscapeimage-min.jpg?alt=media&token=838ce1e6-02e4-44aa-a915-0f86b82f50c2"  />
            {/* <h1 className="absolute md:text-white md:bottom-10 md:left-10 drop-shadow-2xl font-bold text-3xl md:text-6xl ">Capturing Timeless Beauty & Emotion</h1> */}
        </div>
        <div className='max-w-[1500px] mx-auto flex justify-center'>
            <p className='text-center max-w-3xl mx-auto mt-4 md:py-28 text-sm p-4 md:text-xl'>
                    &quot;Every wedding has its own unique sense of style and personality,

                    our cinematic approach is to be non-directorial and more observative while making our clients feel inspired,

                    relaxed, and connected. We use the formula of documentary style shooting as it happens so that our works are honest,

                    fun, and timeless. We want you to remember your day… not us directing you!&quot;
            </p>
        </div>
        <div className='py-24'>
            <VideosSlider/>
            <AlamiSection/>
        </div>
        <Footer/>
    </div>
  )
}
export default Page