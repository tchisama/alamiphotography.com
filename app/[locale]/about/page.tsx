"use client";
import CheckYouLater from "@/components/CheckYouLater";
import Footer from "@/components/Footer";
import GetImage from "@/components/GetImage";
import GetText from "@/components/GetText";
import HelloSection from "@/components/HelloSection";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import QandA from "@/components/QandA";
import { Separator } from "@/components/ui/separator";
import WhatClientSays from '@/components/whatClientSays';
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {}

function Page({}: Props) {
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
    <div className="px-4 md:px-6 bg-[#fafaf8] overflow-x-hidden">

        <div className="max-w-[1500px] mx-auto relative z-50">
            <div className="nav  opacity-0 -translate-y-6">
                <Navbar/>
            </div>
        </div>
        <div className="relative nav mt-8 opacity-0 -translate-y-6">
            <GetImage width={1500} height={1000} name="hero" className="h-[50vh]  bg-[#0002]  md:h-[70vh] scale-110 md:scale-105 w-full  object-cover mb-8 " section="aboutPage"  />
            <h1 className="absolute text-white bottom-5 left-5 md:bottom-10 md:left-10 drop-shadow-2xl  text-3xl md:text-6xl ">
              <GetText id="about_hero_title"/>
            </h1>
        </div>
        <div className="max-w-[1500px] mx-auto py-8">
            <div className="nav  opacity-0 -translate-y-6">
                <HelloSection/>
                <div className="my-8 max-w-3xl mx-auto">
                </div>
                <h1 className=' text-4xl md:text-6xl my-16 fontcharm'>
                  <GetText id="about_what_clients_say_title"/>
                </h1>
                <WhatClientSays about={true}/>
            </div>
        </div>

        <div className="px-[-20px]">
          <CheckYouLater/>
        </div>

        <div className="max-w-[1500px] mx-auto">
            <div className="nav  opacity-0 -translate-y-6">
                <QandA/>
            </div>
        </div>

                <Footer/>
    </div>
  )
}

export default Page