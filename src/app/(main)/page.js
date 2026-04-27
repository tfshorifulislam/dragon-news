import React from 'react';

import SideBar from '@/components/NewsPage/SideBar';
const dataFetch = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json()
  return data.data
}
const HomePage = async () => {
  const catagory = await dataFetch()

  return (
    <div className='grid grid-cols-12 w-11/12 mx-auto mt-20'>
      <div className='col-span-2'>
        <SideBar catagory={catagory} isActive={'01'} />
      </div>
      <div className='col-span-8'>

      </div>
      <div className='col-span-2'>

      </div>
    </div>
  );
};

export default HomePage;