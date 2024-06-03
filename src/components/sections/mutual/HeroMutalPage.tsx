import { TitleMutual, Video } from '@/components/ui'
import Image from 'next/image'
import React from 'react'

export const HeroMutalPage = () => {
  return (
    <section className='relative pt-[100px] lg:pt-[140px] xl:pt-[160px] flex flex-col xl:flex-row justify-between h-auto mx-[4vw] gap-4'>
      <article className='relative rounded-xl backdrop-blur-md shadow-inner shadow-white/10 overflow-hidden xl:basis-[60%] lg:animate-fade-right lg:animate-delay-70000 h-auto xl:max-h-[35rem]'>
        {/* <div className='absolute bottom-0 h-full w-full bg-gradient-to-b from-[#151836]/20 via-[#151836]/30 to-[#151836]/80'></div> */}
        <video
          autoPlay
          loop
          muted
          preload='auto'
          className='w-full object-cover object-center h-full'>
          <source
            src='/video/Corporate.mp4'
            type='video/mp4'
          />
          Video no soportado por el navegador - Actualiza tu navegador
        </video>
        {/* <div className='relative z-20 flex h-full select-none flex-col justify-end gap-1 p-4  md:p-6'>
          <h2 className='mb-4 text-balance font-avantDem text-subtitle uppercase tracking-widest'></h2>
        </div> */}
      </article>

      <article className='flex-1 flex flex-col justify-between gap-2 2xl:gap-0 lg:animate-fade-left lg:animate-delay-700 h-full'>
        <div className='flex justify-center items-center rounded-xl backdrop-blur-md'>
          <div className='pt-2'>
            <h1 className='text-colorT font-avantXlt text-title 2xl:text-maxtitle'>Quiénes <span>Somos</span></h1>
          </div>
        </div>
        <p className='font-avantBk text-[16px] lg:text-[18px] 2xl:text-[20px] font-semibold tracking-widest text-colorAcento mt-4 lg:mt-0 self-end antialiased '>
          La Asociación <span className='font-avantMd text-colorS uppercase'>Consultora Mutual</span>, con matrícula I.N.A.E.S N° BA2840, es una asociación mutual de primer grado creada en el año 2009 con el propósito de prestar servicios de calidad a costos accesibles para la mejora de las condiciones de vida de sus asociados y, a su vez, promover y desarrollar los principios de ayuda mutua y solidaridad. La Mutual tiene sus oficinas en el parque industrial Buen Ayre I, municipio de Moreno, provincia de Buenos Aires, República Argentina. Con la finalidad de mejorar la actual oferta de servicios, la Mutual trabaja permanentemente en el desarrollo de convenios con otras entidades, satisfaciendo así las necesidades de sus asociados mutualistas.
        </p>
      </article>
    </section>
  )
}
