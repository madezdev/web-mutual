import { HeroMutalPage, Timeline } from '@/components'
import { ValoresMutualismo } from '@/components/sections/mutual/ValoresMutualismo'

export default function MutualPage() {
  return (
    <div className='bg-colorP/80 min-h-[100dvh]'>
      <HeroMutalPage />
      <div className='mt-10 lg:animate-fade-up lg:animate-delay-1000'>
        <p className='font-avantBk text-[16px] lg:text-[18px] 2xl:text-[20px] font-semibold tracking-widest text-colorAcento lg:mt-0 self-end antialiased mx-[4vw]'>
          Nuestro <span className='font-avantMd text-colorS'>PROPÓSITO</span> es facilitar a nuestros asociados de mayores
          posibilidades de progreso, considerando que el ser humano tiene
          múltiples facetas en la vida: personal, familiar, espiritual, etc., y
          que cada una de dichas facetas tienen necesidades que deben atenderse
          para que la persona logre un crecimiento armónico. Para ello,
          brindamos servicios en beneficio de los asiciados mutualistas en un
          marco solidario de igualdad de oportunidades y, ante el surgimiento de
          nuevas necesidades, buscamos la incorporación de nuevas prestaciones
          que las satisfagan.
        </p>
      </div>
      <div className='pt-[40px]'>
        <Timeline />
      </div>

      <div className="App">
      <ValoresMutualismo />
    </div>
    </div>
  )
}
