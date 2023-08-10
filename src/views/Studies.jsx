import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import InfoStudies from "../components/InfoStudies";

export default function AlternateTimeline() {
  const indigo = "#4f46e5";
  return (
    <>
      <div className="mt-20">
        <h1 className="font-bold lg:text-5xl md:text-5xl sm:text-3xl text-[#1f1f1f] leading-tight text-center">
          My Studies ✏️
        </h1>
      </div>
      <Timeline position="alternate" className="mt-10">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <InfoStudies
              title="Bootcamp"
              place="Nerdify / 2023"
              description="Web development bootcamp, learning from frontend to backend technologies. With a duration of 4 intensive months."
              color={indigo}
            />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <InfoStudies
              position="justify-end"
              title="Systems Engineering Career"
              place="UNI-IES / 2017-2021"
              description="Career successfully completed after 5 years, where I learned mostly computer systems documentation."
              color={indigo}
            />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <InfoStudies
              title="English Language Course"
              place="American Nicaragua School / 2006-2013"
              description="This course lasted 7 years since I started from the infant level and went through the adolescent level. My goal is to continue polishing the language until I master it to perfection."
              color={indigo}
            />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
