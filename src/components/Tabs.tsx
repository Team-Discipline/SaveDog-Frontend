'use client'
import { useState } from 'react';

export default function Tabs() {
    const [openTab, setOpenTab] = useState<number>(1);

    // 수정된 클래스명
    const activeClasses = 'border-b-2 border-blue-700 text-blue-700';
    const inactiveClasses = 'text-blue-500 hover:text-blue-700 border-none';

    return (
        <div className="">
            <ul className="flex">
                <li onClick={() => setOpenTab(1)} className={`mr-1 ${openTab === 1 ? '-mb-px' : ''}`}>
                    <a href="/directory" className={`bg-white inline-block py-2 px-4 font-semibold ${openTab === 1 ? activeClasses : inactiveClasses}`}>
                        Categories
                    </a>
                </li>
                <li onClick={() => setOpenTab(2)} className={`mr-1 ${openTab === 2 ? '-mb-px' : ''}`}>
                    <a href="/directory/all" className={`bg-white inline-block py-2 px-4 font-semibold ${openTab === 2 ? activeClasses : inactiveClasses}`}>
                        Live Channels
                    </a>
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
