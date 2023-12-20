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
            <h1 className='text-5xl my-8 '>Content and Languages Controller</h1>
            <TabBar tabs={[
                {title:"home",content:<HomePage/>},
                {title:"about",content:<AboutPage/>},
                {title:"contact",content:<ContactPage/>},
            ]}>
            </TabBar>
    </div>
  )
}

const HomePage = () => {
    return (
        <div className='py-4 space-y-4'>
            <Section 
                title='hero section'
                content={
                [
                    {
                        title:'Title',
                        section:'home_hero_title',
                    },
                    {
                        title:'sub title',
                        section:'home_hero_sub_title',
                    }
                ]
                }
            ></Section>
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
            <Section 
                title='We are cinematic section'
                content={
                [
                    {
                        title:'Title',
                        section:'we_are_cinematic_title',
                    },
                    {
                        title:'Content',
                        section:'we_are_cinematic_content',
                    },
                    {
                        title:'Link',
                        section:'we_are_cinematic_Link',
                    },
                ]
                }
            ></Section>
            <Section 
                title='Last section'
                content={
                [
                    {
                        title:'Testimonials Title',
                        section:'testimonials_title',
                    },
                    {
                        title:'Testimonials SubTitle',
                        section:'testimonials_subtitle',
                    },
                    {
                        title:'Experience Title',
                        section:'experience_title',
                    },
                    {
                        title:'Experience SubTitle',
                        section:'experience_subtitle',
                    },
                ]
                }
            ></Section>
        </div>
    )
}



const AboutPage = () => {
    return(
        <div className='py-4 space-y-4'>
            <Section 
                title='Hero Section'
                content={
                    [
                        {
                            title:'Title',
                            section:'about_hero_title',
                        }
                    ]
                }
            />
            <Section 
                title='Hello section'
                content={
                    [
                        {
                            title:'Title',
                            section:'about_hello_title',
                        },
                        {
                            title:'Content',
                            section:'about_hello_content',
                        }
                    ]
                }
            />
            <Section 
                title='What Clients say section'
                content={
                    [
                        {
                            title:'Title',
                            section:'about_what_clients_say_title',
                        },
                    ]
                }
            />
            <Section 
                title='Check your date section'
                content={
                    [
                        {
                            title:'title',
                            section:'about_check_your_date_title',
                        },
                        {
                            title:'button',
                            section:'about_check_your_date_button',
                        },
                        {
                            title:'paragraph title',
                            section:'about_check_your_date_paragraph_title',
                        },
                        {
                            title:'paragraph content',
                            section:'about_check_your_date_paragraph_content',
                        },
                    ]
                }
            />
            <Section 
                title='Frequently Asked Questions section'
                content={
                    [
                        {
                            title:'title',
                            section:'about_frequently_asked_questions_title',
                        },
                    ]
                }
            />
        </div>
    )
}


const ContactPage = () => {
    return(
        <div className='py-4 space-y-4'>
            <Section 
                title='Contact Section'
                content={
                    [
                        {
                            title:'Title',
                            section:'contact_title',
                        },
                        {
                            title:'Content',
                            section:'contact_content',
                        },
                        {
                            title:'Your Name',
                            section:'contact_your_name',
                        },
                        {
                            title:'Phone Number',
                            section:'contact_your_Phone',
                        },
                        {
                            title:'Email',
                            section:'contact_your_Email',
                        },
                        {
                            title:'wedding date',
                            section:'contact_wedding_date',
                        },
                        {
                            title:'venue ',
                            section:'contact_venue',
                        },
                        {
                            title:'more details ',
                            section:'contact_more_details',
                        },
                        {
                            title:'send button',
                            section:'contact_send_button',
                        },
                    ]
                }
            />
            <Section
                title={"Last Section"}
                content={
                    [
                        {
                            title:'read more',
                            section:'contact_last_read_more',
                        },
                        {
                            title:'about me',
                            section:'contact_last_about_me',
                        },
                        {
                            title:'view',
                            section:'contact_last_view',
                        },{
                            title:'more stories',
                            section:'contact_last_more_stories',
                        },{
                            title:'watch',
                            section:'contact_last_watch',
                        },{
                            title:'more films',
                            section:'contact_last_more_films',
                        }
                    ]
                }
            />
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
                <h1 className='text-5xl capitalize my-8'>{title}</h1>
                <Button className='text-xl font-sans font-medium' size={"icon"} variant={"outline"} onClick={() => setLang(lang === "en" ? "fr" : "en")}>
                    {lang}
                </Button>
            </div>
            <div className='space-y-8 mb-8'>
                {
                    content.map((item,index) => {
                        return (
                            <div key={index} className='relative flex gap-3 flex-col'>
                                <h1 className='text-2xl capitalize font-bold'>{item.title}</h1>
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