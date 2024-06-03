import Image from 'next/image'
import React from 'react'

export const ValoresMutualismo = () => {
  return (
    <section className='py-8 mx-[4vw] flex flex-col items-center gap-6 lg:flex-row-reverse'>
      <div className='flex flex-wrap gap-x-1 lg:block'>
        <div>
          <h3 className=' text-colorW text-title font-avantXlt'>
            En la <span className='font-avantBk text-colorW'>Asociación</span>
          </h3>
        </div>
        <div>
          <h4 className='text-colorW text-title font-avantXlt'>
            <span className='font-avantBk text-colorS'>CONSULTORA</span>{' '}
            <span className='font-avantDem text-colorT'>MUTUAL</span> promovemos
          </h4>
        </div>
        <div>
          <h5 className='text-colorW text-title font-avantXlt'>
            los <span className='font-avantBk text-colorS'>VALORES</span>
          </h5>
        </div>
        <div>
          <h6 className='text-colorW text-title font-avantXlt'>
            asociados al{' '}
            <span className='font-avantBk text-colorW'>Mutualismo</span>.
          </h6>
        </div>
      </div>
      <div>
        <Image
          src='/images/mutual/valores.png'
          alt='Valores del mutualismo'
          width={1200}
          height={800}
          className='w-[60rem]'
        />
      </div>
    </section>
  )
}
