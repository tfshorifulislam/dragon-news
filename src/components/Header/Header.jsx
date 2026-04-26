import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";
const Header = () => {
    return (
        <div>
            <div className='flex justify-center my-5  '>
                <Image src={logo} width={300} height={200} alt='Logo' />
            </div>
            <p className='text-lg leading-8 text-[#706F6F] text-center mb-2.5'>
                Journalism Without Fear or Favour
            </p>
            <div className='flex justify-center mb-6 font-medium text-xl'>
                {
                    format(new Date(), "EEEE, MMM dd, yyyy")}
            </div>
        </div>
    );
};

export default Header;