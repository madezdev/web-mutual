import {
  Bento,
  HeroHomePage,
  ListNews,
  ListService,
  SectionMembership,
  TitleMutual,
} from '@/components'
import { SectionMutual } from '@/components'

export default function Home() {
  return (
    <>
      <header>
        <HeroHomePage />
      </header>
      <main className='flex flex-col items-center justify-between '>
        <section>
          <div className='text-center my-10 animate-fade-up animate-duration-500 animate-delay-[500ms] animate-ease-linear'>
            <TitleMutual
              title='Servicios Consultora'
              strong=' Mutual'
            />
          </div>
          <ListService />
        </section>
        <SectionMutual />
        <Bento />
      </main>
      <SectionMembership />
      <div className='mx-[4vw]'>
        <div
          id='card-service'
          className='text-center my-10'>
          <TitleMutual
            title='Novedades'
            strong=' Mutual'
          />
        </div>
        <ListNews />
      </div>
    </>
  )
}
