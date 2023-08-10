import React from "react";

export default function InfoStudies({
  description,
  position,
  title,
  place,
  image,
  display,
  color
}) {
  return (
    <div>
      <div className="flex flex-col">
        <div className={`${position} flex`}>
          <img src={image} alt="" className="w-10" />
        </div>
        <h2 className={`font-semibold text-xl`} style={{ color: color }}>{title}</h2>
        <span className="font-normal text-slate-400 text-base -mt-1">
          {place}
        </span>
      </div>
      <div className={`${position} flex`}>
        <div
          className={`lg:w-[280px] md:w-[280px] sm:w-[190px] border-[1px] border-slate-200 rounded-lg text-base p-2 mt-2 text-slate-600 font-normal ${
            display === "hidden" ? "hidden" : ""
          }`}
        >
          {description}
        </div>
      </div>
    </div>
  );
}
