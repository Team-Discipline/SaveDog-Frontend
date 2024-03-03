import Image from 'next/image'
import Head from "next/head";
import DogsListView from "@/components/DogsListView";

export const metadata = {
  title: 'Contact',
  description: 'description for the contact page',
}
export default function Home() {
  return (
    <div className='mt-[200px] w-full h-full'>
      <p className='font-bold text-center uppercase text-3xl'>Xwitch</p>
      {/*<DogsListView images={imageUrls} />*/}
    </div>
  )
}