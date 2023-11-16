"use client";
import CheckYouLater from "@/components/CheckYouLater";
import Footer from "@/components/Footer";
import HelloSection from "@/components/HelloSection";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import QandA from "@/components/QandA";
import { Separator } from "@/components/ui/separator";
import WhatClientSays from "@/components/whatClientSays";
import gsap from "gsap";
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
            <img className="h-[50vh] md:h-[70vh] scale-105 w-full object-cover  mb-8 " src="https://www.niallscullyphotography.com/wp-content/uploads/2019/04/Cliffs-18-of-105.jpg" alt="" />
            <h1 className="absolute md:text-white top-2 md:top-10 md:left-10 drop-shadow-2xl font-bold text-3xl md:text-6xl ">Capturing Timeless Beauty & Emotion</h1>
        </div>
        <div className="max-w-[1500px] mx-auto">
            <div className="nav  opacity-0 -translate-y-6">
                <HelloSection/>
                <div className="my-8 max-w-3xl mx-auto">
                </div>
                <WhatClientSays/>
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