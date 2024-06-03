'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MenuIcon } from '../icons'
import { useUIStore } from '@/store/ui/ui-store'

export const Navigation = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu)
  return (
    <div className='absolute  top-0 lg:top-8 w-full py-2 z-50 content animate-fade-down animate-duration-500 animate-delay-[400ms] animate-ease-in'>
      <div
        className='flex items-center justify-between gap-16 mx-[2vw] md:mx-[4vw] lg:backdrop-blur-lg lg:bg-colorW/30 lg:px-14 lg:rounded-full'
        id='header-nav'>
        <div className='w-[5rem] py-2 lg:w-auto'>
          <Link href={'/'}>
            <Image
              src='/images/logo/mutual-completo.png'
              width={100}
              height={100}
              alt='Consultora Mutual'
              className='cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'
            />
          </Link>
        </div>
        <nav
          id='header-menu'
          className='fixed w-full h-dvh inset-0 hidden gap-8 md:static md:h-[initial] md:bg-[initial] md:flex md:translate-y-[initial] font-avantMd text-h6 text-colorAcento items-center justify-center'>
          <button
            onClick={openSideMenu}
            className='text-[24px] hover:scale-105 hover:text-colorW   transition-all duration-300 ease-in-out'>
            Servicios
          </button>
          <Link
            href={'/mutual'}
            className='text-[24px] hover:scale-105 hover:text-colorW   transition-all duration-300 ease-in-out'>
            Mutual
          </Link>
          <Link
            href={'/contacto'}
            className='text-[24px] hover:scale-105 hover:text-colorW   transition-all duration-300 ease-in-out'>
            Contacto
          </Link>
        </nav>
        <div>
          <button onClick={openSideMenu}>
            <MenuIcon
              width='32'
              height='32'
              className='text-[24px] hover:scale-105 hover:text-colorW   transition-all duration-300 ease-in-out'
            />
          </button>
        </div>
      </div>
    </div>
  )
}
