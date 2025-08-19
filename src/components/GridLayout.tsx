import React from "react";

export default function GridLayout() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <div className="h-full w-full bg-[#ECF6FF] relative overflow-hidden">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #d1e7ff 1px, transparent 0),
              linear-gradient(to bottom, #d1e7ff 1px, transparent 0)
            `,
            backgroundSize: "6rem 4rem",
            backgroundRepeat: "repeat",
          }}
        />
        {/* Right and bottom borders */}
        <div className="absolute top-0 right-0 h-full w-[1px] bg-[#d1e7ff]" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#d1e7ff]" />
      </div>
    </div>
  );
}
