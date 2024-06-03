interface Props {
  params: {
    nextpage: string
  }
}

export default function ({ params }: Props) {
  const { nextpage } = params

  const componentPage = () => {
    switch (nextpage) {
      case 'alojamientos':
        return <h1>Page 1</h1>
      case 'vuelos':
        return <h1>Page 2</h1>
      case 'page3':
        return <h1>Page 3</h1>
      default:
        return (
          <div className='mx-[20vw] py-[32px]'>
            <p className='font-avantBk text-maxparrafo text-colorP '>
              La <span className='font-avantDem text-colorS'>Mutual</span>{' '}
              brinda una completa y variedad de propuestas de turismo nacional e
              internacional, pasajes aéreos y terrestres, reservación de
              estadías en hoteles de Argentina y el mundo como también una
              amplia oferta de espectáculos y eventos. Todo a precios razonables
              para el asociado y su grupo familiar.
            </p>
          </div>
        )
    }
  }

  return (
    <div>
      <h1>Category Page {componentPage()}</h1>
    </div>
  )
}
