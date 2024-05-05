'use client'
import React, { FC, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { FacebookIcon, InstagramIcon } from '../icons'

interface Props {
  news: {
    id: number
    title: string
    img?: {
      src: string
      alt: string
      width: number
      height: number
    }
    paragraph: string[]
  }
}

export const CardNews: FC<Props> = ({ news }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleToggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  const handleToggleModal = () => {
    setIsOpenModal(!isOpenModal)
  }
  console.log(isOpenModal)

  return (
    <article
      id='card-service'
      className='relative mx-[4vw] lg:mx-0 flex flex-col items-stretch justify-between '>
      <div className=''>
        <div className=''>
          {news.img && (
            <Image
              src={news.img.src}
              alt={news.img.alt}
              width={news.img.width}
              height={news.img.height}
              className='rounded-xl object-cover object-center shadow-md shadow-colorP '
            />
          )}
        </div>
        <div className='font-avantBk mt-4 lg:h-[10rem] lg:flex lg:flex-col lg:justify-between '>
          <h2 className='font-avantDem text-colorP text-h6'>{news.title}</h2>

          <div
            className={`lg:hidden overflow-hidden transition-max-height duration-500 ease-in-out mt-4 flex flex-col gap-2 text-colorP ${
              isOpen ? 'max-h-[500px]' : 'max-h-0'
            }`}>
            {news.paragraph.map((paragraph, index) => (
              <p
                key={index}
                className='text-p'>
                {paragraph}
              </p>
            ))}
            <div className='mt-8 text-p font-avantMd text-colorP text-center'>
              <p>
                Únete a nosotros en nuestras redes y mantente al día con las
                últimas novedades.
              </p>
              <div className='flex gap-4 items-center justify-center'>
                <a
                  href='https://www.facebook.com/AsociacionConsultoraMutual/'
                  rel='noreferrer'
                  target='_blank'
                  className='text-[1.8rem] hover:scale-125 transition-all duration-300'>
                  <FacebookIcon />
                </a>
                <a
                  href='https://www.instagram.com/asociacionconsultoramutual/'
                  rel='noreferrer'
                  target='_blank'
                  className='text-[1.7rem] hover:scale-125 transition-all duration-300'>
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>

          <div className='lg:hidden text-right w-full mb-4'>
            <button
              onClick={handleToggleCollapse}
              className='text-psm text-colorP'>
              {isOpen ? 'Cerrar' : 'Más info...'}
            </button>
          </div>
          <div className='hidden lg:block text-right w-full mb-4'>
            <button
              onClick={handleToggleModal}
              className='text-psm text-colorP z-10'>
              {isOpenModal ? '' : 'Más info...'}
            </button>
          </div>
        </div>
      </div>
      {isOpenModal && (
        <div className='fixed inset-0 p-4 bg-colorB bg-opacity-50 flex items-center justify-center rounded-xl'>
          <div
            className={clsx(
              'bg-colorW backdrop-blur-xl p-4 rounded-lg h-full overflow-auto flex flex-col justify-between',
              {
                'animate-fade-up': isOpenModal,
                'animate-fade-down': !isOpenModal,
              }
            )}>
            <div className='flex flex-col gap-4 mt-8'>
              <h2 className='font-avantDem text-colorP text-h6'>
                {news.title}
              </h2>
              {news.paragraph.map((paragraph, index) => (
                <p
                  key={index}
                  className='text-p font-avantBk text-colorP'>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className='mt-8 text-p font-avantMd text-colorP text-center'>
              <p>
                Únete a nosotros en nuestras redes y mantente al día con las
                últimas novedades.
              </p>
              <div className='flex gap-4 items-center justify-center'>
                <a
                  href='https://www.facebook.com/AsociacionConsultoraMutual/'
                  rel='noreferrer'
                  target='_blank'
                  className='text-[1.8rem] hover:scale-125 transition-all duration-300'>
                  <FacebookIcon />
                </a>
                <a
                  href='https://www.instagram.com/asociacionconsultoramutual/'
                  rel='noreferrer'
                  target='_blank'
                  className='text-[1.7rem] hover:scale-125 transition-all duration-300'>
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <button
              onClick={handleToggleModal}
              className='mt-4 text-right w-full text-colorS'>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </article>
  )
}
