'use client';
import React, { useEffect } from "react";
import GridLayout from "./GridLayout";
import { projects } from "../data";
import ProjectCard from "./card/ProjectCard";
import { motion, useScroll } from 'framer-motion';
import { useRef } from "react";

const MyProject = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container.current ?? undefined,
        offset: ["start start", "end end"]
    })

    return (
        <div className="relative">
            <h1 className="ml-[120px] mt-[20px] font-plus-jakarta-sans font-extrabold text-transparent text-8xl tracking-[-5.76px] leading-[normal] whitespace-nowrap">
                <span className="text-[#1e1e1e] tracking-[-5.53px]">My</span>
                <span className="text-[#56adcb] tracking-[-5.53px] ml-3">project</span>
                <span className="text-[#1e1e1e] tracking-[-5.53px]">.</span>
            </h1>

            <div className="absolute top-[100px] left-[120px] right-[120px] px-[120px] h-[700px] -z-10">
                <GridLayout />
            </div>

            <div>
                {projects.map((project, index) => {
                    const targetScale = 1 - (projects.length - index) * 0.05;
                    return <ProjectCard key={index} i={index} {...project} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} />
                })}
                <div className="mt-27 flex justify-center">
                    <button
                        className="
                                        font-plus-jakarta-sans
                                        text-[20px]
                                        inline-flex justify-center items-center relative whitespace-nowrap
                                        rounded-[15px] border-3 border-[#56adcb] h-[36px] px-4 gap-x-[10px]
                                        bg-transparent text-[#56adcb] font-bold
                                        hover:bg-black hover:text-white hover:border-transparent
                                        transition-colors duration-200 ease-in-out
                                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background
                                        disabled:pointer-events-none disabled:opacity-50
                                        [&_svg]:pointer-events-none [&_svg]:w-4 [&_svg]:h-4 [&_svg]:shrink-0
                                        group
                                        "
                        aria-label="Get started"
                    >
                        See more
                    </button>
                </div>

                </div>
            </div>
            );
};

            export default MyProject;
