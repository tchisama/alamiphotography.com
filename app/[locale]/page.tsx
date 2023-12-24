"use client";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import HelloSection from "@/components/HelloSection";
import ImageSlider from "@/components/ImageSlider";
import Loading from "@/components/Loading";
import MyWork from "@/components/MyWork";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";
import Video from "@/components/Video";
import useNavbarStore from "@/store/navbarStore";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import {useTranslations} from 'next-intl';
import WeAreCinematicStyle from "@/components/WeAreCinematicStyle";
import InstagramFooter from "@/components/instagramFooter";
import Testimonial from "@/components/Testimonial";
import GetData from "@/components/GetData";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const texth = useRef(null);
  const t = useTranslations('translation');
  const {open} = useNavbarStore()
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
      <>
    <div className="px-4 bg-[#fafaf8] overflow-x-hidden">

      <div className="max-w-[1500px] mx-auto relative z-50">
        <div className="nav  opacity-0 -translate-y-6">
          <Navbar />
        </div>
      </div>

      <div className="md:my-8 z-[-1]">
        <ImageSlider />
      </div>

      <div className="texth opacity-0 fontcharm translate-y-12 md:my-64  my-16 ">
        <div
          ref={texth}
          className="max-w-[1500px] texth mx-auto flex  flex-col items-center"
        >
          <h1 className="text-2xl opacity-80 uppercase font-thin md:text-5xl tracking-[.10em] leading-relaxed text-center max-w-[900px]">
            {t("home_hero_title")}
          </h1>
          <h2 className="text-xl md:text-5xl font-light fontroman text-primary  text-center my-4">
            {t("home_hero_sub_title")}
          </h2>
        </div>
      </div>


      <div className="max-w-[1500px] mx-auto">
          <HelloSection homepage={true}/>
          <MyWork />
          <Featured/>
      </div>

      <div className="max-w-[2000px] mx-auto">
          <Video/>
          <WeAreCinematicStyle/>
      </div>

      <div className="max-w-[2500px] mx-auto">
          <Testimonial/>
      </div>

      <div className="max-w-[1800px] mx-auto">
          {/* <InstagramFooter/> */}
      </div>

        <GetData from="home/hello-section">
          {({title}) => {
            return <h1>{title}</h1>
          }}
        </GetData>

    </div>

        <Footer/>
      </>
  );
}
