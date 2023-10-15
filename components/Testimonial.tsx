import React from 'react'

type Props = {}

function Testimonial({}: Props) {
  return (
    <div>
      <div className='flex'>
        <div className='relative flex-1'>
            <img className='w-full' src='https://www.niallscullyphotography.com/wp-content/uploads/2022/12/Eimear-Niall-277-1-scaled.jpeg?x15971'></img>
            <h1>Testimonials</h1>
        </div>
        <div className='flex-1'></div>
      </div>
    </div>
  )
}

export default Testimonial