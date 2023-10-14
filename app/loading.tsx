import { Loader } from 'lucide-react'
import React from 'react'

function loading() {
  return (
    <div className='flex items-center h-screen justify-center gap-2'>
        loading <Loader className='animate-spin'/>
    </div>
  )
}

export default loading