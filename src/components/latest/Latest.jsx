import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='p-2 md:p-4 bg-[#F3F3F3] flex flex-col-reverse sm:flex-row items-center '>
            <button
                className='px-2 md:px-6 py-1 md:py-2 bg-[#D72050] text-white font-normal md:font-medium text-lg md:text-xl mr-5 cursor-pointer'>
                Latest
            </button>
            <Marquee className='text-sm md:text-lg font-medium md:font-semibold text-[#403F3F] mb-2 sm:mb-0'>
                Match Highlights: Germany vs Spain as it happened — Spain controlled possession, Germany threatened on counters, and after a tight battle with late drama, Spain came out on top.
            </Marquee>
        </div>
    );
};

export default Latest;