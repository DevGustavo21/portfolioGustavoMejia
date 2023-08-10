import React from "react";
import Cards from "../components/Cards";

export default function BoxCards({ avatar, title, subtitle, url, urlTitle }) {
  return (
    <div className="box lg:flex-1 md:flex-1 sm:w-full bg-transparent mx-3 lg:border-0 md:border-0 py-7 lg:border-b-0 md:border-b-0 sm:border-b-[1px] border-slate-200">
      <Cards
        avatar={avatar}
        title={title}
        subtitle={subtitle}
        url={url}
        urlTitle={urlTitle}
      ></Cards>
    </div>
  );
}
