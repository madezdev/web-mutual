import { ListNewTravel, TitleMutual } from "@/components"

export default function TurismoPage() {
  return (
    <section className='mx-[4vw]  py-[32px]'>
      <div>
        <p className='font-avantBk text-maxparrafo text-colorP '>
          La <span className='font-avantDem text-colorS'>Mutual</span> brinda
          una completa y variedad de propuestas de turismo nacional e
          internacional, pasajes aéreos y terrestres, reservación de estadías en
          hoteles de Argentina y el mundo como también una amplia oferta de
          espectáculos y eventos. Todo a precios razonables para el asociado y
          su grupo familiar.
        </p>
      </div>
      <div>
      <div
          id='card-service'
          className='text-center my-10'>
          <TitleMutual
            title='Novedades'
            strong='Turismo'
          />
        </div>
        <ListNewTravel />
      </div>
    </section>
  )
}
