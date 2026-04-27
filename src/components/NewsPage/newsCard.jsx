import Image from 'next/image';
import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoEye } from "react-icons/io5";

const NewsCard = ({ n }) => {
    return (

        <div className='bg-white border border-[#E7E7E7]'>
            <div className='flex justify-between items-center bg-[#F3F3F3] py-4 px-5 mb-3.5 rounded-1'>
                <div className='flex gap-4'>
                    <Image className='rounded-full' src={n.author?.img} width={50} height={40} alt={n.author} />
                    <div>
                        <p className='font-semibold text-[#403F3F]'>
                            {n.author.name}
                        </p>
                        <p className='text-sm text-[#706F6F]'>
                            {n.author.published_date}
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2.5 text-xl'>
                    <CiBookmark />
                    <CiShare2 />

                </div>
            </div>
            <h1 className='font-bold text-xl text-[#403F3F] leadign-9 mb-5 max-w-[80%] pl-5'>
                {n.title}
            </h1>
            <Image className='w-full mb-8 px-5' width={518} height={262} alt={n.title} src={n.image_url} />
            <p className='line-clamp-4 px-5 leadign-7 text-[#706F6F] mb-4'>
                {n.details}
            </p>
            <p className='font-semibold leading-7 pl-5 mb-5 text-[#FF8C47] '>
                Read More
            </p>
            <div className="divider px-5 mb-5"></div>
            <div className='flex justify-between items-center px-5 mb-5'>
                <span className='flex items-center justify-center gap-3 '>
                    <span className='flex gap-1  text-[#FF8C47] text-2xl'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </span>
                    <p className='text-[#706F6F]'>
                        {n.rating.number}
                    </p>
                </span>
                <span className=' text-[#706F6F] flex gap-2 items-center'>
                    <IoEye className='text-2xl' />
                    {n.total_view}
                </span>
            </div>

        </div>
    );
};

export default NewsCard;