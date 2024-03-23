'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link'; // Next.js의 Link 컴포넌트 임포트

export default function Tabs() {
    const [openTab, setOpenTab] = useState<number>(1);

    const activeClasses = 'border-b-2 border-blue-700 text-blue-700';
    const inactiveClasses = 'text-blue-500 hover:text-blue-700 border-none';

    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath.includes('/directory/all')) {
            setOpenTab(2);
        } else if (currentPath === '/directory') {
            setOpenTab(1);
        }
    }, []);


    return (
        <div>
            <ul className="flex">
                <li className={`mr-1 ${openTab === 1 ? '-mb-px' : ''}`}>
                    <Link className={`bg-white inline-block py-2 px-4 font-semibold cursor-pointer ${openTab === 1 ? activeClasses : inactiveClasses}`} href="/directory">
                            Categories
                    </Link>
                </li>
                <li className={`mr-1 ${openTab === 2 ? '-mb-px' : ''}`}>
                    <Link className={`bg-white inline-block py-2 px-4 font-semibold cursor-pointer ${openTab === 2 ? activeClasses : inactiveClasses}`} href="/directory/all">
                            Live Channels
                    </Link>
                </li>
            </ul>
            <div className="w-full relative overflow-hidden">
                <div className="absolute transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${(openTab - 1) * 100}%)` }}>
                    <div style={{ display: openTab === 1 ? 'block' : 'none' }}>Tab #1</div>
                    <div style={{ display: openTab === 2 ? 'block' : 'none' }}>Tab #2</div>
                </div>
            </div>
        </div>
    );
}
