"use client"

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {NavbarList} from '../constants/navbarList';
import Search from "@/components/Search";
import ProfileButton from "@/components/ProfileButton"; // Import NavbarList

interface NavItem {
  navItem: string;
}

export const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="bg-gray-100 h-12" style={{background: 'white', boxShadow: 'var(--shadow-elevation-1)'}}>
      <div className="mx-auto px-4">
        <div className="flex justify-between h-12 jqCeVt">
          {/* 메뉴 */}
          <div className="flex space-x-4 items-center">
            <div>
              <a href="/" className="flex items-center py-5 px-2 text-gray-700">
                <svg overflow="visible" width="40px" height="40px" version="1.1" viewBox="0 0 40 40" x="0px" y="0px"
                     className="ScSvg-sc-mx5axi-2 iAAiAK">
                  <g>
                    <polygon points="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8"
                             className="ScBody-sc-mx5axi-3 dosCbL">
                      <animate dur="150ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1"
                               keySplines="0.25 0.1 0.25 1" attributeName="points"
                               from="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8"
                               to="16 5 8 13 8 31 14 31 14 36 19 31 23 31 35 19 35 5"></animate>
                      <animate dur="250ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1"
                               keySplines="0.25 0.1 0.25 1" attributeName="points"
                               from="16 5 8 13 8 31 14 31 14 36 19 31 23 31 35 19 35 5"
                               to="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8"></animate>
                      <animate dur="50ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1"
                               keySplines="0.25 0.1 0.25 1" attributeName="points"
                               to="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8"
                               from="16 5 8 13 8 31 14 31 14 36 19 31 23 31 35 19 35 5"></animate>
                      <animate dur="75ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1"
                               keySplines="0.25 0.1 0.25 1" attributeName="points"
                               to="16 5 8 13 8 31 14 31 14 36 19 31 23 31 35 19 35 5"
                               from="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8"></animate>
                    </polygon>
                    <polygon points="26 25 30 21 30 10 14 10 14 25 18 25 18 29 22 25"
                             className="ScFace-sc-mx5axi-4 fDFkyX">
                      <animateTransform dur="150ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1"
                                        keySplines="0.25 0.1 0.25 1" attributeName="transform" type="translate"
                                        from="0 0" to="3 -3"></animateTransform>
                      <animateTransform dur="250ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1"
                                        keySplines="0.25 0.1 0.25 1" attributeName="transform" type="translate"
                                        from="3 -3" to="0 0"></animateTransform>
                      <animateTransform dur="50ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1"
                                        keySplines="0.25 0.1 0.25 1" attributeName="transform" type="translate"
                                        from="3 -3" to="0 0"></animateTransform>
                      <animateTransform dur="75ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1"
                                        keySplines="0.25 0.1 0.25 1" attributeName="transform" type="translate"
                                        from="0 0" to="3 -3"></animateTransform>
                    </polygon>
                    <g className="ScEyes-sc-mx5axi-5 fAMMxB">
                      <path d="M20,14 L22,14 L22,20 L20,20 L20,14 Z M27,14 L27,20 L25,20 L25,14 L27,14 Z"
                            className="ScBody-sc-mx5axi-3 dosCbL">
                        <animateTransform dur="150ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1"
                                          keySplines="0.25 0.1 0.25 1" attributeName="transform" type="translate"
                                          from="0 0" to="3 -3"></animateTransform>
                        <animateTransform dur="250ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1"
                                          keySplines="0.25 0.1 0.25 1" attributeName="transform" type="translate"
                                          from="3 -3" to="0 0"></animateTransform>
                        <animateTransform dur="50ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1"
                                          keySplines="0.25 0.1 0.25 1" attributeName="transform" type="translate"
                                          from="3 -3" to="0 0"></animateTransform>
                        <animateTransform dur="75ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1"
                                          keySplines="0.25 0.1 0.25 1" attributeName="transform" type="translate"
                                          from="0 0" to="3 -3"></animateTransform>
                      </path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="flex items-center space-x-1" style={{width: '150px'}}>
              {NavbarList.map((item, index) => (
                <Link key={index} href={`/${item.path}`} style={{width: '68px'}}>
                  <span className="text-lg py-2 px-4 text-gray-700 hover:text-gray-900">{item.navItem}</span>
                </Link>
              ))}
              <svg width="50px" height="20px" viewBox="0 0 20 20" focusable="false" aria-hidden="true">
                <path
                  d="M10 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
              </svg>
            </div>
          </div>
          <div className="w-2/3" style={{justifyContent: 'center', display: 'flex'}}>
            <Search/>
          </div>
          <div className="jdpzyl">
            <div className="fnsfLT">
              <div className="cQZlhV">
                <div className='flex items-center space-x-1'>
                  <Link href='/login' className='py-2 px-3' style={{width: '72px'}}>
                    로그인
                  </Link>
                  <Link href='/signup' className='py-2 px-3 bg-gray hover: text-gray' style={{width: '88px'}}>
                    회원가입
                  </Link>
                </div>
                <div data-a-target="dropdown-up" className="Layout-sc-1xcs6mc-0 bfqNgN">
                  <ProfileButton/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

