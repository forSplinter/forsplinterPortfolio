import React from 'react'

function ButtonType() {
    return (
        <div>
            <button
                className="
                                      font-plus-jakarta-sans
                                      text-[20px]
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
                See more
            </button>

        </div>
    )
}

export default ButtonType
