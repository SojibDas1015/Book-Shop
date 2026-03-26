import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Main from '../Component/Main/Main';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('booksData.json'),
                HydrateFallback: () => <div className='text-center'>Loading...</div>,
                Component: Main
            }
        ]
    }
])