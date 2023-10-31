import React from 'react'
import { Button } from './ui/button';
import { Check, Edit2Icon, Plus, Replace, X } from 'lucide-react';
import { Separator } from './ui/separator';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
type Props = {}

const images = [
  "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1439261/pexels-photo-1439261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1439261/pexels-photo-1439261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const DashboardAboutPage = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 pb-8'>
        <HeroSection/>
        <Separator/>
        <WhatClientSays/>
        <QandA/>
    </div>
  )
}


const HeroSection = () => {
    return(
        <div>
            <h1 className='text-4xl my-4'>Hero section image</h1>
            <div className='flex gap-6'>
                <div className='w-fit mb-8 h-[300px] relative aspect-[4/2]' >
                    <img className='w-full h-full object-cover' src={"https://www.niallscullyphotography.com/wp-content/uploads/2019/04/Cliffs-18-of-105.jpg"} alt="" />
                    <Button size={"icon"} variant={"outline"} className='absolute right-0 top-0'><Replace/></Button>
                </div>
            </div>
        </div>
    )
}
const reviews = [
    {
        img: "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Niall",
        subtitle: "Photographer",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcosit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcosit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcoleo."
    },
    {
        img: "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Niall",
        subtitle: "Photographer",
        review: "Lorem ipsum dolor ssit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcosit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcosit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcoit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    }
]
const WhatClientSays = () => {
    return(
        <div>
            <h1 className='text-4xl my-8'>what client says</h1>
            <div className='flex flex-col items-start'>
                <Button className='text-lg gap-2 flex my-8'>Add review <Plus/></Button>
                {
                    reviews.map((review, index) => (
                        <>
                        <div className={'my-4 flex-col md:flex-row relative flex gap-2 '} key={index}>
                            <img className={'md:w-[250px]'} src={review.img} alt="" />
                            <div className={'min-w-[250px] p-2 md:p-4'}>
                                <h2 className='text-4xl fontroman md:text-5xl'>{review.name}</h2>
                                <h3 className='text-xl md:text-2xl fontcharm text-muted-foreground'>{review.subtitle}</h3>
                            </div>
                            <p className='text-md md:text-2xl fontcharm'>{review.review}</p>
                            <Button size={"icon"} variant={"outline"} className='absolute left-0 top-0'><Edit2Icon/></Button>
                        </div>
                        <Separator/>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

const qanda = [
    {
        id: "q1",
        question: "Is it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
        id: "q2",
        question: "Is it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
        id: "q3",
        question: "Is it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    }
]

const QandA = (props: Props) => {
  return (
    <div className='py-10'>
        <h1 className='py-8 text-4xl '>Frequently Asked Questions</h1>
        <Button className='text-lg gap-2 flex my-8'>Add question <Plus/></Button>
        <Accordion type="single" collapsible>
            {
                qanda.map((item) => (
                <AccordionItem value={item.id} key={item.id}>
                    <AccordionTrigger className='text-xl md:text-3xl '>{item.question}</AccordionTrigger>
                    <AccordionContent className=' md:text-xl '>{item.answer}</AccordionContent>
                </AccordionItem>
                ))
            }
        </Accordion>

    </div>
  )
}

export default DashboardAboutPage