import Link from "next/link"
import { BuildingPeople, CalendarDollar, HandDollarIcon, InvoiceDollar, Law, LineDollar, ShopIcon, TravelIcon } from "@/components/icons"


const service = [
  {
    title: 'turismo',
    descriptionBold: 'Destinos nacionales e internacioles.',
    description:
      'Pensado para que puedas disfrutar de tus vacaciones en familia o con amigos. Con la mejor financiación y en cuotas fijas.',
    icon: (
      <TravelIcon className='w-12 h-12 text-[#1f6a93] group-hover:text-colorS' />
    ),
    path: '/turismo'
  },
  {
    title: 'Tienda',
    descriptionBold: 'La MUTUAL cuenta con una amplia variedad',
    description:
      'de artículos para el hogar y almacén, con precios accesibles y facilidad de entrega a domicilio.',
    icon: (
      <ShopIcon className='w-12 h-12 text-[#1f6a93] group-hover:text-colorS' />
    ),
    path: '/tienda'
  },
  {
    title: 'ayuda económica',
    descriptionBold: 'Préstamos a tasa fija en pesos',
    description:
      'de otorgamiento inmediato y a sola firma.Simple requisitos para acompañarte cuando más lo necesites.',
    icon: (
      <LineDollar className='w-12 h-12 text-[#1f6a93] group-hover:text-colorS' />
    ),
  },
  // {
  //   title: 'salud',
  //   descriptionBold: 'Servicios de urgencias y asistencia médica.',
  //   description:
  //     'Cobertura en el país, las 24hs los 365 días del año.',
  //   icon: (
  //     <Health className='w-12 h-12 text-[#1f6a93] group-hover:text-colorS' />
  //   ),
  //   path: '/salud'
  // },
  {
    title: 'subsidios',
    descriptionBold: 'Es un sistema solidario que brinda ayuda económica a los afiliados',
    description:
      'ante determinadas contingencias que se le puedan presentar.',
    icon: (
      <HandDollarIcon className='w-12 h-12 text-[#1f6a93] group-hover:text-colorS' />
    ),
    path: '/subsidios'
  },
  {
    title: 'servicio de cobranza y pagos',
    descriptionBold: 'Servicio disponible para todos los asociados de la de la Mutual.',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, reiciendis dolorum.',
    icon: (
      <InvoiceDollar className='w-12 h-12 text-[#1f6a93] group-hover:text-colorS' />
    ),
    path: '/cobranza-pagos'
  },
  {
    title: 'consultoria para empresas',
    descriptionBold: 'Servicio disponible para todos los asociados de la de la Mutual.',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, reiciendis dolorum.',
    icon: (
      <BuildingPeople className='w-12 h-12 text-[#1f6a93] group-hover:text-colorS' />
    ),
    path: '/consultoria'
  },
  {
    title: 'Asesoramiento contable',
    descriptionBold: 'Servicio disponible para todos los asociados de la de la Mutual.',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, reiciendis dolorum.',
    icon: (
      <CalendarDollar className='w-12 h-12 text-[#1f6a93] group-hover:text-colorS' />
    ),
    path: '/asesoria-contable'
  },
  {
    title: 'Asesoramiento jurídico',
    descriptionBold: 'Servicio disponible para todos los asociados de la de la Mutual.',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, reiciendis dolorum.',
    icon: (
      <Law className='w-12 h-12 text-[#1f6a93] group-hover:text-colorS' />
    ),
    path: '/asesoria-juridica'
  },
]

export const ServiceCard = () => {
  return (
    <>
      {service?.map((service, index) => (
        <article
          id='card-service'
          key={index}
          >
          <Link href={service.path || ''} scroll={true}
          className='flex flex-col justify-between items-center  transition-all ease-in-out duration-300 cursor-pointer group hover:border-[#92cce7] 
          hover:shadow-lg rounded-xl p-4 shadow-md w-full md:max-w-[22rem] md:h-[17rem] bg-gradient-to-bl from-[#e5f1f9] via-[#c5e3f2] to-[#92cce7]'
          >  

          <div className='group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-300 p-4 text-[#132d3e]'>
            {service.icon}
          </div>
          <div className='font-avantBk group-hover:scale-105 transition-all ease-in-out duration-300 flex flex-col justify-center h-full'>
            <h2 className='text-h6 text-colorP group-hover:text-colorS font-avantMd text-centerp-4 uppercase'>
              {service.title}
            </h2>
            <p className='text-[#227aa7] text-p'>
              <span className='font-avantDem'>{service.descriptionBold}</span>{' '}
              {service.description}
            </p>
          </div>
          </Link>
        </article>

      ))}
    </>
  )
}
