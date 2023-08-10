import React from "react";

export default function TechnologyItem(props) {
  return (
    <div className="border-slate-500 rounded-lg w-fit h-fit p-2 grayscale hover:grayscale-0 duration-300 ease-in-out">
      <img src={props.icon} alt="" className="w-16" />
    </div>
  );
}
