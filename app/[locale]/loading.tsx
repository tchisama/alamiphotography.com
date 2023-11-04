import ButtonScrollUpProvider from '@/components/ButtonScrollUpProvider'
import Loading from '@/components/Loading'
import { Loader } from 'lucide-react'
import React from 'react'

function loading() {
  return (
      <div className='flex items-center h-screen justify-center gap-2'>
        <Loading/>
      </div>
  )
}

export default loading