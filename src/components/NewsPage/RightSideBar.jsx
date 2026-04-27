import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RightSideBar = () => {
    return (
        <div>
            <h1 className='text-black font-semibold mb-6 '>
                Login With
            </h1>
            <div className='space-y-4'>
                <button className="btn bg-white text-black border-[#e5e5e5] rounded-sm ">
                    <FaGoogle /> Login with Google
                </button>
                <button className="btn bg-white text-black border-[#e5e5e5] rounded-sm ">
                    <FaGithub /> Login with Github
                </button>
            </div>

        </div>
    );
};

export default RightSideBar;