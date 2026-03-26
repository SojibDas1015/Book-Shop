import React from 'react';
import bookImage from '../../assets/books.jpg'

const Hero = () => {
    return (
        <div className='md:w-10/12 mx-auto p-2'>
            <div className="hero bg-[#F0F0F0] rounded-2xl min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse md:px-24">
                    <img
                        src={bookImage}
                        className="w-40 md:w-60 rounded-lg shadow-2xl"
                    />
                    <div className='space-y-8 text-center md:text-left'> 
                        <h1 className="text-xl md:text-5xl font-semibold ">Books to freshen up your bookshelf</h1>
                        <button className="btn rounded-lg bg-[#23BE0A] text-white">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;