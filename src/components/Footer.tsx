import React from "react";
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="relative w-full h-80 bg-transparent px-[120px] py-8">
      {/* Menu principal */}
      <div className="absolute top-[299px] left-0 w-full px-[120px] flex items-center justify-between">
        <div className="text-black text-xl font-normal font-['Plus_Jakarta_Sans']">
          forSplinter © 2025
        </div>

        <div className="flex items-end gap-1">
          <div className="text-black text-xl font-normal font-['Plus_Jakarta_Sans']">
            FR
          </div>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_0_1056)">
              <path
                d="M4.30664 8.88281L11.485 16.0611L18.6633 8.88281"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_1056">
                <rect
                  width="16.2427"
                  height="16.2427"
                  fill="white"
                  transform="translate(11.4854 0.0292969) rotate(45)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="flex items-start gap-6 ml-16">
          <div className="text-[#56ADCB] text-xl font-medium font-['Plus_Jakarta_Sans'] cursor-pointer hover:underline">
            My projects
          </div>
          <div className="text-[#56ADCB] text-xl font-medium font-['Plus_Jakarta_Sans'] cursor-pointer hover:underline">
            About me
          </div>
          <div className="text-[#56ADCB] text-xl font-medium font-['Plus_Jakarta_Sans'] cursor-pointer hover:underline">
            Writings
          </div>
          <div className="text-[#56ADCB] text-xl font-medium font-['Plus_Jakarta_Sans'] cursor-pointer hover:underline">
            Get in touch
          </div>
        </div>
      </div>
      
      {/* Texte central */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-2 items-center">
        <span className="text-[#1E1E1E] text-8xl font-extrabold font-['Plus_Jakarta_Sans']">Let’s</span>
        <span className="text-[#56ADCB] text-8xl font-extrabold font-['Plus_Jakarta_Sans']">engage</span>
        <span className="text-[#1E1E1E] text-8xl font-extrabold font-['Plus_Jakarta_Sans']">.</span>
      </div>

      {/* Bouton contact */}
      <button className="absolute top-[135px] left-1/2 -translate-x-1/2 w-32 h-10 rounded-2xl border-2 border-[#56ADCB] text-[#56ADCB] font-bold font-['Plus_Jakarta_Sans'] capitalize flex items-center justify-center bg-transparent hover:bg-[#56ADCB] hover:text-white transition-colors duration-300">
        Contact me
      </button>
    </div>
  );
}
