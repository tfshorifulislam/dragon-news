import Link from 'next/link';
import React from 'react';

const leftSideBar = ({ catagory, isActive }) => {
    return (
        <div>
            <p className='font-semibold text-xl text-[#403F3F] mb-5'>
                All Category
            </p>
            <ul className='space-y-5 text-center g'>
                {
                    catagory.news_category.map(i =>
                        <li
                            className={`
                                ${isActive === i.category_id && 'bg-[#E7E7E7] py-4 px-13'}
                                `}
                            key={i.category_id}>
                            <Link
                                href={`/newsCategory/${i.category_id}`}
                                className={`font-medium text-[#9F9F9F] text-xl`}>
                                {i.category_name}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default leftSideBar;