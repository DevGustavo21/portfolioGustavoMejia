import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default function Cards({avatar, title, subtitle, url, urlTitle}) {
  return (
    <div>
      <div>
        <div className="flex w-16 items-center justify-center border-[1px] border-slate-300 rounded-lg p-3 text-2xl">
          {avatar}
        </div>
        <h2 className="text-lg font-bold text-slate-700 mt-2">{title}</h2>

        <p className="text-base text-slate-400 leading-relaxed mt-3">
          {subtitle}
        </p>

        <div className="mt-4 flex items-center gap-x-3 hover:gap-x-4 duration-300 ease-in-out">
          <Link to={url} className="text-[15px] font-medium text-slate-700 hover:text-slate-800">{urlTitle}</Link>
          <FiChevronRight/>
        </div>
      </div>
    </div>
  );
}
