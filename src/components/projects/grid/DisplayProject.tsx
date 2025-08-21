'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface DisplayProjectProps {
  title: string;
  description: string;
  image?: StaticImageData;
  link?: string;
}

const DisplayProject: React.FC<DisplayProjectProps> = ({ title, description, image, link }) => {
  return (
    <div className="mb-6 relative group">
      {image && (
        <a
          href={link ?? '#'}
          target={link ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="block relative overflow-hidden"
        >
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full object-cover"
          />
          {/* Overlay noir au hover */}
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
        </a>
      )}

      <h3 className="mt-2 font-ibm-plex-sans font-bold text-[16px] text-[#434343]">{title}</h3>
      <p className="font-ibm-plex-sans text-[16px] font-medium text-[#6d6d6d]">{description}</p>
    </div>
  );
};

export default DisplayProject;
