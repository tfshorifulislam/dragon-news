import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div className='flex justify-center items-center h-[70vh]'>
            <fieldset className="fieldset space-y-4 bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral my-4">Login</button>
                <p className='flex justify-center'>
                    don't have an account? <Link className='font-medium underline' href={'/signin'}>Register</Link>
                </p>
            </fieldset>
        </div>
    );
};

export default LoginPage;