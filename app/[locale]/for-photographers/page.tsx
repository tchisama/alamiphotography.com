"use client"
import BlogComp from '@/components/BlogComp';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar'
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion"
import Footer from '@/components/Footer';
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
  }, [loading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="px-6 bg-[#fafaf8] overflow-x-hidden ">

      <div className="max-w-[1500px] mx-auto relative z-50">
        <div className="nav  opacity-0 -translate-y-6">
          <Navbar />
        </div>
      </div>


      <div className="fontcharm">
          <div
            ref={texth}
            className="max-w-[1500px] mx-auto "
          >
            {/* <motion.div  initial={{ y: 100 }} animate={{ y: 0 }}  className='grid grid-cols-1 overflow-hidden md:grid-cols-3 gap-4 md:gap-y-8  py-8'>
                <BlogComp/>
                <BlogComp/>
                <BlogComp/>
                <BlogComp/>
                <BlogComp/>
                <BlogComp/>
                <BlogComp/>
            </motion.div> */}
            <div className='min-h-[80vh] flex items-center justify-center flex-col gap-4'>
              <div className='  uppercase w-fit text-3xl md:text-5xl tracking-[.15em] '>Coming soon</div>
              <p className='max-w-[910px] text-center text-xs md:text-lg'>Get ready to embark on a journey through the lens of love as we bring you the most enchanting tales of weddings, told through the artistry of our lenses. Stay tuned for a symphony of emotions, a dance of laughter, and a celebration of timeless love stories. Our upcoming blog will be a visual feast, an ode to the magic that happens when two hearts say {"'"}I do.{"'"} Save the date for an unforgettable rendezvous with the essence of matrimony. Love is about to take center stage, and you{"'"}re invited to witness the splendor. Coming soon!</p>
            </div>
          </div>
      </div>
        <Footer/>
      </div>
  )
}

export default Page