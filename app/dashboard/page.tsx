import DashboardNavbar from '@/components/DashboardNavbar'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className='flex'>
        <DashboardNavbar/>
        <h3>contant</h3>
    </div>
  )
}

export default page