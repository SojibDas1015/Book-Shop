import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { getItem } from '../../Utilites/Utilites';
import { useLoaderData } from 'react-router';
import WishlistBooks from '../../Component/WishlistBooks/WishlistBooks';

const ListedBooks = () => {
    const getitemLocalStorage = getItem();
    const Books = useLoaderData()
    const booksLocalStorage = Books.filter(book => getitemLocalStorage.includes(book.bookId))
    return (
        <div className='md:w-10/12 mx-auto p-2'>
            <h1 className='text-2xl md:text-3xl font-bold text-center bg-gray-200 py-5 rounded-xl'>Books</h1>
            <div className='flex justify-center py-6'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="bg-[#23BE0A] text-white px-2 py-0.5 lg:px-5 lg:py-2 rounded-lg cursor-pointer flex items-center">Sort By <MdKeyboardArrowDown size={25} />
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift pb-8">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist Books" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        booksLocalStorage.map((book, index) => <WishlistBooks key={index} book={book}></WishlistBooks>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;