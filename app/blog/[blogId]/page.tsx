
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
    'https://www.niallscullyphotography.com/wp-content/uploads/2019/04/Cliffs-18-of-105.jpg',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Eimear-Conor-434-595x894.jpeg?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Eimear-Conor-434-595x894.jpeg?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2019/04/Cliffs-18-of-105.jpg',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Eimear-Conor-434-595x894.jpeg?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2019/04/Cliffs-18-of-105.jpg',
    'https://www.niallscullyphotography.com/wp-content/uploads/2019/04/Cliffs-18-of-105.jpg',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Eimear-Conor-434-595x894.jpeg?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Eimear-Conor-434-595x894.jpeg?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2019/04/Cliffs-18-of-105.jpg',
    // Add more image URLs as needed
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
            <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className='flex py-10 items-center gap-6 justify-center flex-col'>
                <h4 className='text-sm md:text-xl text-muted-foreground text-center'>September 15, 2023</h4>
                <h2 className='text-xl md:text-5xl text-center'>Top Wedding Stationary Suppliers</h2>
                <h3 className='md:text-3xl text-center'>Wedding</h3>
                <p className='py-4 text-sm md:py-20 md:text-xl text-center'>LoLorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore natus doloremque, ipsam magni doloribus delectus, inventore incidunt id ullam praesentium assumenda iure dolorum quidem illo, quis provident animi cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore natus doloremque, ipsam magni doloribus delectus, inventore incidunt id ullam praesentium assumenda iure dolorum quidem illo, quis provident animi cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore natus doloremque, ipsam magni doloribus delectus, inventore incidunt id ullam praesentium assumenda iure dolorum quidem illo, quis provident animi cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore natus doloremque, ipsam magni doloribus delectus,</p>
            </motion.div>

            <div className="columns-3 gap-x-1 md:gap-x-4  overflow-hidden">
            {imageUrls.map((imageUrl, index) => (
                <div key={index} className="relative group">
                    <motion.img initial={{ y: 100 }} animate={{ y: 0 }} src={imageUrl} alt={`Photo ${index + 1}`} className="object-cover md:mb-4 mb-1 w-full h-full" />
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