import { TitleMutual, Video } from "@/components/ui"
import Image from "next/image"

export const HeroTravelPage = () => {
  return (
    <section className='relative top-0 overflow-x-hidden snap-start'>
      <Video path='/video/cielo.mp4'/>
      <div className='absolute bottom-0 left-0'>
        <Image
          src='/images/travel/hero-travel.png'
          alt='Travel'
          width={1920}
          height={1080}
          className='object-contain object-center hidden lg:block '
        />
        <Image
          src='/images/travel/hero-travel-mobile.png'
          alt='Travel'
          width={1920}
          height={1080}
          className='object-contain object-center lg:hidden'
        />
      </div>
        <div className='z-10 top-[45%] lg:top-[20%] left-0 mt-14 absolute inset-0 flex flex-col  items-center text-colorW animate-zoom-in animate-delay-300'>
          <div className='bg-colorW/30 px-14 rounded-full animate-fade animate-once animate-duration-500 animate-delay-700 animate-ease-in'>
            <TitleMutual
              title='Turismo'
              strong='Mutual' 
              clasName='pt-3'
            />
          </div>
        </div>
    </section>
  )
}
