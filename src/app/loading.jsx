import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4">
            
            <span className="loading loading-spinner loading-xl text-indigo-600"></span>

            <p className="text-gray-600 text-lg">
                Loading news...
            </p>

        </div>
    );
};

export default Loading;