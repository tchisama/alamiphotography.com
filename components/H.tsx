import React from 'react'

type Props = {
    h: 1 | 2 | 3 | 4 | 5 | 6
    children: React.ReactNode
}

const H = ({h,children}: Props) => {
  return (
    h == 1 ?
    <h1 className={'text-4xl md:text-7xl font-light '}>
        {children}
    </h1>
    : 
    h == 2 ?
    <h2 className='text-3xl md:text-5xl font-light'>
        {children}
    </h2>
    :
    h == 3 ?
    <h3 className='text-2xl md:text-4xl font-light'>
        {children}
    </h3>
    :
    h == 4 ?
    <h4 className='text-xl md:text-3xl font-light'>
        {children}
    </h4>
    :
    h == 5 ?
    <h5 className='text-lg md:text-2xl font-light'>
        {children}
    </h5>
    : <>{children}</>
  )
}

export default H