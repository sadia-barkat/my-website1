"use cliet";

import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const HomeContent = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once:true,
        });
    },[]);
    return(
        <section className='hero h-screen flex items-center bg-cover bg-center' style={{ backgroundImage:"url('/background.jpg')"}}>
            <div className='pl-0 md:pl-16 text-white text-center'>
                <h1 className='text-6xl font-bold drop-shadow-md' data-aos="fade-up">Welcome to World of Scents</h1>
                <p className='text-2xl mt-10 '>All types of fragrances on one stop</p>
                <button className='mt-6 px-6 py-3 bg-purple-950 hover:bg-purple-400 rounded-md font-extrabold'>Order Now</button>
            </div>
        </section>
    );
};

export default HomeContent;