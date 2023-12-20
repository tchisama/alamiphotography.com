import TabBar from '@/components/TabBar'
import { Separator } from '@/components/ui/separator'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className='container'>
            <h1 className='text-5xl my-8 '>Texts and Languages Controller</h1>
            <TabBar tabs={[
                {title:"home",content:<HomePage/>},
            ]}>
            </TabBar>
    </div>
  )
}

const HomePage = () => {
    return (
        <div>
            <Section 
                title='Hello section'
                content={
                [
                    {
                        title:'Hello Section Title',
                        section:'hello',
                        text:'Hello 1'
                    },
                    {
                        title:'Hello Section Content',
                        section:'hello',
                        text:'Hello 2'
                    }
                ]
                }
            ></Section>
            <Separator/>
        </div>
    )
}

const Section = (
    {
        title,
        content
    }:
    {
        title:string,
        content:
            {
                title:string,
                section:string,
                text:string
            }[]
    }
) => {
    return (
        <div>
            <h1 className='text-5xl my-8'>{title}</h1>
            <div>
                {
                    content.map((item,index) => {
                        return (
                            <div key={index}>
                                <h1 className='text-2xl font-bold'>{item.title}</h1>
                                <p>{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default page