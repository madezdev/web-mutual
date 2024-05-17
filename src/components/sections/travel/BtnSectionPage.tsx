import { ArgIcon, HotelIcon, MickeyIcon, PlaneIcon, SuitcaseIcon, TicketIcon, WorldIcon } from "@/components/icons"
import Link from "next/link"
import { BtnIconRounded } from "./BtnIconRounded"

const items = [
  {
    title: 'Alojamientos',
    href: '/servicios/turismo/alojamientos',
    icon: (
      <HotelIcon
        width='40'
        height='40'
        color='#1F6A93'
      />
    ),
  },
  {
    title: 'Vuelos',
    href: '/servicios/turismo/vuelos',
    icon: (
      <PlaneIcon
        width='40'
        height='40'
        color='#1F6A93'
      />
    ),
  },
  {
    title: 'Paquetes',
    href: '/servicios/turismo/paquetes',
    icon: (
      <SuitcaseIcon
        width='40'
        height='40'
        color='#1F6A93'
      />
    ),
  },
  {
    title: 'Actividades',
    href: '/servicios/turismo/actividades',
    icon: (
      <TicketIcon
        width='40'
        height='40'
        color='#1F6A93'
      />
    ),
  },
  {
    title: 'Disnney',
    href: '/servicios/turismo/disney',
    icon: (
      <MickeyIcon
        width='40'
        height='40'
        color='#1F6A93'
      />
    ),
  },
  {
    title: 'Internacional',
    href: '/servicios/turismo/internacional',
    icon: (
      <WorldIcon
        width='40'
        height='40'
        color='#1F6A93'
      />
    ),
  },
  {
    title: 'National',
    href: '/servicios/turismo/nacional',
    icon: (
      <ArgIcon
        width='40'
        height='40'
        color='#1F6A93'
      />
    ),
  },
]

export const BtnSectionPage = () => {
  return (
    <>
    {items.map((item: any, index: number) => (
      <div 
        key={index}
        className="mx-[4vw] lg:mx-0"
      >
        <Link href={item.href}
        >
          <BtnIconRounded
            title={item.title}
            icon={item.icon}
          />
        </Link>
      </div>
    ))}
  </>
  )
}
