"use client";

import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import HelloSection from "@/components/HelloSection";
import ImageSlider from "@/components/ImageSlider";
import Loading from "@/components/Loading";
import MyWork from "@/components/MyWork";
import Testimonial from "@/components/Testimonial";
import Video from "@/components/Video";
import { Separator } from "@/components/ui/separator";
import gsap from "gsap";
import Navbar from '@/components/Navbar'
import React from 'react'

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { db } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";

type Props = {}

function Page({}: Props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");
    const [venue,setVenue]= useState("")





  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(".nav", { y: 0, opacity: 1, duration: 1 }).then(() => {
        gsap.to(".img", { y: 0, opacity: 1, duration: 1 });
        gsap.to(".form", { y: 0, opacity: 1, duration: 1 });
    });

  }, [loading]);

  if (loading) {
    return <Loading />;
  }

  const addOrder = async () => {
    if(name && email && number && date) {
        try {
            const docRef = await addDoc(collection(db, "orders"), {
                name,
                email,
                number,
                date,
                venue,
                message,
                createdAt:serverTimestamp()
            });
            console.log("Document written with ID: ", docRef.id);
            setDate("")
            setEmail("")
            setName("")
            setVenue("")
            setNumber("")
            setMessage("")
            alert("Order added successfully")
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }else{
        alert("Please fill in all fields")
    }
  }



  return (
    <div  className="">
        <div className="max-w-[1500px] mx-auto relative z-50">
            <div className="nav  opacity-0 -translate-y-6 ">
            <Navbar />
            </div>
        </div>
        <div className="flex flex-col md:flex-row max-w-[2200px] mx-auto px-4">
            <div className="flex-1 img translate-y-10 opacity-0">
                <Image width={1000} height={1500} alt="" className="w-full object-cover" src="https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F90589222Contactimage.jpg?alt=media&token=b7a25cc8-8d73-4ec4-940c-7c948b2e9d6e"></Image>
            </div>
            <div className="flex-1 form mt-8 md:mt-0 translate-y-10 opacity-0 flex flex-col gap-4 md:gap-8 md:p-10">
                <h1 className="text-4xl md:text-6xl  leading-relaxed">Get In Touch!</h1>
                <p className="text-md md:text-xl leading-relaxed fontcharm">Thank you so much for your interest in my photography, I would love to hear more about your big day! I am located in Wicklow Ireland, but travel worldwide for weddings. I am excited to hear about your plans and will gladly travel to wherever your adventure takes us. I reply to emails within 24 hours. If you do not hear back from me within that timeframe, please check your spam folder and/or email me directly. Thank you!</p>
                <Separator></Separator>
                <div>
                    <h3 className="my-2 text-xl fontcharm">Your Name</h3>
                    <Input className="border-[#999]" value={name} onChange={(e) => setName(e.target.value)}></Input>
                </div>
                <div>
                    <h3 className="my-2 text-xl fontcharm">Phone Number</h3>
                    <Input  className="border-[#999]" value={number} onChange={(e) => setNumber(e.target.value)} type="number"></Input>
                </div>
                <div>
                    <h3 className="my-2 text-xl fontcharm">Email</h3>
                    <Input  className="border-[#999]" value={email} onChange={(e) => setEmail(e.target.value)} type="email"></Input>
                </div>
                <div>
                    <h3 className="my-2 text-xl fontcharm">Wedding Date </h3>
                    <Input  className="border-[#999]" value={date} onChange={(e) => setDate(e.target.value)} type="date"></Input>
                </div>
                <div>
                    <h3 className="my-2 text-xl fontcharm"> Venue</h3>
                    <Input  className="border-[#999]" value={venue} onChange={(e) => setVenue(e.target.value)}></Input>
                </div>
                <div className="flex-1">
                    <h3 className="my-2  text-xl fontcharm">More details</h3>
                    <Textarea  className="border-[#999] h-[200px] text-lg" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div className="flex-1">
                    <Button onClick={addOrder} size={'lg'} className="text-xl shadow-lg flex gap-2">Send <Send/></Button>
                </div>
            </div>
        </div>

        <div className="max-w-[1500px] md:flex-row flex-col items-center py-20 mt-8 mx-auto flex gap-8">
            <Link href={'/about'} className="flex-1 flex flex-col items-center">
                <p className="text-2xl">Read more</p>
                <h2 className="md:text-5xl text-4xl uppercase">About Me</h2>
            </Link>
            <div className="md:h-[100px] md:w-[2px] w-[100px] h-[1px] bg-primary"></div>
            <Link href={'/wedding'} className="flex-1 flex flex-col items-center">
                <p className="text-2xl">View</p>
                <h2 className="md:text-5xl text-4xl uppercase">More Stories</h2>
            </Link>
            <div className="md:h-[100px] md:w-[2px] w-[100px] h-[1px] bg-primary"></div>
            <Link href={"/wedding-film"} className="flex-1 flex flex-col items-center">
                <p className="text-2xl">Watch</p>
                <h2 className="md:text-5xl text-4xl uppercase">More films</h2>
            </Link>
        </div>
        <div className="max-w-[1500px] mx-auto">
        </div>

        <Footer />
    </div>
  )
}

export default Page