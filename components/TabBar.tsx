"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList } from './ui/tabs'
import { TabsTrigger } from '@radix-ui/react-tabs'

type Props = {tabs:{
    title:string,
    content:React.ReactNode
}[]}

function TabBar({tabs}: Props) {
    const [current,setCurrent] = React.useState(0)
  return (
    <Tabs className='w-full' defaultValue={tabs[0].title}>
        <TabsList className='flex w-full h-fit  p-2 sticky -top-2 justify-start z-50 my-8 font-sans'>
        {
            tabs.map((tab,index) => {
                return(
                    <TabsTrigger onClick={() => setCurrent(index)} className={'py-4 flex-1 max-w-xs capitalize ' + ( tab.title === tabs[current].title ? "bg-primary text-white" : "text-primary")} key={index} value={tab.title}>{tab.title.replace("-"," ")}</TabsTrigger>
                )
            })
        }
        </TabsList>
        {
            tabs.map((tab,index) => {
                return(
                    <TabsContent key={index} value={tab.title}>{tab.content}</TabsContent>
                )
            })
        }
    </Tabs>
  )
}

export default TabBar