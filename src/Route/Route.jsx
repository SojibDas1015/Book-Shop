import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Main from '../Component/Main/Main';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ListedBooks from '../Pages/ListedBooks/ListedBooks';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('booksData.json'),
                HydrateFallback: () => <div>Loading...</div>,
                Component: Main
            },
            {
                path: '/:id',
                loader: () => fetch('booksData.json'),
                HydrateFallback: () => <div>Loading...</div>,
                Component: BookDetails
            },
            {
                path: '/listebooks',
                Component: ListedBooks
            }
        ]
    }
])