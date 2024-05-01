export function LineDollar (props?:any, width?:number, height?:number) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      {...props}>
      <path
        fill='currentColor'
        d='M19.379 15.106A8.001 8.001 0 0 0 8.035 5.056l-.993-1.737a9.996 9.996 0 0 1 9.962.023c4.49 2.593 6.21 8.143 4.118 12.77l1.342.775l-4.166 2.214l-.165-4.714zM4.629 8.9a8.001 8.001 0 0 0 11.345 10.05l.992 1.737a9.996 9.996 0 0 1-9.962-.024c-4.49-2.593-6.21-8.142-4.117-12.77L1.545 7.12L5.71 4.905l.165 4.714zm3.875 5.103h5.5a.5.5 0 1 0 0-1h-4a2.5 2.5 0 0 1 0-5h1v-1h2v1h2.5v2h-5.5a.5.5 0 0 0 0 1h4a2.5 2.5 0 0 1 0 5h-1v1h-2v-1h-2.5z'
      />
    </svg>
  )
}
