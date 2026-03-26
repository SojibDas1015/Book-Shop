import React from 'react';

const Navbar = () => {
    const Button = <>
        <li><a>Home</a></li>
        <li><a>Listed Books</a></li>
        <li><a>Pages to Read</a></li>
    </>
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="flex md:w-10/12 mx-auto p-2 md:py-4">
                <div className="navbar-start gap-4">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" btn-ghost lg:hidden cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg cursor-pointer">
                            {Button}
                        </ul>
                    </div>
                    <a className="btn-ghost text-xl font-bold cursor-pointer">Book Shop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-6 cursor-pointer">
                        {Button}
                    </ul>
                </div>
                <div className="navbar-end gap-3 md:text-lg font-semibold">
                    <a className="bg-[#23BE0A] text-white px-2 py-0.5 lg:px-5 lg:py-2 rounded-lg cursor-pointer">Sign In</a>
                    <a className="bg-[#59C6D2] text-white px-2 py-0.5 lg:px-5 lg:py-2 rounded-lg cursor-pointer">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;