import React from 'react';

import SideBar from '@/components/NewsPage/SideBar';
import RightSideBar from '@/components/NewsPage/RightSideBar';


const dataFetch = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json()
    return data.data
}

const getNewsByCategoryId = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
    const data = await res.json()
    return data.data
}


const NewsCategoryPage = async ({ params }) => {
    const { id } = await params
    const catagory = await dataFetch()
    const news = await getNewsByCategoryId(id)


    return (
        <div className='grid grid-cols-12 w-11/12 mx-auto mt-20 gap-6'>
            <div className='col-span-3'>
                <SideBar catagory={catagory} isActive={id} />
            </div>
            <div className='col-span-6'>
                <div>
                    {
                        news.length > 0 ? news.map(n => <div key={n._id}>
                            {
                                n.title
                            }
                        </div>)
                            : (<div
                                className="flex items-center justify-center min-h-[60vh]">
                                <div
                                    className="bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-200">
                                    <h1
                                        className="text-2xl font-semibold text-gray-800 mb-2">
                                        No News Found
                                    </h1>
                                    <p
                                        className="text-gray-500">
                                        Sorry, we couldn’t find any news in this category.
                                    </p>
                                </div>
                            </div>)
                    }
                </div>
            </div>
            <div className='col-span-3'>
                <RightSideBar />
            </div>
        </div>
    );
};

export default NewsCategoryPage;