import React from "react";
import Banner from "./components/Banner";
import BoxCards from "./components/BoxCards";
import { Carousel } from "@trendyol-js/react-carousel";
import CarouselCard from "./components/CarouselCard";
import Tecnologies from "./components/Tecnologies";
import Shape1 from "./components/Shape1";
import Shape2 from "./components/Shape2";


export default function App() {
  return (
    <div className="overflow-hidden">
      <div className="relative">
        <Banner text="Hi, I'm Gustavo, I'm Frontend Developer 👨🏽‍💻" />
        <Shape1 />
      </div>

      <section className="flex mt-20 gap-y-10 flex-col items-center py-10">
        <h1 className="font-bold text-slate-800 text-4xl">What about me?</h1>

        <div className="lg:w-[90%] md:w-full sm:w-full py-5 rounded-2xl flex justify-between gap-5 flex-wrap px-10">
          <BoxCards
            avatar="😎"
            title="My Bio"
            subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam vel eos maiores corrupti officiis nulla, sit pariatur"
            url={"/about"}
            urlTitle="View all my Bio"
          />
          <BoxCards
            avatar="👻"
            title="My Studies"
            subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam vel eos maiores corrupti officiis nulla, sit pariatur"
            url={"/studies"}
            urlTitle="View all my Studies"
          />
          <BoxCards
            avatar="💻"
            title="My Works"
            subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam vel eos maiores corrupti officiis nulla, sit pariatur"
            url={"/works"}
            urlTitle="View all my Works"
          />
        </div>
      </section>

      <section className="px-10 lg:mt-10 md:mt-10 sm:mt-4 bg-gradient-to-b from-white to-indigo-50 py-20 justify-center flex">
        <div className="flex flex-wrap justify-between items-center lg:w-[90%] md:w-full sm:w-full lg:gap-0 md:gap-0 sm:gap-10">
          <div className="lg:w-[60%] md:w-[50%] sm:w-full lg:items-start md:items-start sm:items-center flex flex-col gap-y-5 lg:text-left md:text-left sm:text-center">
            <h2 className="font-bold text-slate-800 text-4xl text-center">
              What do I do?
            </h2>

            <p className="text-base text-slate-400 lg:leading-loose md:leading-loose sm:leading-relaxed mt-3 lg:w-[70%] md:w-[80%] sm:w-full">
              In my 3 years of working in the world of web development and in my
              last year of applying my knowledge professionally, I have been
              absorbing more knowledge in different languages, frameworks and
              libraries that allow me to offer my clients better options for the
              development of their products.
            </p>
          </div>

          <div className="lg:w-[40%] md:w-[50%] sm:w-full flex gap-x-5 Carousel h-fit">
            <Carousel show={1.5} slide={1} swiping={true} transition={0.5}>
              <CarouselCard
                avatar="💻"
                title="Web Development"
                text="Web development is one of my strengths, I have about 3 years working in this field."
              />
              <CarouselCard
                avatar="🧠"
                title="UX/UI Design"
                text="I have been detailing my user experience and user interface techniques for 1 year to date."
              />
              <CarouselCard
                avatar="📱"
                title="Prototype Design"
                text="One of my other passions is the development of prototypes for both web and mobile applications."
              />
            </Carousel>
          </div>
        </div>
      </section>

      <section className="px-10 bg-gradient-to-t from-white to-indigo-50 py-20 justify-center flex flex-col gap-y-10 relative">
        <Shape2 />

        <h3 className="font-bold text-slate-800 text-4xl text-center z-10">
          Technologies
        </h3>

        <div className="flex justify-center">
          <Tecnologies />
        </div>
      </section>
    </div>
  );
}
