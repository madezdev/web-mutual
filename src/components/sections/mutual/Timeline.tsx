import Image from 'next/image'
import React from 'react'

export const Timeline = () => {
  return (
    <article className='relative flex flex-col items-center justify-center gap-8 px-4 md:px-[4vw] lg:pb-10 h-full'>
      <div className='pt-2'>
        <h2 className='text-colorT font-avantXlt text-title 2xl:text-maxtitle'>
          Nuestra <span>historía</span>
        </h2>
      </div>
      <div
        id='card-service'
        className='relative grid grid-cols-1 lg:grid-cols-12 gap-4 h-full p-4 bg-colorAcento/20 rounded-xl shadow-xl'>
        <div className='absolute -top-7 right-7 lg:relative lg:top-0 lg:left-0 lg:col-span-1 lg:col-start-1 lg:row-span-2 2xl:row-span-3 lg:row-start-1 lg:self-center'>
          <p className='text-colorT font-avantBk text-[2.5rem] 2xl:text-[3.5rem] lg:-rotate-90 xl:translate-y-0 2xl:translate-y-3'>
            2009
          </p>
        </div>
        <div className='lg:col-span-6 lg:row-start-1 lg:col-start-3 lg:self-center'>
          <p className='text-colorW text-[2rem] lg:text-title 2xl:text-[2.7rem] font-avantXlt text-center lg:text-left'>
            Creación de la Consultora Mutual.
          </p>
        </div>
        <div className='lg:col-span-6 lg:col-start-3 lg:row-start-2 2xl:row-span-2 lg:self-center '>
          <p className='font-avantBk text-[16px] md:text-maxparrafo 2xl:text-[22px] font-semibold tracking-widest text-colorAcento self-end antialiased'>
            Con oficinas establecidas en Villa Adelina, provincia de Buenos
            Aires, se aprobaron los primeros reglamentos, marcando el comienzo
            de nuestras actividades.
          </p>
        </div>
        <div className='lg:col-span-3 lg:col-start-10 row-start-3 lg:row-start-1 2xl:row-start-1  lg:row-span-2 2xl:row-span-3 lg:self-center'>
          <Image
            src='/images/home/electro.webp'
            alt='consultora'
            width={1000}
            height={600}
            className='rounded-xl object-cover object-center'
          />
        </div>
      </div>

      <div 
        id='card-service'
        className='relative grid grid-cols-1 lg:grid-cols-12 gap-4 h-full p-4 bg-colorAcento/20 rounded-xl shadow-xl'>
        <div className='absolute -top-7 right-7 lg:relative lg:top-0 lg:left-0 lg:col-span-1 lg:col-start-12 2xl:row-span-3 lg:row-start-1 self-center'>
          <p className='text-colorS font-avantBk text-[2.5rem] 2xl:text-[3.5rem] lg:-rotate-90 lg:translate-y-40 xl:translate-y-28 2xl:translate-y-1'>
            2022
          </p>
        </div>
        <div className='lg:col-span-6 lg:col-start-5 lg:row-start-1 lg:self-center'>
          <p className='text-colorW text-[2rem] lg:text-title 2xl:text-[2.7rem] font-avantXlt text-center lg:text-left'>
            Asumen nuevas autoridades.
          </p>
        </div>
        <div className='lg:col-span-6 lg:col-start-5 lg:row-start-2 2xl:row-span-2 lg:self-center'>
          <p className='font-avantBk text-[16px] md:text-maxparrafo 2xl:text-[22px] font-semibold tracking-widest text-colorAcento self-end antialiased'>
            Se han designado nuevas autoridades en los órganos de dirección y
            fiscalización. Además, se ha realizado el cambio de sede al Parque
            Industrial Buen Aire I, ubicado en el municipio de Moreno, provincia
            de Buenos Aires. También se han firmado varios convenios
            inter-mutuales.
          </p>
        </div>
        <div className='row-start-3 lg:col-start-1 lg:col-span-3 lg:row-span-2 2xl:row-start-1 2xl:row-span-3 self-center'>
          <Image
            src='/images/home/electro.webp'
            alt='consultora'
            width={1000}
            height={600}
            className='rounded-xl object-cover object-center'
          />
        </div>
      </div>

      <div
        id='card-service' 
        className='relative grid grid-cols-1 lg:grid-cols-12 gap-4 h-full p-4 bg-colorAcento/20 rounded-xl shadow-xl'>
        <div className='absolute -top-7 right-7 lg:relative lg:top-0 lg:left-0 lg:col-span-1 lg:col-start-1 lg:row-span-2 2xl:row-span-3 lg:row-start-1 lg:self-center'>
          <p className='text-colorT font-avantBk text-[2.5rem] 2xl:text-[3.5rem] lg:-rotate-90 xl:translate-y-0 2xl:translate-y-3'>
            2023
          </p>
        </div>
        <div className='lg:col-span-6 lg:row-start-1 lg:col-start-3 lg:self-center'>
          <p className='text-colorW text-[2rem] lg:text-title 2xl:text-[2.7rem] font-avantXlt text-center lg:text-left'>
            Firma de convenios.
          </p>
        </div>
        <div className='lg:col-span-6 lg:col-start-3 lg:row-start-2 2xl:row-span-2 lg:self-center '>
          <p className='font-avantBk text-[16px] md:text-maxparrafo 2xl:text-[22px] font-semibold tracking-widest text-colorAcento self-end antialiased'>
            Hemos firmado varios convenios con empresas del sector alimenticio,
            lo que nos permitirá ofrecer productos de alta calidad a precios
            competitivos. Además, hemos inaugurado una tienda de proveeduría
            exclusiva para nuestros asociados, donde podrán acceder a una amplia
            gama de productos esenciales.
          </p>
        </div>
        <div className='lg:col-span-3 lg:col-start-10 row-start-3 lg:row-start-1 2xl:row-start-1  lg:row-span-2 2xl:row-span-3 lg:self-center'>
          <Image
            src='/images/home/electro.webp'
            alt='consultora'
            width={1000}
            height={600}
            className='rounded-xl object-cover object-center'
          />
        </div>
      </div>

      <div
        id='card-service' 
        className='relative grid grid-cols-1 lg:grid-cols-12 gap-4 h-full p-4 bg-colorAcento/20 rounded-xl shadow-xl'>
        <div className='absolute -top-7 right-7 lg:relative lg:top-0 lg:left-0 lg:col-span-1 lg:col-start-12 2xl:row-span-3 lg:row-start-1 self-center'>
          <p className='text-colorS font-avantBk text-[2.5rem] 2xl:text-[3.5rem] lg:-rotate-90 lg:translate-y-40 xl:translate-y-28 2xl:translate-y-1'>
            2024
          </p>
        </div>
        <div className='lg:col-span-6 lg:col-start-5 lg:row-start-1 lg:self-center'>
          <p className='text-colorW text-[2rem] lg:text-title 2xl:text-[2.7rem] font-avantXlt text-center lg:text-left'>
            Nuevo centro logístico.
          </p>
        </div>
        <div className='lg:col-span-6 lg:col-start-5 lg:row-start-2 2xl:row-span-2 lg:self-center'>
          <p className='font-avantBk text-[16px] md:text-maxparrafo 2xl:text-[22px] font-semibold tracking-widest text-colorAcento self-end antialiased'>
            Hemos inaugurado un nuevo centro logístico en el Parque Industrial
            Buen Aire I, que nos permitirá optimizar la distribución de
            productos y reducir los tiempos de entrega. Además, hemos ampliado
            nuestro red de distribución lo que nos permitirá llegar a más
            asociados en todo el país.
          </p>
        </div>
        <div className='row-start-3 lg:col-start-1 lg:col-span-3 lg:row-span-2 2xl:row-start-1 2xl:row-span-3 self-center'>
          <Image
            src='/images/home/electro.webp'
            alt='consultora'
            width={1000}
            height={600}
            className='rounded-xl object-cover object-center'
          />
        </div>
      </div>
    </article>
  )
}
