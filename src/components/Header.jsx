import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

function handleOpenClick() {
  let nav = document.querySelector(".navbar");
  nav.style.display = "block";
  document.body.classList.add("block");
}

function handleCloseClick() {
  let nav = document.querySelector(".navbar");
  nav.style.display = "none";
  document.body.classList.remove("block");
}

export default function Header() {
  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex justify-between lg:px-10 md:px-10 sm:px-5 py-7 items-center shadow-md header">
      <div className="lg:hidden md:hidden sm:block flex items-center justify-start flex-1">
        <FiMenu
          className="text-2xl cursor-pointer "
          id="btn-open"
          onClick={handleOpenClick}
        />
      </div>

      <nav className="lg:flex md:flex sm:hidden navbar duration-300 ease-in-out flex-1">
        <ul className="flex lg:flex-row md:flex-row sm:flex-col lg:items-center md:items-center sm:justify-left gap-x-5 text-slate-700 hover:text-slate-800 font-semibold lg:relative md:relative sm:absolute sm:top-0 sm:left-0 lg:w-full md:w-full sm:w-[80%] lg:h-fit md:h-fit sm:h-screen  bg-white z-10 lg:shadow-none md:shadow-none sm:shadow-xl relative lg:px-0 md:px-0 sm:px-10 lg:justify-normal md:justify-normal sm:justify-center">
          <IoIosClose
            className="lg:hidden md:hidden sm:block text-4xl cursor-pointer absolute top-8 right-5"
            onClick={handleCloseClick}
          />

          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/experience"}>Experience</NavLink>
          </li>
        </ul>
      </nav>

      <Link to={"/"} className="flex-1">
        <img src={logo} alt="" width="70px" className="logo" />
      </Link>

      <div className="flex gap-x-3">
        <div className="p-2 rounded-full rounded-br-none bg-indigo-100 hover:bg-indigo-50 duration-300 ease-in-out hover:shadow-lg hover:shadow-indigo-200">
          <a
            href="https://www.instagram.com/gustmejiafuentes/"
            className="text-2xl text-slate-700 hover:text-slate-800 flex items-center justify-center"
          >
            <AiFillInstagram />
          </a>
        </div>

        <div className="p-2 rounded-full rounded-br-none bg-indigo-100 hover:bg-indigo-50 duration-300 ease-in-out hover:shadow-lg hover:shadow-indigo-200 flex-1">
          <a
            href="mailto:gustavomejiafuentes2111@gmail.com?subject=Hello,%20let's%20work%20together 🤓"
            className="text-2xl text-slate-700  hover:text-slate-800 flex items-center justify-center"
          >
            <AiFillGoogleCircle />
          </a>
        </div>

        {/* <div className="p-2 rounded-full rounded-br-none bg-indigo-100 hover:bg-indigo-50 duration-300 ease-in-out hover:shadow-lg hover:shadow-indigo-200">
          <a
            href=""
            className="text-2xl text-slate-700 hover:text-slate-800 flex items-center justify-center"
          >
            <AiFillLinkedin />
          </a>
        </div> */}
      </div>
    </div>
  );
}
