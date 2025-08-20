import React from "react";
import GridLayout from "./GridLayout";
import { projects } from "../data";
import ProjectCard from "./card/ProjectCard";

const MyProject = () => {
  return (
    <div className="relative">
      <h1 className="ml-[120px] mt-[20px] font-plus-jakarta-sans font-extrabold text-transparent text-8xl tracking-[-5.76px] leading-[normal] whitespace-nowrap">
        <span className="text-[#1e1e1e] tracking-[-5.53px]">My</span>
        <span className="text-[#56adcb] tracking-[-5.53px] ml-3">project</span>
        <span className="text-[#1e1e1e] tracking-[-5.53px]">.</span>
      </h1>

      {/* Grid background */}
      <div className="absolute top-[100px] left-[120px] right-[120px] px-[120px] h-[700px] -z-10">
        <GridLayout />
      </div>

      {/* Cards list */}
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default MyProject;
