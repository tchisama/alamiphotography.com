"use client"
import BlogComp from '@/components/BlogComp';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar'
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from "framer-motion"
import Footer from '@/components/Footer';
import WeddingStoryComp from '@/components/WeddingStoryComp';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase';

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


  type Story = {
    Image: string,
    content: string,
    "full story link": string,
    id: string,
    name: string,
    "wedding type": string
  }

  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    // onsnapshot from wedding stories
    const unsub = onSnapshot(
      collection(db, "wedding storys"),( snap) => {
        setStories(
          snap.docs.map((doc) => ({ ...doc.data() as Story, id: doc.id })) as Story[]
        );
      }
    )
    return () => unsub()
  },[])



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
              <h1 className='text-2xl md:text-5xl text-center'>GET A GLIMPSE OF MY THOUGHTS</h1>
              <p className='text-center text-sm md:text-md  max-w-[700px]'>We passionate for the timeless photography with every moment we capture. We believe that a really
awesome photograph should always create some level of emotional response in the viewer.<br/> We want to
journal stories with images over words.<br/><br/>
I aim to seize enchanting and magical moments shared by people in love, providing them with an unforgettable experience in the process.</p>
            </div>
            
            {
              stories
              .map((_, i) => (
                <WeddingStoryComp item={_} i={i} key={i}/>
              ))
            }
          </div>
      </div>

            <Footer/>
      </div>
  )
}

export default Page