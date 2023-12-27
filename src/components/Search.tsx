import React from 'react';

const Search = () => {
  return (
    <div className="flex-grow flex items-center">
      {/* Add your search input field and any other necessary elements */}
      <input
        type="text"
        placeholder="Search..."
        className="py-2 px-3 border border-gray-300 rounded-md"
        style={{ maxWidth: '60rem', width: '100%', height: '3rem', margin: '0 1rem', background: 'rgba(255, 255, 255, .4)', borderRadius: '5px' }}
      />
      {/* You can add a search icon or button here if needed */}
      <button className="w-16" style={{ width: '68px' }}>검색</button>
    </div>
  );
};


export default Search;
