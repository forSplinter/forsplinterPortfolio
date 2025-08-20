import React from "react";

export default function DotGridLayout() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10" style={{ backgroundColor: "#ECF6FF" }}>
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "radial-gradient(rgba(30,30,30,0.2) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          WebkitMaskImage:
            "radial-gradient(ellipse 50% 50% at 50% 50%, black 70%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage:
            "radial-gradient(ellipse 50% 50% at 50% 50%, black 70%, transparent 100%)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      />
    </div>
  );
}
