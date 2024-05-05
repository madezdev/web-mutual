'use client'
import React, { useEffect, useState } from 'react'
import { CardNews } from '@/components/ui'


export const ListNews = () => {
  const [news, setNews] = useState([])
  const fechtNews = async () => {
    const res = await fetch('./json/news.json')
    const data = await res.json()
    setNews(data)
  }

  useEffect(() => {
    fechtNews()
  }, [])

  return (
    <section
      className='grid lg:grid-cols-2 xl:grid-cols-4 xxl:grid-cols-4 items-center justify-between w-full h-full mb-8 gap-x-20' 
    >
      {news.map((item, index) => (
        <CardNews
          key={index}
          news={item}
        />
      ))}
    </section>
  )
}
