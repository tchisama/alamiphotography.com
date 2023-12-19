import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardHomePage from '@/components/DashboardHomePage'
import DashboardAboutPage from '@/components/DashboardAboutPage'
import DashboardWeddingPage from '@/components/DashboardWeddingPage'
import DashboardEngagedPage from '@/components/DashbaordEngaged'

type Props = {}

function page({}: Props) {
  return (
    <div className='px-2 relative'>
        <div className='container mx-auto '>

            <h1 className='text-5xl my-8 '>Static Media Controller</h1>
            <Tabs defaultValue="home" className="w-full ">
                <TabsList className='flex w-full h-fit p-2 sticky -top-2 justify-start z-50 my-8 font-sans'>
                    <TabsTrigger value="home" className='py-4 flex-1 max-w-xs'>Home</TabsTrigger>
                    <TabsTrigger value="about" className='py-4 flex-1 max-w-xs'>About</TabsTrigger>
                    <TabsTrigger value="about" className='py-4 flex-1 max-w-xs'>Contact</TabsTrigger>
                </TabsList>
                <TabsContent value="home">
                    <DashboardHomePage/>
                </TabsContent>
                <TabsContent value="about">
                    <DashboardAboutPage/>
                </TabsContent>
                </Tabs>

        </div>
    </div>
  )
}

export default page