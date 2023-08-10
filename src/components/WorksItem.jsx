import React from "react";
import WorkButton from "./WorkButton";

export default function WorksItem({ image, title, button, url }) {
  return (
    <div className="w-[320px] shadow-lg rounded-xl p-2 pb-5">
      <a href={url} target="_blank">
        <img
          src={image}
          alt=""
          className="w-full h-[250px] object-cover rounded-lg duration-300 ease-in-out hover:scale-[1.01]"
        />
      </a>
      <h2 className="text-slate-600 font-bold text-lg mt-3 text-center">
        {title}
      </h2>
      <WorkButton button={button} url={url} />
    </div>
  );
}
