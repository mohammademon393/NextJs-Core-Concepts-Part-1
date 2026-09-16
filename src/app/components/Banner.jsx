"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router = useRouter();
    
    const handleBtn =()=>{
        const password = prompt("Please enter your password:");
        if (password === "1234") {
            router.push('/dashboard');
        }
    }

    return (
        <div className='bg-gradient-to-r from-sky-300 to-sky-100 text-black py-8 px-4 text-center rounded'>
            <h1 className='font-bold text-5xl'>Welcome to Dev-Story</h1>
            <p className='mt-4 text-lg'>Your one-stop platform for learning and sharing development stories.</p>
            <button onClick={handleBtn} className='mt-6 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 cursor-pointer duration-75'>Share Story</button>
        </div>
    );
};

export default Banner;