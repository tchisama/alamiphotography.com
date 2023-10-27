import ButtonScrollUpProvider from '@/components/ButtonScrollUpProvider'
import { Loader } from 'lucide-react'
import React from 'react'

function loading() {
  return (
    <ButtonScrollUpProvider>
      <div className='flex items-center h-screen justify-center gap-2'>
          loading <Loader className='animate-spin'/>
      </div>
    </ButtonScrollUpProvider>
  )
}

export default loading