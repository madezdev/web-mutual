import { ButtonCta, ScrollInifite } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const SectionValuesMutual = () => {
  return (
    <article className='bg-colorP'>
      <article
        id='card-service'
        className='flex flex-col items-center justify-between gap-4 w-full '>
        <Image
          src={'/images/logo/mutual-completo-blanco.png'}
          alt='Mutual'
          width={150}
          height={150}
          className='mt-5'
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
            color='primary'
            title='Nuestros valores'
          />
        </Link>
      </article>
      <ScrollInifite
        className='text-colorW uppercase font-avantDem w-full'
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
    </article>
  )
}
