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
      </div>
  )
}
