import React from "react";
import WorksItem from "../components/WorksItem";
import Work1 from "../img/IMG_2479.jpg";
import Adopta from "../img/adopta.png";
import Pinos from "../img/pinos.png";
import NFT from "../img/nft.png";

export default function Works() {
  return (
    <div className="mt-20 px-10 flex flex-col items-center">
      <h1 className="font-bold lg:text-5xl md:text-5xl sm:text-3xl text-[#1f1f1f] leading-tight text-center">
        My works 🤓
      </h1>

      <div className="lg:w-[1100px] md:w-[670px] sm:w-full mt-10">
        <div className="flex flex-wrap lg:justify-center md:justify-between sm:justify-center items-center lg:gap-5 md:gap-5 sm:gap-5 ">
          <WorksItem
            image={Pinos}
            title="Pino's Farm Website"
            button="View Site"
            url="https://phpstack-243655-3675519.cloudwaysapps.com/src/index.html              color={indigo}"
          />
          <WorksItem
            image={Adopta}
            title='"Adopta un árbol" Website'
            button="View Github"
            url="https://github.com/DevGustavo21/adopta_un_arbol_website.git"
          />
          <WorksItem
            image={NFT}
            title="NFT Ecommerce App"
            button="View Github"
            url="https://github.com/DevGustavo21/nft-2.git"
          />
        </div>
      </div>
    </div>
  );
}
