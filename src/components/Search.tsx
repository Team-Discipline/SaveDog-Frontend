import React, { useState, useEffect } from 'react';

const Search = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 이펙트 실행

  return (
    <div className="flex-grow flex items-center">
      {/* Add your search input field and any other necessary elements */}
      {!isSmallScreen && (
        <input
          type="text"
          placeholder="Search..."
          className="py-2 px-3 border border-gray-300 rounded-md"
          style={{
            maxWidth: '60rem',
            width: '100%',
            height: '3rem',
            margin: '0 1rem',
            background: 'rgba(255, 255, 255, .4)',
            borderRadius: '5px'
          }}
        />
      )}
      {/* You can add a search icon or button here if needed */}
      <button className={`w-16 ${isSmallScreen ? 'md:ml-4 mt-4' : 'md:mr-4'}`}>
        {/* 검색 아이콘 추가 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5.2-5.2" />
          <circle cx="10" cy="10" r="8" />
        </svg>
      </button>
    </div>
  );
};

export default Search;
