import React from "react";

export default function Footer() {
  return (
    <div className="relative w-full h-80 bg-transparent px-32 py-8">
      {/* Menu principal */}
      <div className="absolute top-[299px] left-0 flex items-center gap-16">
        <div className="text-black text-xl font-normal font-['Plus_Jakarta_Sans']">
          forSplinter © 2025
        </div>

        <div className="flex items-end gap-1">
          <div className="text-black text-xl font-normal font-['Plus_Jakarta_Sans']">FR</div>
          <div className="w-2 h-2 border-b-2 border-r-2 border-black rotate-45 origin-top-left" />
        </div>

        <div className="flex items-start gap-6">
          <div className="text-blue-400 text-xl font-bold font-['Plus_Jakarta_Sans'] cursor-pointer hover:underline">
            My projects
          </div>
          <div className="text-blue-400 text-xl font-bold font-['Plus_Jakarta_Sans'] cursor-pointer hover:underline">
            About me
          </div>
          <div className="text-blue-400 text-xl font-bold font-['Plus_Jakarta_Sans'] cursor-pointer hover:underline">
            Writings
          </div>
          <div className="text-blue-400 text-xl font-bold font-['Plus_Jakarta_Sans'] cursor-pointer hover:underline">
            Get in touch
          </div>
        </div>
      </div>

      {/* Texte principal */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-2 items-center">
        <span className="text-stone-900 text-8xl font-extrabold font-['Plus_Jakarta_Sans']">Let’s</span>
        <span className="text-blue-400 text-8xl font-extrabold font-['Plus_Jakarta_Sans']">engage</span>
        <span className="text-stone-900 text-8xl font-extrabold font-['Plus_Jakarta_Sans']">.</span>
      </div>

      {/* Bouton contact */}
      <button className="absolute top-[135px] left-1/2 -translate-x-1/2 w-32 h-10 rounded-2xl border-2 border-blue-400 text-blue-400 font-bold font-['Plus_Jakarta_Sans'] capitalize flex items-center justify-center bg-transparent hover:bg-blue-400 hover:text-white transition-colors duration-200">
        Contact me
      </button>
    </div>
  );
}
