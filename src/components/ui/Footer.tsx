import Image from 'next/image'
import { FacebookIcon, InstagramIcon, LinkedinIcon, LocationIcon, MailIcon, WhatsappIcon } from '../icons'


const servicios = [
  {
    title: 'Turismo',
    path: '/turismo',
  },
  {
    title: 'Tienda',
    path: '/tienda',
  },
  {
    title: 'Subsidios',
    path: '/subsidios',
  },
  {
    title: 'Ayuda económica',
    path: '/ayuda-economica',
  },
  {
    title: 'Cobertura de salud',
    path: '/cobertura-medica',
  },
  {
    title: 'Servicios de cobranza y pagos',
    path: '/cobranza-pagos',
  },
  {
    title: 'Servicios de consultoría para empresas',
    path: '/consultoria',
  },
  {
    title: 'Asesoramiento contable para empresas',
    path: '/asesoria-contable',
  },
]
const mutual = [
  {
    title: 'Quienes somos',
    path: '/mutual',
  },
  {
    title: 'Blog',
    path: '/blog',  
  },
  {
    title: 'Asociate',
    path: '/asociate',
  },
  {
    title: 'Contacto',
    path: '/contacto',
  },
]

export const Footer = () => {
  return (
    <footer className='font-avantXlt text-colorW bg-colorAcento min-w-full overflow-hidden'>
      <div className='mx-[4vw] lg:mx-[8vw] pt-4'>
        <div className='flex flex-col gap-4 md:gap-0 md:flex-row md:flex-wrap justify-between'>
          <div className='flex md:flex-col items-start justify-between'>
            <Image
              src='/images/logo/mutual-completo.png'
              width={200}
              height={200}
              alt='Consultora Mutual'
              className='basis-1/3 md:basis-auto'
            />
            <div className=''>
              <div>
                <h4 className='font-avantMd text-h6 '>Redes Sociales</h4>
                <div className='flex gap-4 mt-2'>
                  <a
                    href='https://www.facebook.com/AsociacionConsultoraMutual'
                    rel='noreferrer'
                    target='_blank'
                    className='text-[1.8rem] hover:scale-125 transition-all duration-300'>
                    <FacebookIcon/>
                  </a>
                  <a
                    href='https://www.instagram.com/asociacionconsultoramutual'
                    rel='noreferrer'
                    target='_blank'
                    className='text-[1.8rem] hover:scale-125 transition-all duration-300'>
                    <InstagramIcon />
                  </a>
                  <a
                    href='https://ar.linkedin.com/company/asociacion-consultora-mutual'
                    rel='noreferrer'
                    target='_blank'
                    className='text-[1.8rem] hover:scale-125 transition-all duration-300'>
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
              <div className='mt-6'>
                <Image
                  src={'/images/logo/inaes.png '}
                  width={200}
                  height={100}
                  alt={'Instituto Nacional de Asociativismo y Economía Social'}
                  className=''
                />
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <h4 className='font-avantMd text-h6'>Servicios</h4>
            <ul className='w-[22rem]'>
              {servicios.map((servicio, index) => (
                <li
                  key={index}
                  className='py-1 hover:font-avantDem transition-all duration-200 ease-in-out w-full'>
                  <a href={servicio.path}>{servicio.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-4'>
            <h4 className='font-avantMd text-h6'>Mutual</h4>
            <ul className='w-[10rem]'>
              {mutual.map((mut, index) => (
                <li
                  key={index}
                  className='py-1 hover:font-avantDem transition-all duration-200 ease-in-out w-full'>
                  <a href={mut.path}>{mut.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
      <hr className='text-[#388ebc] w-full mt-2' />
      <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-8 py-2 mx-[4vw] lg:mx-[8vw]'>
        <h4 className='font-avantMd text-p pl-1'>Contacto:</h4>
        <div className='flex items-center gap-2'>
          <LocationIcon className='mb-1 text-[1.4rem]' />
          <a
            href='https://www.google.com.ar/maps/place/DOM,+Gral.+Mart%C3%ADn+de+Gainza+801,+B1736+Moreno,+Provincia+de+Buenos+Aires/@-34.620551,-58.7294111,16.15z/data=!4m6!3m5!1s0x95bcbe3b5f90e65b:0x8099e9a8a01cf9f2!8m2!3d-34.6176368!4d-58.723894!16s%2Fg%2F11c5p48rt0?entry=ttu'
            rel='noreferrer'
            target='_blank'
            className={` text-psm  md:basis-auto text-balance`}>
            Martin de Gainza 801, Moreno, Pcia de Buenos Aires
          </a>
        </div>
        <div className='flex items-center gap-2 w-[12rem]'>
          <WhatsappIcon className='mb-1 text-[1.4rem] ' />
          <a
            href='whatsapp:+5491136560533'
            rel='noreferrer'
            className={` text-psm  basis-4/5`}>
            +54 9 11-3656-0533
          </a>
        </div>
        <div className='flex items-center gap-2 w-[19rem]'>
          <MailIcon className='mb-1 text-[1.4rem]' />
          <a href='mailto:' rel='noreferrer' className={` text-psm  basis-4/5`}>
            info@consultoramutual.com.ar
          </a>
        </div>
      </div>
    </footer>
  )
}
