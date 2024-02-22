import React from 'react';

export const DirectorySort: React.FC = () => {
    return (
        <select
            className="w-full h-10 border-2 border-gray-500 focus:outline-none focus:border-gray-500 text-gray-500 rounded md:px-3 py-0 md:py-1 tracking-wider">
            <option selected>Recommended For You</option>
            <option>Viewers(High to Low)</option>
        </select>
    );
};
