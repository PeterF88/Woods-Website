import React from 'react';
import { useLocation } from 'react-router-dom';

export const Placeholder = () => {
    const location = useLocation();
    const pageName = location.pathname.substring(1).replace(/-/g, ' ').toUpperCase();

    return (
        <div className="container py-20 text-center">
            <h1 className="text-4xl font-bold mb-4">{pageName || 'PAGE FOUND'}</h1>
            <p className="text-xl text-gray-600 mb-8">This page is under construction.</p>
            <div className="p-8 bg-gray-100 rounded-lg inline-block text-left">
                <h3 className="font-bold mb-2">Content Placeholder</h3>
                <p>The content for {location.pathname} will be implemented here.</p>
            </div>
        </div>
    );
};
