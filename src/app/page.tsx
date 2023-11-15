import Image from 'next/image'
import Head from "next/head";

export const metadata = {
  title: 'Contact',
  description: 'description for the contact page',
}
export default function Home() {
  return (
    <div className='mt-[200px]'>
      <p className='font-bold text-center uppercase text-3xl'>contact</p>
    </div>
  )
}