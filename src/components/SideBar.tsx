"use client"

import React, {useEffect, useState} from 'react'
export const SideBar = ({ serverSideData }: any) => {
  const [clientSideData, setClientSideData] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fetchData = async () => {
        const res = await fetch('');
        const data = await res.json();
        setClientSideData(data);
      };
      fetchData();
    }
  }, [])



  return(
    <div className="flex">
      <div className="w-1/4 bg-gray-200 p-4">
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
    props: { serverSideData },
  }
}

export default SideBar;
