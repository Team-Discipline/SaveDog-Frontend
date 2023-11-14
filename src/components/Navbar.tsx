// components/Navbar.tsx
"use client"


import React from 'react';
import Link from 'next/link';
import { NavbarList } from '../app/constants/navbarList'; // Import NavbarList

interface NavItem {
  navItem: string;
}

export const Navbar = () => {
  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* 메뉴 */}
          <div className="flex space-x-4">
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {/* ... your SVG path here ... */}
                </svg>
                <span className="font-bold">Home</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {NavbarList.map((item, index) => (
                <Link key={index} href={`/${item.navItem.toLowerCase().replace(' ', '-')}`}>
                  <span className="py-5 px-3 text-gray-700 hover:text-gray-900">{item.navItem}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* ... (rest of the code remains unchanged) ... */}
        </div>
      </div>

      {/* ... (rest of the code remains unchanged) ... */}
    </nav>
  )
}

