"use client"
import BlogComp from '@/components/BlogComp';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar'
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from "framer-motion"
import Footer from '@/components/Footer';

type Props = {}

  const imageUrls = [
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Eimear-Conor-434-595x894.jpeg?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2019/04/Cliffs-18-of-105.jpg',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Screen-Shot-2023-03-15-at-16.49.15-600x657.png?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Faye-Evan-270-596x894.jpg?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Confetti-1st-Edits-33-597x894.jpeg?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/fiona-1-3-597x894.jpg?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Karla-Jack-291-595x894.jpeg?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Eimear-Conor-434-595x894.jpeg?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Confetti-1st-Edits-8-597x894.jpeg?x15971',
  ];

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
            
            <div className="columns-2 md:columns-3 mt-12 gap-x-1 md:gap-x-4  overflow-hidden">
            {imageUrls.map((imageUrl, index) => (
                <div key={index} className="relative group">
                    <motion.img initial={{ y: 100 }} animate={{ y: 0 }} src={imageUrl} alt={`Photo ${index + 1}`} className="object-cover   md:mb-4 mb-1 w-full h-full" />
                </div>
            ))}
            </div>
            <Footer/>
          </div>
      </div>

      </div>
  )
}

export default Page