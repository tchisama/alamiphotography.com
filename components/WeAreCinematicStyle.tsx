import Image from 'next/image'
import React from 'react'

type Props = {}

const WeAreCinematicStyle = (props: Props) => {
  
  return (
    <div className='flex bg-white md:flex-row flex-col gap-2 md:gap-0 min-h-[80vh] my-20 md:my-40 md:scale-[1.04]'>
        <div className='flex flex-1 md:bg-[rgba(238,227,222,0.64)] md:py-4 items-center justify-center'>
            <Image alt="" width={400} height={600} className='flex-1 bg-[#0002]  max-w-sm aspect-[2/3] my-12' src={"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F672688252%204G0A1918-min.jpg?alt=media&token=1d980f28-2581-4e51-991f-12312d837323"}  />
        </div>
        <div className='flex-[2] md:min-h-[80vh] p-4 flex flex-col bg-white justify-between'>
            <h1 className='text-2xl md:text-7xl tracking-wide md:translate-y-12 md:-translate-x-8'>
                    WE ARE CINEMATIC STYLE <br/>
                    STORYTELLERS.
            </h1>
            <p className='text-lg md:text-2xl my-8  md:p-20 md:pl-32'>
              Every wedding has its own unique sense of style and personality, our cinematic approach is to be non-directorial and more observative while making our clients feel inspired, relaxed, and connected.
              We use the formula of documentary style shooting as it happens so that our works are honest,
              fun, and timeless. We want you to remember your day… not us directing you!
            </p>
        </div>
    </div>
  )
}

export default WeAreCinematicStyle