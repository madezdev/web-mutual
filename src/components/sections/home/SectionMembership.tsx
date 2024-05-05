import Image from 'next/image'
import Link from 'next/link'
import { ButtonCta } from '@/components/ui'

export const SectionMembership = () => {
  return (
    <section>
      <div
        className='relative backdrop-blur-md  overflow-hidden group h-[20rem] lg:h-[40rem]'
        >
        <div className='absolute z-10 top-0 h-full w-full bg-gradient-to-t from-[#151836]/0 via-[#151836]/40 to-[#151836]/60'></div>
        <Image
          src='/images/home/family-cta.webp'
          alt='Asociate a Consultora Mutual y obten beneficios.'
          width={1920}
          height={640}
          className='relative object-cover object-center w-full h-full  '
        />
        <div id='card-service' className='absolute top-0 left-0 z-20 mx-auto flex flex-col items-center justify-center lg:justify-around w-full h-full'>
          <div>
            <h2  className='font-avantMd text-subtitle lg:text-[3.8rem] text-center tracking-widest  text-colorT'>
              ¿Te gustaría tener nuestros beneficios?
            </h2>
            <p className='text-center text-colorW text-subtitle lg:text-[2.7rem] mt-2 font-avantMd'>
              Unite a <span className='text-colorS font-avantBk'>Consultora</span> <span className='text-colorP font-avantBold'>Mutual</span>  y <br></br> obtené descuentos y beneficios.
            </p>
          </div>
          <div className='mt-20'>
            <Link href='/beneficios-mutual'>
              <ButtonCta
                title='Beneficios Mutual'
                color='primary'>
              </ButtonCta>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
