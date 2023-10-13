import ImageSlider from '@/components/ImageSlider'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
      <div className='px-6'>
        <div className='max-w-[1500px] mx-auto'>
          <Navbar/>
        </div>
        <div className='my-8 '>
          <ImageSlider/>
        </div>
        <div className='max-w-[1500px] mx-auto flex flex-col items-center'>
          <h1 className='text-4xl font-thin text-center max-w-[800px]'>
              NATURAL & ELEGANT <br/>
              FINE ART WEDDING & LIFESTYLE PHOTOGRAPHER & VIDEOGRAPHER
          </h1>
          <h2 className='text-2xl font-roman  text-center my-4'>Capturing Timeless Beauty & Emotion</h2>
        </div>
      </div>
  )
}
