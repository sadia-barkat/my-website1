import React from "react";

const Scents = ()=> {
    const scentData=[
        {id:  1, name: "Passion" , price: "5000" , description: "Expressive Scent"  , image: '/bg3.jpeg'},
        {id:  2, name:  "Savage", price:  "4500", description: "Just Perfect" , image: '/DSC_0091.webp'},
        {id:  3, name:  "Intense", price: "5200" , description: "Shows Intense Mood" , image: '/images (1).jpg'},
        {id:  4, name: "Eternity" , price: "8000" , description: "Just Heaven"  , image: '/bg4.jpg'},
        {id:  5, name:  "Oud", price: "4500" , description: "Affordable and Nature Loved" , image: '/bg6.jpg'},
        {id:  6, name: "Baco" , price: "7000" , description: "For Strong Presence" , image: '/images.jpg'},
    ];

    return(
        <div className="scents grid grid-col-1 md:grid-cols-3 gap-10 px-10 my-10">
        {scentData.map((Scent) => (
            <div key={Scent.id}className="scents-card bg-white p-5 rounded-md shadow-md text-center">
                <img src={Scent.image} alt={Scents.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"/>
                <h3 className="mt-4 text-2xl font-bold">{Scents.name}</h3>
                <p className="text-gray-500>">{Scent.description}</p>
                <div className="price text-purple-700 text-xl font-semibold mt-2">${Scent.price}</div>
                <button className="mt-4 px-4 py-2 bg-black text-white rounded-md">Add to cart</button>
            </div>
        ))}
        </div>
    );
};

export default Scents;