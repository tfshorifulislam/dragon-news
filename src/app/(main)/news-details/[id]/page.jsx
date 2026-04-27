import NewsCard from '@/components/NewsPage/newsCard';
import { getNewsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params
    const news = await getNewsById(id)
    console.log(news)

    return (
        <div
            className='max-w-5xl mx-auto my-10 p-8 border border-[#E7E7E7] rounded-md'>
            {
                news.data.map(n => <div key={n._id}>
                    <figure>
                        <Image
                            className='w-full mb-5'
                            width={789}
                            height={411}
                            src={n.image_url}
                            alt={n.title} />
                    </figure>
                    <div
                        className="card-body">
                        <h2
                            className='font-bold text-xl text-[#403F3F] leadign-9 mb-5'>
                            {n.title}
                        </h2>
                        <p
                            className='leadign-7 text-[#706F6F] mb-4'>
                            {n.details}
                        </p>
                        <div>
                            <Link
                                href={'/'}>
                                <button
                                    className='flex items-center gap-3 text-xl font-medium text-white btn border-none bg-[#D72050] '>
                                    <FaArrowLeftLong /> All news in this category
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default NewsDetailsPage;