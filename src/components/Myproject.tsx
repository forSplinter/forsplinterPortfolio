import React from "react";
import GridLayout from "./GridLayout";

const Myproject = () => {
    return (
        <div className="relative">
            <h1 className="ml-[120px] mt-[20px] font-plus-jakarta-sans font-extrabold text-transparent text-8xl tracking-[-5.76px] leading-[normal] whitespace-nowrap">
                <span className="text-[#1e1e1e] tracking-[-5.53px]">My</span>
                <span className="text-[#56adcb] tracking-[-5.53px] ml-3">project</span>
                <span className="text-[#1e1e1e] tracking-[-5.53px]">.</span>
            </h1>
            {/* Grid background only for this section with offset */}
            <div className="absolute top-[100px] left-[120px] right-[120px] px-[120px] h-[700px] -z-10">
                <GridLayout />
            </div>

        </div>
    );
};

export default Myproject;
