'use client'
import Link from 'next/link'
import clsx from 'clsx'
import {
  BuildingPeople,
  CalendarDollar,
  CloseIcon,
  HandDollarIcon,
  Hands,
  Health,
  InvoiceDollar,
  Law,
  LineDollar,
  MailIcon,
  ReadIcon,
  ShopIcon,
  TravelIcon,
} from '../icons'
import { useUIStore } from '@/store/ui/ui-store'

const service = [
  {
    title: 'Turismo',
    paht: '/servicios/turismo',
    icon: (
      <TravelIcon
        width={24}
        height={24}
        color='#fff'
      />
    ),
  },
  {
    title: 'Tienda',
    paht: '/servicios/tienda',
    icon: (
      <ShopIcon
        width={24}
        height={24}
        color='#fff'
      />
    ),
  },
  {
    title: 'Ayuda Económica',
    paht: '/servicios/ayuda-economica',
    icon: (
      <LineDollar
        width={24}
        height={24}
        color='#fff'
      />
    ),
  },
  {
    title: 'Cobertura Médica',
    paht: '/servicios/cobertura-medica',
    icon: (
      <Health
        width={24}
        height={24}
        color='#fff'
      />
    ),
  },
  {
    title: 'Subsidios',
    paht: '/servicios/subsidios',
    icon: (
      <HandDollarIcon
        width={24}
        height={24}
        color='#fff'
      />
    ),
  },
  {
    title: 'Cobranzas y Pagos',
    paht: '/servicios/cobranza-pagos',
    icon: (
      <InvoiceDollar
        width={24}
        height={24}
        color='#fff'
      />
    ),
  },
  {
    title: 'Consultoría',
    paht: '/servicios/consultoria',
    icon: (
      <BuildingPeople
        width={24}
        height={24}
        color='#fff'
      />
    ),
  },
  {
    title: 'Asesoramiento Contable',
    paht: '/servicios/asesoria-contable',
    icon: (
      <CalendarDollar
        width={24}
        height={24}
        color='#fff'
      />
    ),
  },
  {
    title: 'Asesoramiento Jurídico',
    paht: '/servicios/asesoria-juridica',
    icon: (
      <Law
        width={24}
        height={24}
        color='#fff'
      />
    ),
  },
]

const mutual = [
  {
    title: 'Mutual',
    paht: '/mutual',
    icon: 'icon',
  },
  {
    title: 'Blog',
    paht: '/blog',
    icon: (
      <ReadIcon
        width='24'
        height='24'
        color='#fff'
      />
    ),
  },
  {
    title: 'Asociate',
    paht: '/asociate',
    icon: (
      <Hands
        width={24}
        height={24}
        color='#fff'
      />
    ),
  },
  {
    title: 'Contacto',
    paht: '/contacto',
    icon: (
      <MailIcon
        width={24}
        height={24}
        color='#fff'
      />
    ),
  },
]

export const Sidebar = () => {
  const closeSideMenu = useUIStore((state) => state.closeSideMenu)
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen)

  return (
    <div>
      {isSideMenuOpen && (
        <div className='fixed top-0 left-0 right-0 w-screen h-screen z-10 bg-colorB opacity-50 ' />
      )}
      {isSideMenuOpen && (
        <div className='fixed top-0 left-0 right-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm' />
      )}

      <div
        className={clsx(
          'fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto transition-transform  bg-colorAcento  border border-[#227aa7] w-[18rem] rounded-r-3xl shadow-lg transform  duration-300 ease-in-out ',
          { 
            '-translate-x-full': !isSideMenuOpen,
          }
        )}>
        <div className='flex justify-end'>
          <button
            className=' rounded-full border border-colorS p-1'
            onClick={() => {
              closeSideMenu()
            }}>
            <CloseIcon
              size={16}
              color='#DA2127'
            />
          </button>
        </div>
        <div className='flex flex-col gap-4 '>
          <h2 className='text-maxparrafo font-avantDem text-colorT'>
            Servicios
          </h2>
          <ul className='flex flex-col gap-4'>
            {service.map((item, index) => (
              <li
                key={index}
                className='flex items-center py-2 gap-2 hover:py-1 hover:px-2 hover:border hover:border-colorT hover:bg-colorT/30 hover:rounded-lg h-[40px] w-full 
                transition-all duration-300 ease-in-out'>
                {item.icon}
                <Link
                  href={item.paht}
                  className='text-colorW'
                  onClick={() => {closeSideMenu()}} 
                  >
                  
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col gap-4 mt-[40px]'>
          <h2 className='text-maxparrafo font-avantDem text-colorT '>Mutual</h2>
          <ul className='flex flex-col gap-4'>
            {mutual.map((item, index) => (
              <li
                key={index}
                className='flex items-center py-2 gap-2 hover:py-1 hover:px-2 hover:border hover:border-colorT hover:bg-colorT/30 hover:rounded-lg h-[40px] w-full 
                transition-all duration-300 ease-in-out'>
                {item.icon}
                <Link
                  href={item.paht}
                  className='text-colorW'>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
