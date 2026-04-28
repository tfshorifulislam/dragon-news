import Header from '@/components/Header/Header';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Header />
            <Navbar />
            {children}
        </div>
    );
};

export default layout;