'use client';
import React, { useEffect } from "react";
import GridLayout from "./GridLayout";
import { projects } from "../data";
import ProjectCard from "./card/ProjectCard";
import styles from './card/ProjectCard.module.css'
import {motion, useScroll} from 'framer-motion';
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

            {/* Grid background */}
            <div className="absolute top-[100px] left-[120px] right-[120px] px-[120px] h-[700px] -z-10">
                <GridLayout />
            </div>

            {/* Cards list */}
            <div className={styles.cardsWrapper}>
                {projects.map((project, index) => {
                    const targetScale = 1 - (projects.length - index) * 0.05;
                    return <ProjectCard key={index} i={index} {...project} progress={scrollYProgress} range={[index * 0.25, 1]}  targetScale={targetScale}/>
                })}
            </div>
            <div>
                <h1 className="ml-[120px] mt-[20px] font-plus-jakarta-sans font-extrabold text-transparent text-8xl tracking-[-5.76px] leading-[normal] whitespace-nowrap">
                    <span className="text-[#1e1e1e] tracking-[-5.53px]">My</span>
                    <span className="text-[#56adcb] tracking-[-5.53px] ml-3">project</span>
                    <span className="text-[#1e1e1e] tracking-[-5.53px]">.</span>
                </h1>
                <h1 className="ml-[120px] mt-[20px] font-plus-jakarta-sans font-extrabold text-transparent text-8xl tracking-[-5.76px] leading-[normal] whitespace-nowrap">
                    <span className="text-[#1e1e1e] tracking-[-5.53px]">My</span>
                    <span className="text-[#56adcb] tracking-[-5.53px] ml-3">project</span>
                    <span className="text-[#1e1e1e] tracking-[-5.53px]">.</span>
                </h1>
                <h1 className="ml-[120px] mt-[20px] font-plus-jakarta-sans font-extrabold text-transparent text-8xl tracking-[-5.76px] leading-[normal] whitespace-nowrap">
                    <span className="text-[#1e1e1e] tracking-[-5.53px]">My</span>
                    <span className="text-[#56adcb] tracking-[-5.53px] ml-3">project</span>
                    <span className="text-[#1e1e1e] tracking-[-5.53px]">.</span>
                </h1>
                <h1 className="ml-[120px] mt-[20px] font-plus-jakarta-sans font-extrabold text-transparent text-8xl tracking-[-5.76px] leading-[normal] whitespace-nowrap">
                    <span className="text-[#1e1e1e] tracking-[-5.53px]">My</span>
                    <span className="text-[#56adcb] tracking-[-5.53px] ml-3">project</span>
                    <span className="text-[#1e1e1e] tracking-[-5.53px]">.</span>
                </h1>
            </div>
        </div>
    );
};

export default MyProject;
