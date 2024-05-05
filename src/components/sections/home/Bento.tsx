import React from 'react'
import { BentoItem } from './BentoItem'

export const Bento = () => {
  return (
    <section
      className='w-full max-w-[1920px]
      grid lg:grid-cols-10 auto-rows-[25rem] gap-4
      mx-auto p-6 md:p-12 lg:p-20'
      >
      <BentoItem
        image='/images/home/electro.webp'
        title='Electrodomésticos para el Hogar'
        subtitle='Simplificamos tu proceso de compra de electrodomésticos.'
        cta='Nuestra propuesta'
        hrf='/tienda'
        className='col-span-10 lg:col-span-4'
      />
      <BentoItem
        image='/images/home/travel.webp'
        title='Tu próximo viaje empieza aquí'
        subtitle='Encuentra las mejores ofertas y experiencias.'
        cta='Destinos y ofertas'
        hrf='/turismo'
        className='col-span-10 lg:col-span-6'
      />
      <BentoItem
        image='/images/home/women-super.webp'
        title='Productos de Almacén.'
        subtitle='Venta mayorista y minorista.'
        cta='Empeza ahorrar.'
        hrf='/tienda'
        className='col-span-10 lg:col-span-6'
      />
      <BentoItem
        image='/images/home/zapa.jpeg'
        title='Calzado para toda la familia'
        subtitle='Venta mayorista y minorista.'
        cta='Mira nuestras zapatillas.'
        hrf='/tienda'
        className='col-span-10 lg:col-span-4'
      />
   
    </section>
  )
}
