'use client'
import clsx from 'clsx'
import { useEffect } from 'react'

type Speed = 'fast' | 'slow';
type Direction = 'left' | 'right';

interface Props {
  className?: string,
  dataSpeed?: Speed,
  dataDirection?: Direction
  data: string[]
}

export const ScrollInifite = ({className,dataDirection,dataSpeed, data}:Props) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller')

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation(scrollers)
    }

    function addAnimation(scrollers: NodeListOf<Element>) {
      scrollers.forEach((scroller: Element) => {
        scroller.setAttribute('data-animated', 'true')

        const scrollerInner = scroller.querySelector('.scroller__inner')

        if (scrollerInner) {
          const scrollerContent = Array.from(
            scrollerInner.children
          ) as HTMLElement[]

          scrollerContent.forEach((item: HTMLElement) => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement
            duplicatedItem.setAttribute('aria-hidden', 'true')
            scrollerInner.appendChild(duplicatedItem)
          })
        }
      })
    }
  }, [])

  return (
    <div
      className={clsx('scroller', className)}
      data-speed={dataSpeed}
      data-direction={dataDirection}
      >    
      <ul className='tag-list scroller__inner'>
        {data?.map((item, index) => (
          <li key={index} className=''>{item}</li>
        ))}
      </ul>
    </div>
  )
}
