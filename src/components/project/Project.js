import React from "react";
import { Element } from "react-scroll";
import Project1 from "../Project1/Project1";
import "./Project.css";

const Project = () => {
  const projects = [
    {
      img: "https://c4.wallpaperflare.com/wallpaper/430/90/562/sunset-the-sun-the-plane-fighter-wallpaper-preview.jpg",
      title: "AIRCRAFT DESIGN PROJECT ",
      time: "Pre-Final Year|OCT2020-DEC2020",
      name: "LOCKHEED MARTIN F-22 RAPTOR",
      desc: "  Designed to reduce the weight of the aircraft in order to provide higher fuel efficiency and lower air drag.",
    },
    {
      img: "https://images.wallpaperscraft.com/image/single/drone_camera_technology_171576_3840x2160.jpg",
      title: "DESIGN & ANALYSIS OF   QUADCOPTER ",
      name: "",
      time: "Final Year|JAN2021-MAY2021",
      desc: "Design and analysis of the drone structure and its air flow to enhance the aerodynamics flow thereby increasing its speed and reduction in drag production.",
    },
  ];
  return (
    <Element className="project" id="project">
      <h1>PROJECTS</h1>
      <div className="projects">
        {projects.map((project1, index) => {
          return (
            <Project1
              key={index}
              img={project1.img}
              title={project1.title}
              desc={project1.desc}
              name={project1.name}
              time={project1.time}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default Project;
