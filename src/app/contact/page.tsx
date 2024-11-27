import React from "react";

const Contact = () => {
    return (
        <section className="contact-form  border max-w-lg mx-auto my-20 p-8  bg-pink-300 shadow-md rounded-md">
        
        <h2 className="text-4xl font-bold mb-6 text-center" data-aos="fade-up">Contact Us</h2>
        <form>
        <input type="text" placeholder="Full Name" className="w-full mb-4 px-4 py-2 border border-purple-500 rounded-md" required/>
        <input type="email" placeholder="Email Address" className="w-full mb-4 px-4 py-2 border border-purple-500"required/>
        <input type="text" placeholder="Contact No" className="w-full mb-4 px-4 py-2 border border-purple-500 rounded-md" />
        <textarea placeholder="Type query" className="w-full mb-4 px-4 py-2 border border-purple-500 rounded-md" rows={6} required></textarea>
        <button type="submit" className="w-full bg-black text-white py-2 rounded-md">Contact Now</button>
        </form>
        </section>
    );
};

export default Contact;