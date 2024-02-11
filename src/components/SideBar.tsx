"use client"

import React, {useEffect, useState} from 'react'

export const SideBar = ({serverSideData}: any) => {
  const [clientSideData, setClientSideData] = useState(null);
  const [sidebarWidth, setSidebarWidth] = useState(56);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('');
      const data = await res.json();
      setClientSideData(data);
    };
    if (typeof window !== 'undefined') {
      fetchData();
      setSidebarWidth(window.innerWidth < 1200 ? 3 : 14);
      // 화면 크기에 따른 사이드바 크기 조정
      const handleResize = () => {

        setSidebarWidth(window.innerWidth < 1200 ? 3 : 14);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }
  }, [sidebarWidth])

  return (
    <div className={'bg-gray-200'} style={{width: `${sidebarWidth}rem`}}>
      <div className='bg-gray-200'>
        SideBar Content
        <div>
          <h1>SSD: {serverSideData}</h1>
          <h1>CSD: {clientSideData}</h1>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const serverSideData = 'Data from Server-Side';

  return {
    props: {serverSideData},
  }
}

export default SideBar;
