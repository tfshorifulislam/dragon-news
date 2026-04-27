import { redirect } from 'next/navigation';
import React from 'react';

const id = '01'
const HomePage = () => {
  redirect(`/newsCategory/${id}`)
};

export default HomePage;