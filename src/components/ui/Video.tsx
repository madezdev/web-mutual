interface Props {
  path: string
}

export const Video = ({ path}: Props) => {
  return (
    <video
      autoPlay
      loop
      muted
      preload='auto'
      className= {`w-full object-cover object-center lg:h-[45rem]`}
      >
      <source
        src={path}
        type='video/mp4'
      />
      Video no soportado por el navegador - Actualiza tu navegador
    </video>
  )
}