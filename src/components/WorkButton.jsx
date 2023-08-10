import React from "react";

export default function ({ button, url }) {
  return (
    <div className="flex justify-center mt-[-4px]">
      <a
        href={url}
        target="_blank"
        className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 duration-300 ease-in-out rounded-lg text-white font-semibold text-sm mt-5"
      >
        {button}
      </a>
    </div>
  );
}
