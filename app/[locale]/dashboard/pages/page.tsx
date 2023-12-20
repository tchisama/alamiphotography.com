import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardHomePage from '@/components/DashboardHomePage'
import DashboardAboutPage from '@/components/DashboardAboutPage'
import DashboardWeddingPage from '@/components/DashboardWeddingPage'
import DashboardEngagedPage from '@/components/DashbaordEngaged'
import DashboardContactPage from '@/components/DashboardContactPage'
import DashboardWeddingFilmsPage from '@/components/DashboardWeddingFilmsPage'
import DashboardExperiencePage from '@/components/DashboardExperiencePage'
import TabBar from '@/components/TabBar'

type Props = {}

function page({}: Props) {
  return (
    <div className='px-8 relative'>
        <div className='container mx-auto '>

            <h1 className='text-5xl my-8 '>Static Media Controller</h1>
            <TabBar tabs={[
                {title:"home",content:<DashboardHomePage/>},
                {title:"about",content:<DashboardAboutPage/>},
                {title:"contact",content:<DashboardContactPage/>},
                {title:"wedding-films",content:<DashboardWeddingFilmsPage/>},
                {title:"experience",content:<DashboardExperiencePage/>},
            ]}>
            </TabBar>
        </div>
    </div>
  )
}

export default page