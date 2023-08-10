import React from "react";
import profile from "../img/IMG_2479.jpg";
import { Link } from "react-router-dom";

export default function Banner(props) {
  return (
    <>
      <div className="flex pt-20 justify-center gap-x-5 px-10">
        <div className="w-24 h-[185px]">
          <img
            src={profile}
            alt=""
            className="select-none object-cover h-full w-full rounded-2xl grayscale hover:grayscale-0 duration-300 ease-in-out"
          />
        </div>

        <div>
          <h1 className="font-bold lg:text-5xl md:text-5xl sm:text-3xl lg:w-[340px] md:w-[360px] sm:w-[190px] text-[#1f1f1f] leading-tight">
            {props.text}
          </h1>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="mailto:gustavomejiafuentes2111@gmail.com?subject=Hello,%20lets%20work%20together 🤓"
          type="button"
          className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:scale-[1.04] duration-300 ease-in-out text-white text-base font-semibold px-6 py-3 rounded-xl"
        >
          Hire me! 🥳
        </a>
      </div>
    </>
  );
}
