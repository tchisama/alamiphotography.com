import React from 'react'
import { Button } from './ui/button'

type Props = {}

function HelloSection({}: Props) {
  return (
    <div className='flex gap-6 my-20 flex-col-reverse md:flex-row items-center justify-between'>
        <div className='flex  flex-col items-start gap-8'>
            <h1 className='text-4xl md:text-7xl font-light fontroman'>
                Hello!<br/>
                Thanks for stopping by
            </h1>
            <p className='text-md md:text-3xl fontcharm leading-relaxed md:max-w-4xl'>
                    A fine art film and digital wedding photographer based out Wicklow, Ireland, I am someone who takes great pride in their work. A fan of superheroes and zombie flicks, I enjoy lazy Sundays, the calm, the relaxation, the way they seem to breeze on by.
                    <br/>    
                    Always quick with a joke and ready to get down to business, I knows how to be productive and have fun at the same time. I am a family man whose wife and kids are at the centre of my world and inspiration for everyday life.
                    <br/>    
                    Please take a look around the website, and I hope we connect soon!
            </p>
            <Button className='' size={'lg'}>Learn More</Button>
        </div>
        <img className='espect-[3/4] w-full max-h-[50vh] md:max-h-[70vh] max-w-[500px] object-cover  rounded-lg ' src="https://www.niallscullyphotography.com/wp-content/uploads/2022/12/Me-3-596x894.jpg"></img>
    </div>
  )
}

export default HelloSection