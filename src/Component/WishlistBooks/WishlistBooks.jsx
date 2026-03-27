import React from 'react';
import Tag from '../BooksList/Tag';
import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from 'react-icons/go';
import { MdOutlineInsertPageBreak } from 'react-icons/md';
import { NavLink } from 'react-router';

const WishlistBooks = ({ book }) => {
    const { image, bookName, author, category, bookId, tags, totalPages, publisher, yearOfPublishing, rating } = book
    return (
        <div className='border-1 p-4 rounded-2xl mb-8 border-gray-400'>
            <div className="flex lg:flex-row gap-10">
                <img
                    src={image}
                    className="w-40 md:max-w-sm rounded-lg bg-base-300 p-8"
                />
                <div className='space-y-2'>
                    <h1 className="text-3xl font-bold">{bookName}</h1>
                    <p className=''>By : {author}</p>
                    <div className='flex gap-2'> <span className='font-bold'>Tag : </span>
                        {
                            tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
                        }
                        <p className='flex items-center gap-2'><IoLocationOutline size={20} />
                            Year of Publishing : {yearOfPublishing}</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='flex items-center gap-2'><GoPeople size={20} /> Publisher : {publisher}</p>
                        <p className='flex items-center gap-2'><MdOutlineInsertPageBreak size={20} /> Page : {totalPages}</p>
                    </div>
                    <div className='border-1 border-gray-400'></div>
                    <div className='flex items-center gap-3'>
                        <p className='bg-[#328eff31] text-[#328EFF] px-2 py-0.5 lg:px-5 lg:py-2 rounded-3xl cursor-pointer'> Category: {category}</p>
                        <p className='bg-[#ffad331f] text-[#FFAC33] px-2 py-0.5 lg:px-5 lg:py-2 rounded-3xl cursor-pointer'>Rating : {rating}</p>
                        <NavLink to={`/${bookId}`}>
                            <p className='bg-[#23BE0A] text-white px-2 py-0.5 lg:px-5 lg:py-2 rounded-3xl cursor-pointer'>View Details</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistBooks;