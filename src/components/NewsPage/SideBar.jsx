import Link from 'next/link';
import React from 'react';

const leftSideBar = ({ catagory, isActive }) => {
    return (
        <div>
            <p className='font-semibold text-xl text-[#403F3F] mb-5'>
                All Caterogy
            </p>
            <ul className='space-y-5'>
                {
                    catagory.map(i =>
                        <li
                            className={`
                                ${isActive === catagory.category_id && 'bg-green-700'}
                                `}
                            key={i.category_id}>
                            <Link
                                href={'/'}
                                className={`font-medium text-[#9F9F9F] text-xl py-4 px-13`}>
                                {i.category_name}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default leftSideBar;