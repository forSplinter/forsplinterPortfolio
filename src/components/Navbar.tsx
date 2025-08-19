"use client";

import React from 'react';
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Navbar = () => {
    return (
        <nav>
            <header className="fixed inset-x-0 top-0 z-[99] bg-[#ecf6ff] dark:bg-background">
                <div className="w-full px-[120px] flex items-start justify-between pt-[32px] pb-4">
                    {/* Logo */}
                    <p className="w-fit font-extrabold text-[32px] tracking-[-1.92px]">
                        <span className="text-[#56adcb] tracking-[-0.61px]">For</span>
                        <span className="text-[#1e1e1e] tracking-[-0.61px]">Splinter</span>
                    </p>

                    {/* Menu gauche */}
                    <div className="flex flex-col justify-start gap-[3px]">
                        {["My projects", "About me", "Writings", "Photos&Artworks"].map((item, idx) => (
                            <div key={idx} className="font-bold text-[#56adcb] text-xl">
                                {item}
                            </div>
                        ))}
                    </div>

                    {/* Menu droit */}
                    <div className="flex flex-col justify-start w-[120px] gap-[3px]">
                        {["LinkedIn", "Github", "Apple Music"].map((item, idx) => (
                            <div key={idx} className="font-bold text-[#56adcb] text-xl">
                                {item}
                            </div>
                        ))}
                    </div>

                    {/* Bouton "Get started" */}
                    <button
                        className="
                        font-plus-jakarta-sans
                        text-[20px]
                        inline-flex justify-center items-center relative whitespace-nowrap
                        rounded-[42px] border-3 border-[#56adcb] h-[36px] px-4 gap-x-[10px]
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
