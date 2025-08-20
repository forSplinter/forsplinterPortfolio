"use client";

import React from "react";
import DotGridLayout from "./DotGridLayout";
import ArrowButton from "./ArrowButton";

const sections = [
  {
    title: "Unlocking the potential of vision language models on satellite imagery through fine-tuning",
    description:
      "Faites de votre IA la vôtre. Entraînez, distillez, affinez et construisez avec les meilleurs modèles open source au monde.",
    link: "#",
  },
  {
    title: "Another exciting section title here",
    description: "Description for the second section goes here.",
    link: "#",
  },
  // Ajoute autant de sections que tu veux ici
];

export default function Writtings() {
  return (
    <div className="relative">
      <h1 className="mr-[120px] mt-[20px] text-right font-plus-jakarta-sans font-extrabold text-transparent text-8xl tracking-[-5.76px] leading-[normal] whitespace-nowrap">
        <span className="text-[#56adcb] tracking-[-5.53px]">My</span>
        <span className="text-[#1e1e1e] tracking-[-5.53px]">Writtings</span>
        <span className="text-[#1e1e1e] tracking-[-5.53px]">.</span>
      </h1>

      <div className="absolute top-[100px] left-[120px] right-[120px] px-[120px] h-[1100px] -z-10">
        <DotGridLayout />
      </div>

      <div className="relative z-10 mx-[120px]">
        <div className="w-[1100px] divide-y divide-[#56ADCB] border-y border-y-[#56ADCB]">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-[32px] py-8">
              <h4 className="text-[32px] font-plus-jakarta-sans font-bold text-[#1E1E1E] max-w-[900px]">
                {section.title}
              </h4>
              <div className="flex items-start gap-8">
                <p className="text-[18px] font-ibm-plex-sans text-[#1E1E1E] max-w-[600px]">
                  {section.description}
                </p>
                <ArrowButton href={section.link} />
              </div>
            </div>
          ))}
        </div>

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
}
