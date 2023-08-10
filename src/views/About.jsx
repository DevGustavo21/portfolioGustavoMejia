import React from "react";
import Banner from "../components/Banner";
import Shape1 from "../components/Shape1";
import Facts from "../components/Facts";
import CV from '../documents/cv.pdf'

export default function About() {
  return (
    <div className="overflow-hidden">
      <div className="relative">
        <Banner text="Learn a little about me and what i do 👇" />

        <Shape1 />
      </div>

      <div className="px-10 mt-10 py-20 flex flex-wrap lg:gap-0 md:gap-0 sm:gap-10">
        <div className="lg:w-[50%] md:w-[50%] sm:w-full lg:border-0 md:border-0 sm:border-b-[1px] border-slate-300 pb-10">
          <h2 className="text-indigo-500 font-medium text-lg">My Bio</h2>
          <p className="text-xl font-semibold text-slate-800 mt-3 w-fit lg:pr-5 md:pr-5 sm:pr-0">
            Hello, in the other column I will be explaining in more detail the
            most relevant data of my life. If you have any specific questions
            you can contact me directly by mail.
          </p>

          <div className="mt-10 flex justify-start gap-10 lg:pr-5 md:pr-5 sm:pr-0 items-center flex-wrap">
            <p className="lg:w-[50%] md:w-full sm:w-full text-lg font-normal text-slate-700">
              {" "}
              If you would like to see my resume, I leave you a download button
              so you can see more of my personal data.
            </p>

            <a
              className="lg:w-auto md:w-auto sm:w-full bg-indigo-600 text-white font-semibold px-7 py-3 rounded-lg h-fit w-auto text-center
              "
              href={CV}
              download
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="lg:w-[50%] md:w-[50%] sm:w-full flex flex-col gap-y-10">
          <Facts
            number="01."
            title="My personal data"
            description="My name is Gustavo Mejía, I am currently 22 years old, I am a systems engineer, graduated in 2021. My passion for programming started in 2018 and since then I have not stopped learning more every day."
          />

          <Facts
            number="02."
            title="Programming Tastes"
            description="In all these years that I have been programming my passion for the frontend has increased, the fact of knowing that each developed product must be very well elaborated, clean and aesthetic fascinates me more and more."
          />

          <Facts
            number="03."
            title="Major Achievements"
            description="I have managed to participate in different programming contests at national level in my country in which in 1 of them I have managed to obtain the first place in the beginner category in the year 2020 and the third place in the advanced category in the year 2021."
          />
        </div>
      </div>
    </div>
  );
}
