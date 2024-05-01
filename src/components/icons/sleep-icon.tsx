export function SleepIcon (props?: any, width?: number, height?: number) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height= {height}
      viewBox='0 0 24 24'
      {...props}>
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1'
        d='M5 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0m17 8v-3H2m0-6v9m10-3h10v-2a3 3 0 0 0-3-3h-7z'
      />
    </svg>
  )
}
