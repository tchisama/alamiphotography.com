"use client"
import BlogComp from '@/components/BlogComp';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar'
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from "framer-motion"
import Footer from '@/components/Footer';
import WeddingStoryComp from '@/components/WeddingStoryComp';

type Props = {}


const Page = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const texth = useRef(null);
  const { scrollYProgress } = useScroll();
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
    gsap.to('.img', {
        x: 100, 
        scrollTrigger: {
          trigger: '.img',
          start: 'top bottom',
          end: 'center center',
          scrub: true
        }
      });
  }, [loading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="px-4 md:px-6 bg-[#fafaf8] overflow-x-hidden min-h-screen">

      <div className="max-w-[1500px] mx-auto relative z-50">
        <div className="nav  opacity-0 -translate-y-6">
          <Navbar />
        </div>
      </div>


      <div className=" fontcharm ">
          <div
            ref={texth}
            className="max-w-[1500px]  mx-auto "
          >
            <div className='flex items-center gap-4 py-8 flex-col my-20'>
              <h1 className='text-5xl text-center'>Wedding Photographer</h1>
              <p className='text-center'>GET A GLIMPSE OF MY THOUGHTS</p>
            </div>
            
            {
              new Array(1).fill(0).map((_, i) => (
                <WeddingStoryComp i={i} key={i}/>
              ))
            }
          </div>
      </div>

            <Footer/>
      </div>
  )
}

export default Page