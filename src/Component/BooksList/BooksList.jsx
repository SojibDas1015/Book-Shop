import React from 'react';
import Tag from './Tag';
import { FaStar } from "react-icons/fa6";


const BooksList = ({ book }) => {
    const { image, tags, bookName, author, category, rating } = book;
    console.log(image)
    return (
        <div className='border-1 rounded-xl border-gray-400 p-5'>
            <div className='bg-[#F3F3F3] px-20 rounded-lg py-6'>
                <img className='h-40 mx-auto' src={image} alt="" />
            </div>
            <div className='flex gap-2 py-4'>
                {
                    tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
                }
            </div>
            <h2 className='text-base font-bold'>{bookName}</h2>
            <p>By : {author}</p>
            <div className='border-b-1 border-dashed py-2'></div>
            <div className='flex justify-between'>
                <p>{category}</p>
                <p className='flex items-center gap-1'>{rating}<FaStar />
                </p>
            </div>
        </div>
    );
};

export default BooksList;