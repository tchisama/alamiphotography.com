"use client";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import useNavbarStore from "@/store/navbarStore";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import {useTranslations} from 'next-intl';
import InvestmentHero from "@/components/InvestmentHero";
import InvestmentStepsCard from "@/components/InvestmentStepsCard";
import GuideBookSection from "@/components/GuideBookSection";

type Props = {}

const Page = (props: Props) => {

  const [loading, setLoading] = useState(true);
  const texth = useRef(null);
  const t = useTranslations('Index');
  const {open} = useNavbarStore()
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
    <div className=" bg-[#fafaf8] overflow-x-hidden">

        <div className="nav px-6 opacity-0 -translate-y-6 z-50">
          <div className="max-w-[1500px]  mx-auto relative z-50">
            <Navbar />
          </div>
        </div>
      <InvestmentHero />
        <div className="px-6 my-28">
          <div className="max-w-[1600px]  mx-auto">
            {
              new Array(2).fill(0).map((_, index) => {
                return<InvestmentStepsCard key={index} index={index} />
              })
            }
            <GuideBookSection/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Page