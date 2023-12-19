import React from 'react'
import ImageDashboard from './ImageDashboard'

type Props = {}

function DashboardExperiencePage({}: Props) {
  return (
    <div className='flex flex-col gap-4 pb-8'>
        <h1 className='text-4xl my-8'>Experience Hero</h1>
        <div className='w-fit mb-8 h-[300px] relative aspect-[4/2]' >
            <ImageDashboard width={400} height={300} section={"experiencePage"} image={"hero"}/>
        </div>
        <h1 className='text-4xl my-8'>Steps</h1>
        <div className='flex gap-4'>
            <div className='w-[300px] aspect-[2/3] mb-8 relative'>
                <ImageDashboard width={300} height={400} section={"experiencePage"} image={"step1"}/>
                <h1 className='text-2xl py-2'>Step 1</h1>
            </div>
            <div className='w-[300px] aspect-[2/3] mb-8 relative'>
                <ImageDashboard width={300} height={400} section={"experiencePage"} image={"step2"}/>
                <h1 className='text-2xl py-2'>Step 2</h1>
            </div>
        </div>
        <h1 className='text-4xl my-8'>Guide Request Image</h1>
        <div className='w-[300px] aspect-[2/3] mb-8 relative'>
            <ImageDashboard width={300} height={400} section={"experiencePage"} image={"guide"}/>
        </div>
    </div>
  )
}

export default DashboardExperiencePage