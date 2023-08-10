import React from "react";
import Banner from "../components/Banner";
import Shape1 from "../components/Shape1";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import InfoStudies from "../components/InfoStudies";
import HTML from "../img/html-5.png";
import CSS from "../img/css-3.png";
import JS from "../img/js.png";
import TAILWIND from "../img/tailwind.png";
import REACT from "../img/react.png";
import BOOTSTRAP from "../img/bootstrap.png";
import WORDPRESS from "../img/wordpress.png";
import LARAVEL from "../img/laravel.png";
import MYSQL from "../img/mysql.png";

export default function Experience() {
  const htmlcolor = "#ff5721";
  const csscolor = "#2096f3";
  const jscolor = "#ffdf00";
  const reactcolor = "#60dafb";
  const tailwindcolor = "#00b8d5";
  const bootstrapcolor = "#8409fa";
  const wordpresscolor = "#00769c";
  const laravelcolor = "#fe291b";
  const mysqlcolor = "#4c85a5";

  return (
    <div className="overflow-hidden">
      <div className="relative">
        <Banner text="I show you the technologies that I manage 📌" />

        <Shape1 />
      </div>

      <div className="mt-20">
        <Timeline position="alternate" className="mt-10">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <InfoStudies
                image={HTML}
                title="HTML"
                place="3+ years of experience"
                display="hidden"
                color={htmlcolor}
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
                image={CSS}
                title="CSS"
                position=" justify-end"
                place="3+ years of experience"
                display="hidden"
                color={csscolor}
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
                image={JS}
                title="JavaScript"
                place="1+ years of experience"
                display="hidden"
                color={jscolor}
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
                image={REACT}
                title="React JS"
                position=" justify-end"
                place="3+ months of experience"
                display="hidden"
                color={reactcolor}
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
                image={TAILWIND}
                title="Tailwind CSS"
                place="1+ years of experience"
                display="hidden"
                color={tailwindcolor}
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
                image={BOOTSTRAP}
                title="Bootstrap 5"
                position=" justify-end"
                place="2+ years of experience"
                display="hidden"
                color={bootstrapcolor}
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
                image={WORDPRESS}
                title="Wordpress"
                place="2+ years of experience"
                display="hidden"
                color={wordpresscolor}
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
                image={LARAVEL}
                title="Laravel"
                position=" justify-end"
                place="2+ months of experience"
                display="hidden"
                color={laravelcolor}
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
                image={MYSQL}
                title="MySQL"
                place="2+ months of experience"
                display="hidden"
                color={mysqlcolor}
              />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}
