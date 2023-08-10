import React from "react";
import shape1 from "../img/shapes/shape1.png";

export default function Shape1() {
  return (
    <div>
      <img
        src={shape1}
        alt=""
        className="lg:w-[400px] md:w-[350px] sm:w-[400px] absolute lg:-right-[170px] md:-right-[140px]  sm:-right-[180px] -z-10 top-60 animate-[spin_250s_ease-in-out_infinite]"
      />
    </div>
  );
}
