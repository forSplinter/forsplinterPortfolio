import React from 'react';
import DotGridLayout from '../DotGridLayout';
import Image from 'next/image';
import flowerIcon from '@/assets/assets/flower 1.svg';

function Hero() {
  return (
    <div className="relative w-full h-[400px]">
      {/* DotGrid en arrière-plan */}
      <div className="absolute inset-0 -z-10">
        <DotGridLayout />
      </div>

      {/* Titre centré */}
      <div className="flex justify-center items-center h-full relative">
        <h1 className="font-plus-jakarta-sans font-extrabold text-transparent text-8xl tracking-[-5.76px] leading-[normal] whitespace-nowrap text-center relative">
          {/* Flower derrière "My" */}
          <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 -z-10">
            <Image src={flowerIcon} alt="Flower" width={364} height={364} />
          </span>

          <span className="text-[#1e1e1e] tracking-[-5.53px] relative z-10">My</span>
          <span className="text-[#56adcb] tracking-[-5.53px] ml-3 relative z-10">project</span>
          <span className="text-[#1e1e1e] tracking-[-5.53px] relative z-10">.</span>
        </h1>
      </div>
    </div>
  );
}

export default Hero;
