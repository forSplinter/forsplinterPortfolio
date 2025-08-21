"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  const pages = [
    { label: "My Projects", href: "/projects" },
    { label: "About Me", href: "/about" },
    { label: "Writings", href: "/writings" },
    { label: "Photos & Artworks", href: "/photos" },
  ];

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dennissnellenberg/" },
    { label: "Github", href: "https://github.com/username" },
    { label: "Apple Music", href: "https://music.apple.com/" },
  ];

  return (
    <nav>
      <header className="fixed inset-x-0 top-0 z-[99] bg-[#ecf6ff] dark:bg-background">
        <div className="w-full px-[120px] flex items-start justify-between pt-[32px] pb-4">

          {/* Logo cliquable */}
          <Link href="/">
            <p className="w-fit font-extrabold text-[18px] tracking-[-1.92px] cursor-pointer">
              <span className="text-[#56adcb] tracking-[-0.61px]">For</span>
              <span className="text-[#1e1e1e] tracking-[-0.61px]">Splinter</span>
            </p>
          </Link>

          {/* Pages */}
          <div className="flex flex-col justify-start gap-[1px]">
            {pages.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="font-bold text-[#56adcb] text-[16px] hover:opacity-75 transition-opacity duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col justify-start w-[120px] gap-[1px]">
            {socials.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#56adcb] text-[16px] hover:opacity-70 transition-opacity duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Button Get Started */}
          <button
            className="
              font-plus-jakarta-sans
              text-[16px]
              inline-flex justify-center items-center relative whitespace-nowrap
              rounded-[15px] border-2 border-[#56adcb] h-[36px] px-4 gap-x-[10px]
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
            Get started
            <ArrowRightIcon className="relative -translate-x-0.5 scale-120 transition-transform duration-200 ease-in-out group-hover:translate-x-0.5" />
          </button>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
