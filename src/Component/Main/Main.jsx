import React from 'react';
import Hero from '../Hero/Hero';
import BooksList from '../BooksList/BooksList';
import { useLoaderData } from 'react-router';

const Main = () => {
    const Books = useLoaderData()
    return (
        <div>
            <Hero></Hero>
            <div className='md:w-10/12 mx-auto p-2'>
                <h1 className='text-2xl font-bold text-center py-10'>Books</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        Books.map(book => <BooksList key={book.bookId} book={book}></BooksList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;