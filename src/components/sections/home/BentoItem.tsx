import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ButtonCta } from '@/components/ui'

interface Props {
  image: string
  title: string
  subtitle?: string
  hrf?: string
  cta: string
  className?: string
}

export const BentoItem = ({ image, title, subtitle, cta, hrf, className }: Props) => {
  return (
    <article
      className={`relative col-span-5 rounded-xl backdrop-blur-md shadow-inner shadow-white/10 overflow-hidden group ${className}`}>
     <div className='absolute bottom-0 h-full w-full bg-gradient-to-b from-[#151836]/20 via-[#151836]/30 to-[#151836]/80'></div>
      <Image
        src={image}
        alt='bento'
        width={920}
        height={640}
        className='background transition-scale absolute bottom-0 left-0 top-0
          -z-10 h-full w-full bg-blue-950 object-cover object-top 
          bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110'
      />

      <div className='relative z-20 flex h-full select-none flex-col justify-end gap-1 p-4  md:p-6'>
        <h2 className='mb-4 text-balance font-avantDem text-subtitle uppercase text-colorW tracking-widest'>
          {title}
        </h2>
        {subtitle && (
          <h3 className='-mt-4 mb-4 font-avantMd text-maxparrafo font-semibold tracking-widest text-colorW '>
            {subtitle}
          </h3>
        )}
        <div>
          {hrf && (
            <Link href={hrf}>
              <ButtonCta
                title={cta}
                color='secondary'
              />
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
