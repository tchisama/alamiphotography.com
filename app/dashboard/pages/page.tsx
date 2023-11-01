import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardHomePage from '@/components/DashboardHomePage'
import DashboardAboutPage from '@/components/DashboardAboutPage'
import DashboardWeddingPage from '@/components/DashboardWeddingPage'
import DashboardEngagedPage from '@/components/DashbaordEngaged'

type Props = {}

function page({}: Props) {
  return (
    <div className='px-2 '>
        <div className='container mx-auto'>

            <h1 className='text-5xl my-8'>Pages</h1>
            <Tabs defaultValue="home" className="w-full ">
            <TabsList className=' grid grid-cols-4 w-[400px]'>
                <TabsTrigger value="home" className=''>Home</TabsTrigger>
                <TabsTrigger value="about" className=''>About</TabsTrigger>
                <TabsTrigger value="wedding" className=''>Wedding</TabsTrigger>
                <TabsTrigger value="engaged" className=''>Engaged</TabsTrigger>
            </TabsList>
            <TabsContent value="home">
                <DashboardHomePage/>
            </TabsContent>
            <TabsContent value="about">
                <DashboardAboutPage/>
            </TabsContent>
            <TabsContent value="wedding">
                <DashboardWeddingPage/>
            </TabsContent>
            <TabsContent value="engaged">
                <DashboardEngagedPage/>
            </TabsContent>
            </Tabs>

        </div>
    </div>
  )
}

export default page