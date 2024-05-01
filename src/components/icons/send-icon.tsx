export function SendIcon (props?:any, width?:number, height?:number) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m24 18l-10 5v-4l4-1l-4-1v-4zm-3-3.74l-2-1V5H5v13.26l1-.66l3 2l3-2V20l-3 2l-3-2l-3 2V3h18zM17 7v2H7V7zm-5 6v-2H7v2z"
      />
    </svg>
  );
}