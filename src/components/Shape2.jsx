import React from "react";
import shape2 from "../img/shapes/shape2.png";

export default function Shape2() {
  return (
    <div>
         <img
          src={shape2}
          alt=""
          className="lg:w-[400px] md:w-[350px] sm:w-[320px] absolute lg:-left-[170px] lg:-top-[100px] md:-left-[190px] md:-top-[130px] sm:-left-[190px] sm:-top-[100px] z-0 animate-[spin_300s_ease-in-out_infinite]"
        />
    </div>
  );
}
