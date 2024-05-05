interface Props {
  title: string
  strong: string
  clasName?: string
}

export const TitleMutual = ({ title, strong, clasName }: Props) => {
  return (
    <h2 className={`${clasName} text-mbTitle font-avantMd text-colorS`}>
      {title} <span className='font-avantBold text-colorP'>{strong}</span>
    </h2>
  )
}
