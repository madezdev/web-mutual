import { ButtonCta, ScrollInifite } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const SectionMutual = () => {
  return (
    <section className='bg-colorP relative'>
      <article
        id='card-service'
        className='relative flex flex-col items-center justify-between gap-6 w-full pt-6'>
        <Image
          src={'/images/logo/mutual-completo-blanco.png'}
          alt='Mutual'
          width={150}
          height={150}
        />
        <p className='font-avantBk text-center text-colorW text-subtitle mx-[4vw]'>
          Nuestro propósito es ofrecer oportunidades integrales de desarrollo a
          nuestros asociados, promoviendo la igualdad de oportunidades y
          adaptándonos constantemente para satisfacer nuevas necesidades
          emergentes.
        </p>
        <Link
          href='/valores'
          className=''>
          <ButtonCta
            color='secondary'
            title='Nuestros valores'
          />
        </Link>
      </article>
      <div className='flex items-center justify-center'>
        <ScrollInifite
          className='text-colorT uppercase font-avantDem text-[20px]'
          dataSpeed='fast'
          data={[
            'Solidaridad',
            'Cooperación',
            'Democracia',
            'Responsabilidad',
            'Creatividad',
            'Respecto',
            'Transparencia',
            'Trabajo en equipo',
            'Compromiso social',
            'Inclución',
          ]}
        />
      </div>
    </section>
  )
}
