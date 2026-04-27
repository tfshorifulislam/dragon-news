import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const RightSideBar = () => {
    return (
        <div>
            <h1 className='text-black text-xl font-semibold mb-6 '>
                Login With
            </h1>
            <div className='space-y-4 mb-8'>
                <button className="btn bg-white w-full text-black border-[#e5e5e5] rounded-sm ">
                    <FaGoogle /> Login with Google
                </button>
                <button className="btn w-full bg-white text-black border-[#e5e5e5] rounded-sm ">
                    <FaGithub /> Login with Github
                </button>
            </div>

            <div>
                <p className='font-semibold text-xl mb-5 text-[#403F3F]'>
                    Find Us On
                </p>
                <div className='border border-[#e5e5e5]'>
                    <button className="btn py-6 bg-white w-full text-black border-[#e5e5e5] rounded-sm ">
                        <FaFacebook /> Login with Facebook
                    </button><button className="btn py-6 bg-white w-full text-black border-[#e5e5e5] rounded-sm ">
                        <FaInstagramSquare /> Login with Instagram
                    </button><button className="btn py-6 bg-white w-full text-black border-[#e5e5e5] rounded-sm ">
                        <FaTwitterSquare /> Login with Twitter
                    </button>
                </div>
            </div>

        </div>
    );
};

export default RightSideBar;