import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardHomePage from '@/components/DashboardHomePage'

type Props = {}

function page({}: Props) {
  return (
    <div className='px-2 '>
        <div className='container mx-auto'>

            <h1 className='text-5xl my-8'>Pages</h1>
            <Tabs defaultValue="home" className="w-full ">
            <TabsList className=''>
                <TabsTrigger value="home" className=''>Home</TabsTrigger>
                <TabsTrigger value="About" className='                                                                                                                                                                                                          '>About</TabsTrigger>
            </TabsList>
            <TabsContent value="home">
                <DashboardHomePage/>
            </TabsContent>
            <TabsContent value="about">

            </TabsContent>
            </Tabs>

        </div>
    </div>
  )
}

export default page