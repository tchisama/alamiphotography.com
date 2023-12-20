"use client"
import ChangeTranslationTo from '@/components/ChangeTranslationTo'
import TabBar from '@/components/TabBar'
import { Button } from '@/components/ui/button'
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
        <div className='py-4 space-y-4'>
            <Section 
                title='Hello section'
                content={
                [
                    {
                        title:'Title',
                        section:'hello_title',
                    },
                    {
                        title:'Content',
                        section:'hello_content',
                    }
                ]
                }
            ></Section>
            <Section 
                title='Check out my work section'
                content={
                [
                    {
                        title:'Title',
                        section:'check_out_my_work_title',
                    },
                    {
                        title:'Weddings',
                        section:'weddings',
                    },
                    {
                        title:'Films',
                        section:'films',
                    },
                    {
                        title:'Engagement',
                        section:'engagement',
                    },
                ]
                }
            ></Section>
            <Section 
                title='Featured On Section'
                content={
                [
                    {
                        title:'Title',
                        section:'featured_on_title',
                    },
                ]
                }
            ></Section>
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
            }[]
    }
) => {
    const [lang,setLang] = React.useState("en")
    return (
        <div >
            <div className='flex gap-4 items-center'>
                <h1 className='text-5xl my-8'>{title}</h1>
                <Button className='text-xl font-sans font-medium' size={"icon"} variant={"outline"} onClick={() => setLang(lang === "en" ? "fr" : "en")}>
                    {lang}
                </Button>
            </div>
            <div className='space-y-8 mb-8'>
                {
                    content.map((item,index) => {
                        return (
                            <div key={index} className='relative flex gap-3 flex-col'>
                                <h1 className='text-2xl font-bold'>{item.title}</h1>
                                <ChangeTranslationTo text={item.section} lang={lang as "en" | "fr"}></ChangeTranslationTo>
                            </div>
                        )
                    })
                }
            </div>
            <Separator/>
        </div>
    )
}

export default page