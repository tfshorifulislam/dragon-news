import React from 'react';

import SideBar from '@/components/NewsPage/SideBar';
const dataFetch = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json()
  return data.data.news_category
}
const HomePage = async () => {
  const catagory = await dataFetch()

  return (
    <div className='grid grid-cols-4 w-11/12 mx-auto mt-20'>
      <div className='col-span-1'>
        <SideBar catagory={catagory} isActive={'05'} />
      </div>
      <div className='col-span-2'>

      </div>
      <div className='col-span-1'>

      </div>
    </div>
  );
};

export default HomePage;