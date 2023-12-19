import React from 'react'
import ImageDashboard from './ImageDashboard'

type Props = {}

function DashboardContactPage({}: Props) {
  return (
    <div className='flex flex-col gap-4 pb-8'>
        <h1 className='text-4xl my-8'>Contact Image</h1>
        <div className='w-fit mb-8 h-[300px] relative aspect-[3/4]' >
            <ImageDashboard width={300} height={400} section={"contactPage"} image={"hero"}/>
        </div>
    </div>
  )
}

export default DashboardContactPage