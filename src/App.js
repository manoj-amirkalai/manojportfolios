import React from "react";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Project from "./components/project/Project";
import Skill from "./components/skill/Skill";
import Topcontainer from "./components/Topcontainer/Topcontainer";
import Contacts from "./components/Contacts/Contacts"

export default function App() {
  return (
    
    <div>
      <Header />
      <Topcontainer />
      <Skill />
      <Project />
      <Experience />
      <Contacts />
    </div>
  );
}
