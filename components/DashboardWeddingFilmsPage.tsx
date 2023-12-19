import React from 'react'
import ImageDashboard from './ImageDashboard'

type Props = {}

function DashboardWeddingFilmsPage({}: Props) {
  return (
    <div className='flex flex-col gap-4 pb-8'>
        <h1 className='text-4xl my-8'>Contact Image</h1>
        <div className='w-fit mb-8 h-[300px] relative aspect-[4/2]' >
            <ImageDashboard width={400} height={300} section={"weddingFilms"} image={"hero"}/>
        </div>
    </div>
  )
}

export default DashboardWeddingFilmsPage