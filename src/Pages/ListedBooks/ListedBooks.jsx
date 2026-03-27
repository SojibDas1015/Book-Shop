import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { getItem, getItemRead } from '../../Utilites/Utilites';
import { useLoaderData } from 'react-router';
import WishlistBooks from '../../Component/WishlistBooks/WishlistBooks';

const ListedBooks = () => {
    const [bookWishlist, setBookWishlist] = useState([])
    const [bookRead, setBookRead] = useState([])
    const Books = useLoaderData()
    const getitemLocalStorage = getItem();
    const getitemLocalStorageRead = getItemRead()
    useEffect(() => {
        const booksLocalStorage = Books.filter(book => getitemLocalStorage.includes(book.bookId));
        const booksLocalStorageRead = Books.filter(book => getitemLocalStorageRead.includes(book.bookId))
        setBookWishlist(booksLocalStorage);
        setBookRead(booksLocalStorageRead);
    }, [Books])
    // console.log(bookRead)
    const handleSort = (sortType) => {
        if (sortType === 'rating') {
            const sortWishlist = [...bookWishlist].sort((a, b) => a.rating - b.rating)
            setBookWishlist(sortWishlist)
            const sortRating = [...bookRead].sort((a, b) => a.rating - b.rating)
            setBookRead(sortRating)
        }
        else if (sortType === 'number') {
            const sortWishlist = [...bookWishlist].sort((a, b) => a.totalPages - b.totalPages)
            setBookWishlist(sortWishlist)
            const sortRating = [...bookRead].sort((a, b) => a.totalPages - b.totalPages)
            setBookRead(sortRating)
        }
        else {
            const sortWishlist = [...bookWishlist].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing)
            setBookWishlist(sortWishlist)
            const sortRating = [...bookRead].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing)
            setBookRead(sortRating)
        }
    }
    return (
        <div className='md:w-10/12 mx-auto p-2'>
            <h1 className='text-2xl md:text-3xl font-bold text-center bg-gray-200 py-5 rounded-xl'>Books</h1>
            <div className='flex justify-center py-6'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="bg-[#23BE0A] text-white px-2 py-0.5 lg:px-5 lg:py-2 rounded-lg cursor-pointer flex items-center">Sort By <MdKeyboardArrowDown size={25} />
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm">
                        <li onClick={() => handleSort('rating')}><a>Rating</a></li>
                        <li onClick={() => handleSort('number')}><a>Number of pages</a></li>
                        <li onClick={() => handleSort('publisher')}><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift pb-8">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        bookRead.map((book, index) => <WishlistBooks key={index} book={book}></WishlistBooks>)
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist Books" />
                <div className="tab-content bg-base-100 border-base-300 p-1 md:p-6">
                    {
                        bookWishlist.map((book, index) => <WishlistBooks key={index} book={book}></WishlistBooks>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;