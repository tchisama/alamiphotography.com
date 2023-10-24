import DashboardNavbar from '@/components/DashboardNavbar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div className='flex bg-primary min-h-screen '>
        <DashboardNavbar/>
        <div className='flex-1 m-2 bg-white rounded-xl'>
            {children}
        </div>
    </div>
  )
}

export default layout