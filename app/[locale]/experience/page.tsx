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
import Steps from "@/components/Steps";

type Props = {}

const Page = (props: Props) => {

  const [loading, setLoading] = useState(true);
  const texth = useRef(null);
  const t = useTranslations('translation');
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
              [
                {
                  title:t("experiencePage_step1_title"),
                  content:t("experiencePage_step1_content"),
                  img:"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F205116552%20What%20to%20expect.jpg?alt=media&token=84e6bb84-ecfd-461f-a7cb-23fef395a6d6"
                },
                {
                  title:t("experiencePage_step2_title"),
                  content:t("experiencePage_step2_content"),
                  img:"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F226170573%20From%20start%20to%20finish.jpg?alt=media&token=4cafca51-1198-4dc4-beae-160dc70ba620"
                }
              ].map((_, index) => {
                return<InvestmentStepsCard item={_} key={index} index={index} />
              })
            }
            <GuideBookSection/>
            <Steps/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Page