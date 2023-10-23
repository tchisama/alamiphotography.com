import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
type Props = {}
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
        <h1 className='py-10 text-2xl md:text-5xl fontroman'>Frequently Asked Questions</h1>
        <Accordion type="single" collapsible>
            {
                qanda.map((item) => (
                <AccordionItem value={item.id} key={item.id}>
                    <AccordionTrigger className='text-xl md:text-3xl fontroman'>{item.question}</AccordionTrigger>
                    <AccordionContent className=' md:text-xl fontcharm'>{item.answer}</AccordionContent>
                </AccordionItem>
                ))
            }
        </Accordion>

    </div>
  )
}

export default QandA