import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

const ListedBooks = () => {
    return (
        <div className='md:w-10/12 mx-auto p-2'>
            <h1 className='text-2xl md:text-3xl font-bold text-center bg-gray-200 py-5 rounded-xl'>Books</h1>
            <div className='flex justify-center py-6'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="bg-[#23BE0A] text-white px-2 py-0.5 lg:px-5 lg:py-2 rounded-lg cursor-pointer flex items-center">Sort By <MdKeyboardArrowDown size={25} />
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;