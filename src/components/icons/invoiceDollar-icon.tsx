export function InvoiceDollar (props?:any, width?:number, height?:number) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      {...props}>
      <path
        fill='currentColor'
        d='M6 3v26h16v-2H8V5h10v6h6v2h2V9.6l-.3-.3l-6-6l-.3-.3zm14 3.4L22.6 9H20zM10 13v2h12v-2zm17 2v2c-1.7.3-3 1.7-3 3.5c0 2 1.5 3.5 3.5 3.5h1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H25v2h2v2h2v-2c1.7-.3 3-1.7 3-3.5c0-2-1.5-3.5-3.5-3.5h-1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5H31v-2h-2v-2zm-17 3v2h7v-2zm9 0v2h3v-2zm-9 4v2h7v-2zm9 0v2h3v-2z'
      />
    </svg>
  )
}
