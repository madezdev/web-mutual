import { BtnSectionPage, HeroTravelPage } from '@/components'

export default function TurismoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='animate-fade animate-ease-in snap-y snap-mandatory '>
      <HeroTravelPage />
      <div className='mx-[4vw]'>
        <section className='flex flex-wrap items-center justify-center gap-3 lg:gap-10 w-full mt-8 animate-fade-up animate-duration-500 animate-delay-[500ms] animate-ease-linear'>
          <BtnSectionPage />
        </section>
      </div>

      {children}
    </div>
  )
}
