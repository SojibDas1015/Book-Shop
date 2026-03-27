import React from 'react';
import Tag from '../BooksList/Tag';
import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from 'react-icons/go';
import { MdOutlineInsertPageBreak } from 'react-icons/md';
import { NavLink } from 'react-router';

const WishlistBooks = ({ book }) => {
    const { image, bookName, author, category, bookId, tags, totalPages, publisher, yearOfPublishing, rating } = book
    return (
        <div className='border-1 p-2 md:p-4 rounded-2xl mb-8 border-gray-400'>
            <div className="flex lg:flex-row gap-1 md:gap-10">
                <img
                    src={image}
                    className="w-40 md:max-w-sm rounded-lg bg-base-300 p-2 md:p-8"
                />
                <div className='space-y-2 text-xs md:text-base'>
                    <h1 className="md:text-3xl font-bold">{bookName}</h1>
                    <p className=''>By : {author}</p>
                    <div className='md:flex gap-2 space-y-3 md:space-y-0'> 
                        <p className='font-bold'>Tag : </p>
                        {
                            tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
                        }
                        <p className='flex items-center gap-2'><IoLocationOutline size={20} />
                            Year of Publishing : {yearOfPublishing}</p>
                    </div>
                    <div className='md:flex items-center gap-3 space-y-3 md:space-y-0'>
                        <p className='flex items-center gap-2'><GoPeople size={20} /> Publisher : {publisher}</p>
                        <p className='flex items-center gap-2'><MdOutlineInsertPageBreak size={20} /> Page : {totalPages}</p>
                    </div>
                    <div className='border-1 border-gray-400'></div>
                    <div className='md:flex items-center gap-3 text-xs md:text-base space-y-3 md:space-y-0'>
                        <button className='bg-[#328eff31] text-[#328EFF] px-1 py-0.5 lg:px-5 lg:py-2 rounded-3xl cursor-pointer'> Category: {category}</button>
                        <button className='bg-[#ffad331f] text-[#FFAC33] px-2 py-0.5 lg:px-5 lg:py-2 rounded-3xl cursor-pointer'>Rating : {rating}</button>
                        <NavLink to={`/${bookId}`}>
                            <button  className='bg-[#23BE0A] text-white px-2 py-0.5 lg:px-5 lg:py-2 rounded-3xl cursor-pointer'>View Details</button >
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistBooks;