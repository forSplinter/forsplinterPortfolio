'use client'
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZoneName: "short",
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const socials = [
    { name: "Twitter", link: "https://twitter.com/codebydennis" },
    { name: "GitHub", link: "https://twitter.com/codebydennis" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/dennissnellenberg/" },
  ];

  return (
    <footer className="w-full bg-transparent px-[120px] py-8 flex flex-col items-center">
      {/* Texte central */}
      <div className="flex gap-2 items-center mb-12">
        <span className="text-[#1E1E1E] text-8xl font-extrabold font-['Plus_Jakarta_Sans']">Let’s</span>
        <span className="text-[#56ADCB] text-8xl font-extrabold font-['Plus_Jakarta_Sans']">engage</span>
        <span className="text-[#1E1E1E] text-8xl font-extrabold font-['Plus_Jakarta_Sans']">.</span>
      </div>

      {/* Bouton contact */}
      <button
        className="mb-56 inline-flex items-center gap-2 text-[#1E1E1E] underline underline-offset-8 
             hover:text-[#56ADCB] transition-colors duration-300 focus:outline-none 
             disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        Contact me
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            d="M8.85352 18.6934L16.0318 11.515L8.85352 4.33669"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="w-full flex flex-row justify-between items-start gap-12">
        <div className="flex flex-row gap-12  font-['Plus_Jakarta_Sans']">
          <div>
            <h5 className="text-lg text-[#434343] font-semibold">Version</h5>
            <p className="text-[#1E1E1E]">forSplinter © 2025</p>
          </div>
          <div>
            <h5 className="text-lg text-[#434343] font-semibold">Local time</h5>
            <p className="text-[#1E1E1E]">{time}</p>
          </div>
        </div>
        
        <div className="flex flex-col font-['Plus_Jakarta_Sans']">
          <h5 className="text-lg text-[#434343] font-semibold">Socials</h5>
          <ul className="flex gap-4 ">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E1E1E] hover:underline"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
