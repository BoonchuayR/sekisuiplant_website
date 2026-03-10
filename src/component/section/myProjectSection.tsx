"use client";
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { MoveUpRight } from "lucide-react"

function MyProjectSection() {
  const t = useTranslations('myProject')
  const [active, setActive] = useState<number | null>(null)

  const cards = [
    { img: '/images/project-01.png', title: t('titleImage01'), desc: t('descImage01') },
    { img: '/images/project-02.png', title: t('titleImage02'), desc: t('descImage02') },
    { img: '/images/project-03.png', title: t('titleImage03'), desc: t('descImage03') },
  ]

  return (
    <div className='flex flex-col gap-10 max-w-[90%] w-full mx-auto py-20 items-center text-center'>
      <div className="flex justify-between w-full gap-20">
        <h2 className='text-2xl font-bold text-start w-2/5'>{t('title')}</h2>
        <p className='text-sm text-gray-500 text-end w-3/5'>{t('subtitle')}</p>
      </div>

      <div className="flex w-full gap-5 items-stretch overflow-x-auto md:overflow-visible">
          {cards.map((card, i) => (
          <div
            key={i}
            role="button"
            tabIndex={0}
            aria-pressed={active === i}
            onClick={() => setActive(prev => (prev === i ? null : i))}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(prev => (prev === i ? null : i)); } }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
                className={`group relative min-w-0 cursor-pointer transition-all duration-300 ease-in-out h-64 rounded-2xl bg-cover bg-center overflow-hidden flex-shrink-0 w-[320px] md:w-auto md:flex-shrink ${active === i ? 'md:flex-[1_1_50%]' : 'md:flex-[1_1_25%]'}`}
                style={{ backgroundImage: `url('${card.img}')` }}
          >
            <div className={`${active === i ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} absolute inset-0 bg-black/20 transition-opacity duration-300`} />

            <div className="relative z-10 p-5 flex flex-col justify-end h-full">
              <div className={`${active === i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'} transform transition-all duration-300 text-start text-white`}>
                <h3 className='text-xl font-bold'>{card.title}</h3>
                <p className='text-md'>{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
          <div className="flex-shrink-0 my-auto">
            <div className="bg-mainBlue rounded-2xl w-[80px] h-[80px] flex items-center justify-center">
              <MoveUpRight className="w-[50px] h-[50px] text-white" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default MyProjectSection