import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Tag from '../../Component/BooksList/Tag';

const BookDetails = () => {
    const { id } = useParams();
    const paramId = parseInt(id);
    const books = useLoaderData()
    const specificBook = books.find(book => paramId === book.bookId)
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = specificBook;
    return (
        <div className='md:w-10/12 mx-auto p-2'>
            <div className="hero  min-h-screen py-5">
                <div className="md:hero-content flex-col lg:flex-row gap-10">
                    <img
                        src={image}
                        className="md:max-w-sm rounded-lg bg-base-300 p-10"
                    />
                    <div className='space-y-2'>
                        <h1 className="text-3xl font-bold">{bookName}</h1>
                        <p className=''>By : {author}</p>
                        <p className='border-y-1 py-2 font-bold text-gray-800'>{category}</p>
                        <p> <span className='font-bold'>Review : </span>
                            {review}
                        </p>
                        <div className='flex gap-2'> <span className='font-bold'>Tag : </span>
                            {
                                tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
                            }
                        </div>
                        <p>Number of Page : {totalPages}</p>
                        <p>Publisher : {publisher}</p>
                        <p>Year of Publishing : {yearOfPublishing}</p>
                        <p>Rating : {rating}</p>
                        <div className="navbar-start gap-3 md:text-lg font-semibold">
                            <a className="border-1 border-[#23BE0A] text-black px-2 py-0.5 lg:px-5 lg:py-2 rounded-lg cursor-pointer">Read</a>
                            <a className="bg-[#59C6D2] text-white px-2 py-0.5 lg:px-5 lg:py-2 rounded-lg cursor-pointer">Wishlist</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;