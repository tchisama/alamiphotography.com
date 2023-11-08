import Image from 'next/image'
import React from 'react'

type Props = {}

const WeAreCinematicStyle = (props: Props) => {
  return (
    <div className='flex min-h-[80vh] my-40 scale-[1.04]'>
        <div className='flex flex-1 bg-[rgba(238,227,222,0.64)] py-4 items-center justify-center'>
            <img className='flex-1 max-w-sm aspect-[2/3] my-12' src={"https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Confetti-1st-Edits-8-597x894.jpeg?x15971"} alt="" />
        </div>
        <div className='flex-[2] min-h-[80vh] flex flex-col bg-white justify-between'>
            <h1 className='text-3xl md:text-7xl font-bold translate-y-12 -translate-x-8'>
                    WE ARE CINEMATIC STYLE <br/>
                    STORYTELLERS.
            </h1>
            <p className='text-2xl my-8 p-20 pl-32'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos molestias nam aut voluptatum praesentium est rem nulla obcaecati necessitatibus optio asperiores sequi inventore consectetur similique, fuga architecto earum eveniet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos molestias nam aut voluptatum praesentium est rem nulla obcaecati necessitatibus optio asperiores sequi inventore consectetur similique, fuga architecto earum eveniet.
            </p>
        </div>
    </div>
  )
}

export default WeAreCinematicStyle