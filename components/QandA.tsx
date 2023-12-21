"use client"
import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase'
import GetText from './GetText'
  
type Props = {}


const QandA = (props: Props) => {

  type QandAs = {
    answer: string,
    question: string,
    id: string
  }

  const [qandas, setQantas] = useState<QandAs[]>([]);

  useEffect(() => {
    // d from wedding stories
    const unsub = onSnapshot(
      collection(db, "Question and Answers"),( snap) => {
        setQantas(
          snap.docs.map((doc) => ({ ...doc.data() as QandAs, id: doc.id })) as QandAs[]
        );
      }
    )
    return () => unsub()
  },[])

  return (
    <div className='py-10'>
        <h1 className='py-10 text-2xl md:text-5xl '>
          <GetText id="about_frequently_asked_questions_title" />
        </h1>
        <Accordion defaultValue='q1' type="single" collapsible>
            {
                qandas.map((item) => (
                <AccordionItem  value={item.id} key={item.id}>
                    <AccordionTrigger className='text-xl md:text-3xl '>{item.question}</AccordionTrigger>
                    <AccordionContent className=' md:text-xl font-sans'><span className='font-sans'>{item.answer}</span></AccordionContent>
                </AccordionItem>
                ))
            }
        </Accordion>

    </div>
  )
}

export default QandA