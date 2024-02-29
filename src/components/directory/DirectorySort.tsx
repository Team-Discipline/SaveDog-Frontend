import React from 'react';

interface DirectorySortProps {
    onChange: (value: string) => void;
}

export const DirectorySort: React.FC<DirectorySortProps> = ({ onChange }) => {
    return (
        <select
            className="w-full h-10 border-2 border-gray-500 focus:outline-none focus:border-gray-500 text-gray-500 rounded md:px-3 py-0 md:py-1 tracking-wider"
            onChange={(e) => onChange(e.target.value)}
            defaultValue="recommended"
        >
            <option value="recommended">Recommended For You</option>
            <option value="views">Views (High to Low)</option>
        </select>
    );
};
