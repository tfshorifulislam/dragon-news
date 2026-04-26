import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";
import Marquee from 'react-fast-marquee';
const Header = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-center my-5'>
                <Image src={logo} width={300} height={200} alt='Logo' />
            </div>
            <p className='text-sm md:text-lg leading-8 text-[#706F6F] text-center mb-1 md:mb-2.5'>
                Journalism Without Fear or Favour
            </p>
            <div className='flex justify-center mb-3 md:mb-6 md:font-medium text-lg md:text-xl'>
                {
                    format(new Date(), "EEEE, MMM dd, yyyy")}
            </div>
            <div className='p-2 md:p-4 bg-[#F3F3F3] flex flex-col-reverse sm:flex-row items-center '>
                <button
                    className='px-2 md:px-6 py-1 md:py-2 bg-[#D72050] text-white font-normal md:font-medium text-lg md:text-xl mr-5 cursor-pointer'>
                    Latest
                </button>
                <Marquee className='text-sm md:text-lg font-medium md:font-semibold text-[#403F3F] mb-2 sm:mb-0'>
                    Match Highlights: Germany vs Spain as it happened — Spain controlled possession, Germany threatened on counters, and after a tight battle with late drama, Spain came out on top.
                </Marquee>
            </div>
        </div>
    );
};

export default Header;