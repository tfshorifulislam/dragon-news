'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ href, children }) => {
    const pathName = usePathname()
    const isActive = href === pathName
    return (
        <Link
            className={`${isActive ? 'border-b border-[#D72050]' : ''}`}
            href={href}>
            {children}
        </Link>
    );
};

export default Navlink;