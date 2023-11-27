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
              [
                {
                  title:" what to expect",
                  content:"Your wedding is a unique reflection of you. That’s why I love getting to know you, and your wedding details, personally. Knowing your wedding day dreams enables me to create authentic images that reflect the real you. My shooting style produces images that reveal the intimate and authentic expressions of the love and commitment you share. Unguarded. Natural. Emotional. The cherished images of a lifetime. Your wedding day will be filled with extraordinary moments — intimate, surprising, and joyous. Captured creatively, those moments shine through as timeless heirlooms, instantly bringing you back to the essence of your day.",
                  img:"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F205116552%20What%20to%20expect.jpg?alt=media&token=84e6bb84-ecfd-461f-a7cb-23fef395a6d6"
                },
                {
                  title:"From start to finish",
                  content:"Once I receive your initial query, you will receive an automated confirmation email. If I am available you will receive my pricing guide along with my own 'Wedding Experience' bridal guide to help you get the most from your wedding day. If you are happy to move forward with me, we will make it official. You can then secure and book your date with a non-refundable booking fee.",
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