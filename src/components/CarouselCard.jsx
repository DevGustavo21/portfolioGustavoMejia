import React from 'react'

export default function CarouselCard({avatar, title, text}) {
  return (
    <div className="box lg:w-[84%] md:w-[90%] sm:w-[94%] h-full bg-white px-4 py-6 rounded-2xl">
    <span className="text-3xl">{avatar}</span>
    <h3 className="text-slate-600 font-semibold mt-2 text-lg">
      {title}
    </h3>
    <p className="text-base text-slate-400 leading-relaxed mt-2">
      {text}
    </p>
  </div>
  )
}
