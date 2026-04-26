import React from 'react';


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
        <p className='font-semibold text-xl text-[#403F3F] mb-5'>
          All Caterogy
        </p>
        <div className='space-y-5'>
          {
            catagory.map(i =>
              <ul
                key={i.category_id}>
                <li className='font-medium text-[#9F9F9F] text-xl py-4 px-13'>
                  {i.category_name}
                </li>
              </ul>)
          }
        </div>
      </div>
      <div className='col-span-2'>

      </div>
      <div className='col-span-1'>

      </div>
    </div>
  );
};

export default HomePage;