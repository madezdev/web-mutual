import { Video } from "@/components/ui"


export const HeroHomePage = () => {
  return (
    <section className=' relative lg:h-[45rem]'>
      <div className='absolute bottom-0 h-full w-full bg-gradient-to-b from-[#151836]/10 via-[#151836]/0 to-[#151836]/80'></div>
      <div className='w-full '>
        <Video path='/video/woman.mp4'/>
      </div>
      <div className='absolute inset-0 flex flex-col justify-center items-center text-colorW animate-fade animate-once animate-duration-500 animate-delay-700 animate-ease-in'>
        <div className='flex flex-col justify-center items-center text-center mt-4 md:mt-12'>
          <p className='font-avantMd text-title lg:text-maxtitle'>Bienvenidos a</p>
          <h1 className='text-colorS font-avantBk uppercase text-title lg:text-maxtitle'>
            Consultora{' '}
            <span className='text-colorP font-avantBold shadow-white z-20'>Mutual</span>
          </h1>
          <p className='font-avantMd lg:text-title text-colorT animate-pulsing animate-delay-700'>
            Servicios que mejoran tu calidad de vida.
          </p>
        </div>
      </div>
    </section>
  )
}
