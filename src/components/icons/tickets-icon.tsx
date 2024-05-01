export function TicketIcon (props?:any, width?:number, height?:number) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 48 48'
      {...props}>
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='2'>
        <path
          strokeLinejoin='round'
          d='M9 16L34 6l4 10M4 16h40v6c-3 0-6 2-6 5.5s3 6.5 6 6.5v6H4v-6c3 0 6-2 6-6s-3-6-6-6z'
        />
        <path d='M17 25.385h6m-6 6h14' />
      </g>
    </svg>
  )
}
