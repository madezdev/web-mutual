import clsx from 'clsx'

interface Props {
  title: string
  color?: 'primary' | 'secondary'
  className?: string
  icon?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

export const ButtonCta = ({
  title,
  color,
  icon,
  className,
  disabled,
  onClick,
  type,
}: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx({
        'bg-gradient-to-t from-colorT to-[#e19200] text-[#482100] hover:bg-gradient-to-t hover:from-[#e19200] hover:to-[#bb6702] hover:border-2 hover:border-[#e19200] hover:scale-105 active:bg-gradient-to-t active:from-[#bb6702] active:to-[#974f09] active:scale-100 transition-all duration-300 ease-in-out px-10 ':
          color === 'primary',
        'text-colorT backdrop-blur-xl hover:scale-105 transition-all duration-300 ease-in-out ':
          color === 'secondary',
        ' md:text-[1.25rem] px-10 py-1 rounded-full font-avantMd border-2 border-colorT ':
          true,
        className,
      })}>
      <div className='flex justify-center items-center gap-4'>
        {icon}
        <span className='mt-1 '>{title}</span>
      </div>
    </button>
  )
}
