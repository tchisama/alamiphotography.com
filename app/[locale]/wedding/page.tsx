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
              <h1 className='text-2xl md:text-5xl text-center'>GET A GLIMPSE OF MY THOUGHTS</h1>
              <p className='text-center text-sm md:text-md  max-w-[700px]'>We passionate for the timeless photography with every moment we capture. We believe that a really
awesome photograph should always create some level of emotional response in the viewer.<br/> We want to
journal stories with images over words.<br/><br/>
I aim to seize enchanting and magical moments shared by people in love, providing them with an unforgettable experience in the process.</p>
            </div>
            
            {
              [
                {
                  title:'Jasmine & Aziz',
                  type:"Wedding Villa D",
                  content:`Stepping into the enchanting journey of Jasmin and Aziz's wedding at the exquisite Villa D in Marrakech was a photographic odyssey like no other. The air was infused with the rich tapestry of Moroccan and Chinese cultural traditions, creating a magical ambiance that whispered tales of love and union.

                  Entering the enchanting world of Jasmin and Aziz's wedding at the exquisite Villa D in Marrakech was a photographic adventure like no other. The air buzzed with the rich tapestry of Moroccan and Chinese cultural traditions, creating a magical atmosphere that told stories of love and union.
                  
                  Note: The term "embarking on" was replaced with "entering" to make the paragraph shorter while maintaining the essence of the original text.
                  `,
                  img:"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F738571664G0A2303.jpg?alt=media&token=c6d09158-46c5-46b5-87a7-3872493464b8",
                  href:"https://alamiphotography.pic-time.com/-jasmineaziz"
                },
                {
                  title:'Janna & Hamza',
                  type:"Wedding Domaine Yakout",
                  content:`Embarking on the enchanting journey of capturing Janna and Hamza's love story at Marrakech's Domaine Yakout was truly magical. The picturesque venue provided a perfect backdrop for their celebration, blending traditional Moroccan charm with modern elegance.

                  Every click of the shutter felt like capturing a chapter in their unique love story. From the intimate ceremony to the joyous celebrations, each frame tells a tale of love, commitment, and the beginning of a beautiful journey together.
                  
                  Janna and Hamza's wedding, set against the vibrant colors of Moroccan décor, was a visual symphony of traditions and shared laughter. Their love radiated amidst the captivating allure of Domaine Yakout, creating timeless moments that will forever be etched in the frames of memory.
                  
                  In the heart of Marrakech, this wedding wasn't just an event; it was a celebration of cultures and the universal language of love. As a photographer, I found not only a picturesque setting but also a canvas to capture the timeless essence of love. Janna and Hamza's union at Domaine Yakout will forever hold a special place in my portfolio, a testament to the power of love and the artistry of storytelling through the lens. `,
                  img:"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F732569474G0A8072.jpg?alt=media&token=59843b12-1164-4f33-afa3-6f2135becc82",
                  href:"https://alamiphotography.pic-time.com/-jannahamza"
                },
                {
                  title:'Sidney & Youri',
                  type:"Wedding Beldi Country Club",
                  content:`In the warm glow of Marrakech's sun, Sidney and Youri's vows echoed joy at The Beldi Country Club. Alami, the skilled photographer, wove a visual narrative capturing moments of laughter, tears, and the promise of forever.

                  Alami's artistry caught the eye of UK Vogue, showcasing the couple's love and his magical touch. From intimate glances to the grand celebration, each photo painted a unique story in the vibrant hues of Marrakech.
                  
                  Featured in Vogue, the images transcended borders, telling a universal love story. Alami's dedication immortalized Sidney and Youri's wedding in a timeless tale of love, gracing the hearts of those who witnessed it and those who experienced it through his lens. `,
                  img:"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F657813907V1A1361.jpg?alt=media&token=cb6b22b8-b10d-4f65-bb46-94603f76d53f",
                  href:"https://alamiphotography.pic-time.com/-sidneyyouri"
                }
              ]
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