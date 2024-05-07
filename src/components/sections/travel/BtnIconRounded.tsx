interface Props {
  title: string
  icon: JSX.Element
}

export const BtnIconRounded = ({ title, icon }:Props) => {
  return (
    <div className=' flex flex-col items-center justify-center gap-1 group w-[80px] lg:w-[110px]'>
      <button className='bg-gradient-to-tl via-colorP from-colorT to-colorS rounded-full inline-block p-1 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 ease-in-out'>
        <div className='bg-colorW p-2 rounded-full'>
          { icon } 
        </div>
      </button>
      <div className='mt-1'>
        <p className='text-sm text-colorP text-center font-avantMd  group-hover:scale-105 transition-all duration-300 ease-in-out'>{ title }</p>
      </div>
    </div>
  )
}