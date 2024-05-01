
interface Props {
  width: string
  height: string
  color: string
  props?: any
}

export function HotelIcon ({ width, height, color, props }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      {...props}>
      <path fill={color} d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3s1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2z"/>
    </svg>
  )
}