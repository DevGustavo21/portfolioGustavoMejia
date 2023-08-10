import React from 'react'

export default function Facts({number, title, description}) {
  return (
    <div>
    <span className="text-indigo-600 font-normal text-lg">
      {number}{" "}
      <span className="font-semibold text-slate-800">
        {title}
      </span>
    </span>

    <p className="text-lg font-normal text-slate-700 mt-3">{description}</p>
  </div>
  )
}
