import DashboardNavbar from '@/components/DashboardNavbar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div className='flex bg-primary h-screen '>
        <DashboardNavbar/>
        <div className='flex-1 m-2 py-2 bg-white  overflow-y-auto'>
            {children}
        </div>
    </div>
  )
}

export default layout