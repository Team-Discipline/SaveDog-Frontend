import Image from 'next/image'
import Head from "next/head";
import DogsListView from "@/components/DogsListView";

export const metadata = {
  title: 'Contact',
  description: 'description for the contact page',
}
const imageUrls= [
  '/images/dog1.jpg',
  '/images/dog2.jpg',
  '/images/dog3.jpg',
  '/images/dog4.jpg',
  '/images/dog5.jpg',
  '/images/dog6.jpg',
  '/images/dog7.jpg',
  '/images/dog8.jpg',
  '/images/dog9.jpg',
  '/images/dog10.png',
  '/images/dog11.png',
  '/images/dog12.jpg',
]
export default function Home() {
  return (
    <div className='mt-[200px]'>
      <p className='font-bold text-center uppercase text-3xl'>contact</p>
      <DogsListView images={imageUrls} />
    </div>
  )
}