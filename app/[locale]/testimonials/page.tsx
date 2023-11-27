"use client"
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';
import WhatClientSays from '@/components/whatClientSays';
import gsap from 'gsap';
import React from 'react'

type Props = {}

function Page({}: Props) {
const [loading, setLoading] = React.useState(true);
  const texth = React.useRef(null);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  React.useEffect(() => {
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
    <div className="px-4 md:px-6 min-h-screen bg-[#fafaf8] overflow-x-hidden">

        <div className="max-w-[1500px] mx-auto relative z-50">
            <div className="nav  opacity-0 -translate-y-6">
                <Navbar/>
            </div>
        </div>
        <div className='max-w-[1500px] mx-auto py-8 '>
                <h1 className='uppercase font-thin mb-28 md:text-4xl tracking-[.10em] leading-relaxed text-center'>what clients say about me</h1>
                <WhatClientSays/>
        </div>
        <Footer/>
    </div>
  )
}

export default Page