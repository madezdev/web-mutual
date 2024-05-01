export function Health (props?:any, width?:number, height?:number) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 14 14'
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M9.51 1.374a.75.75 0 0 0-1.29-.016L4.28 7.79L2.903 5.71a.75.75 0 0 0-.626-.336H.76a.75.75 0 0 0 0 1.5h1.115L3.678 9.6a.75.75 0 0 0 1.265-.022l3.899-6.364l1.394 2.41a.75.75 0 0 0 1.299-.751l-2.026-3.5Zm.818 6.965c-.454-.4-.937-.618-1.422-.657a1.98 1.98 0 0 0-1.559.582c-.76.748-1.012 2.13-.042 3.096l.017.015l2.662 2.42a.5.5 0 0 0 .673 0l2.662-2.42l.01-.01c.978-.941.736-2.317-.016-3.065a1.994 1.994 0 0 0-1.552-.593c-.485.033-.972.241-1.433.632'
        clipRule='evenodd'
      />
    </svg>
  )
}
