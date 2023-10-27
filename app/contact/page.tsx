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
import { collection, addDoc } from "firebase/firestore";

type Props = {}

function Page({}: Props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");





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
                message
            });
            console.log("Document written with ID: ", docRef.id);
            setDate("")
            setEmail("")
            setName("")
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
    <div  className="bg-[#fafaf8]">
        <div className="max-w-[1500px] mx-auto relative z-50">
            <div className="nav  opacity-0 -translate-y-6 ">
            <Navbar />
            </div>
        </div>
        <div className="flex flex-col md:flex-row max-w-[2200px] mx-auto px-4">
            <div className="flex-1 img translate-y-10 opacity-0">
                <img className="w-full object-cover" src="https://www.niallscullyphotography.com/wp-content/uploads/2019/03/Danielle-2.jpg"></img>
            </div>
            <div className="flex-1 form mt-8 md:mt-0 translate-y-10 opacity-0 flex flex-col gap-4 md:gap-8 md:p-10">
                <h1 className="text-4xl md:text-6xl  leading-relaxed">Get In Touch!</h1>
                <p className="text-md md:text-2xl leading-relaxed fontcharm">Thank you so much for your interest in my photography, I would love to hear more about your big day! I am located in Wicklow Ireland, but travel worldwide for weddings. I am excited to hear about your plans and will gladly travel to wherever your adventure takes us. I reply to emails within 24 hours. If you do not hear back from me within that timeframe, please check your spam folder and/or email me directly. Thank you!</p>
                <Separator></Separator>
                <div>
                    <h3 className="my-2 text-xl fontcharm">Your Name</h3>
                    <Input value={name} onChange={(e) => setName(e.target.value)}></Input>
                </div>
                <div>
                    <h3 className="my-2 text-xl fontcharm">Phone Number</h3>
                    <Input value={number} onChange={(e) => setNumber(e.target.value)} type="number"></Input>
                </div>
                <div>
                    <h3 className="my-2 text-xl fontcharm">Email</h3>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email"></Input>
                </div>
                <div>
                    <h3 className="my-2 text-xl fontcharm">Wedding Date & Venue</h3>
                    <Input value={date} onChange={(e) => setDate(e.target.value)} type="date"></Input>
                </div>
                <div className="flex-1">
                    <h3 className="my-2  text-xl fontcharm">More details</h3>
                    <Textarea value={message} onChange={(e) => setMessage(e.target.value)} className="h-[200px] text-lg"/>
                </div>
                <div className="flex-1">
                    <Button onClick={addOrder} size={'lg'} className="text-xl shadow-lg flex gap-2">Send <Send/></Button>
                </div>
            </div>
        </div>

        <div className="max-w-[1500px] mx-auto">
            <Footer />
        </div>

    </div>
  )
}

export default Page