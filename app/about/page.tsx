"use client";
import Footer from "@/components/Footer";
import HelloSection from "@/components/HelloSection";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
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
    <div className="px-6 bg-[#fafaf8] overflow-x-hidden">

        <div className="max-w-[1500px] mx-auto">
            <div className="nav  opacity-0 -translate-y-6">
                <Navbar/>
            </div>
        </div>
        <div className="relative nav mt-8 opacity-0 -translate-y-6">
            <img className="max-h-[70vh] w-full object-cover rounded-2xl mb-8 shadow-2xl" src="https://www.niallscullyphotography.com/wp-content/uploads/2019/04/Cliffs-18-of-105.jpg" alt="" />
            <h1 className="absolute top-10 left-10 text-white drop-shadow-2xl font-bold text-4xl md:text-6xl fontroman">Capturing Timeless Beauty & Emotion</h1>
        </div>
        <div className="max-w-[1500px] mx-auto">
            <div className="nav  opacity-0 -translate-y-6">
                <HelloSection/>
                <div className="my-8 max-w-3xl mx-auto">
                    <Separator/>
                </div>
                <WhatClientSays/>
                <Footer/>
            </div>
        </div>

    </div>
  )
}

export default Page