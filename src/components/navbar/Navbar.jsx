import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import avatar from '@/assets/user.png'
import Navlink from '../navlink/Navlink';
const Navbar = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between items-center mt-5 mx-auto w-11/12'>
            <div className='hidden md:flex'></div>
            <div>
                <ul className='flex items-center justify-center gap-6'>
                    <li>
                        <Navlink href={'/'}>Home</Navlink>
                    </li>
                    <li>
                        <Navlink href={'/about'}>About</Navlink>
                    </li>
                    <li>
                        <Navlink href={'/career'}>Career</Navlink>
                    </li>
                </ul>
            </div>
            <div className='flex justify-center items-center gap-3 mb-4 md:mb-0 mt-3 md:mt-0'>
                <Image src={avatar} weidth={41} height={41} alt='avatar' />
                <button className='bg-[#403F3F] font-medium md:font-semibold text-lg  md:text-xl text-white py-1 md:py-3 px-3 md:px-11'>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;