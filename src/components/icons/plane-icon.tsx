import React from 'react'

export function PlaneIcon (props?: any, width?: number, height?: number) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || '1em'}
      height={height || '1em'}
      viewBox='0 0 24 24'
      {...props}>
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2'
      />
    </svg>
  )
}