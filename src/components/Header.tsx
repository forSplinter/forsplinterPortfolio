import React from 'react';
import Image from 'next/image';
import lkIcon from "@/assets/LK_logo.svg";
import appleMusicIcon from "@/assets/apple_music.svg";
import githubIcon from "@/assets/git.svg";
import miyamotoSMask from "@/assets/miyamoto_background.svg";


function Header() {
    return (
        <div className="relative">
            <div className="mt-16 mx-[120px]">
                <div className="text-right mt-4 font-plus-jakarta-sans font-bold text-base text-[#56adcb]">
                    ©2025
                </div>
                <div className="border-t-2 border-[#56adcb] w-full" />
            </div>

            <h1 className=" ml-[120px] mt-[19px] font-plus-jakarta-sans font-extrabold text-transparent text-8xl tracking-[-5.76px] leading-[normal] whitespace-nowrap">
                <span className="text-[#1e1e1e] tracking-[-5.53px]">About</span>
                <span className="text-[#56adcb] tracking-[-5.53px] ml-3">me</span>
                <span className="text-[#1e1e1e] tracking-[-5.53px]">.</span>
            </h1>
            <div className='flex items-center justify-between ml-[120px] mt-6 mr-[120px]'>
                <p className="font-ibm-plex-sans text-base text-[#1e1e1e] max-w-[435px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className='flex items-center gap-3'>
                    <a href="https://music.apple.com/" target="_blank" rel="noopener noreferrer">
                        <Image src={appleMusicIcon} alt="Apple Music" width={38} height={38} />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <Image src={lkIcon} alt="LinkedIn" width={47} height={38} />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <Image src={githubIcon} alt="GitHub" width={40} height={40} />
                    </a>
                </div>

            </div>
            <div className="relative flex flex-col items-center mt">
                <Image src={miyamotoSMask} alt='' width={800} height={1000} />
                <h1
                    className="absolute top-[78%] left-0 w-full px-[235px] pr-[247px] font-plus-jakarta-sans font-bold text-[128px] text-[#56adcb] tracking-[0] leading-[normal] text-center"
                >
                    開発者&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;コーディング
                </h1>
                <div className="mt w-full max-w-[calc(100%-239px)] border-t-2 border-[#56adcb]" />
            </div>

        </div>
    );
}

export default Header;
