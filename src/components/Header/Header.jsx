import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";
import Latest from '../latest/Latest';

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
            <Latest />
        </div>
    );
};

export default Header;