'use client'
import React, { useState } from 'react';

const BrowseNav = () => {
  const [activeItem, setActiveItem] = useState(0);

  const selectNavItem = (index:number) => {
    setActiveItem(index);
  };

  return (
    <div className="nav-container">
      <div className={`nav-item relative ${activeItem === 0 ? 'active' : ''}`} onClick={() => selectNavItem(0)}>
        <span>Categories</span>
        <div className="underline"></div>
      </div>
      <div className={`nav-item relative ${activeItem === 1 ? 'active' : ''}`} onClick={() => selectNavItem(1)}>
        <span>Live Channels</span>
        <div className="underline"></div>
      </div>
    </div>
  );
};

export default BrowseNav;
