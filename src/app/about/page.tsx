import React from 'react';

const About = () => {
    return (
        <section className='about h-screen flex items-center justify-start bg-cover bg-center text-white px-10' style={{ backgroundImage:"url('/bg1.jpg')",}}>
        <div className='bg-black bg-opacity-60 p-8 rounded-md max-w-lg'>
            <h2 className='text-4xl font-bold mb-4' data-aos="fade-up">About Us</h2>
            <p>Welcome to Scented,where you will found fragrance of your own desire.Inhale confidence, exhale elegance. ...Perfume is the only way to turn any boring day into an enigmatic one.
            </p>
        </div>
        </section>
    );
};

export default About;