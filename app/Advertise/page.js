'use client'
import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useEffect } from 'react'
export default function page() {

  useEffect(() => {
    document.title='Advertise with us'
   }, []);
  return (
    <div>
      <Navbar/>
      <div className='container mt-20 mb-20 w-2/3 pl-16 lg:pl-32 text-sm'>
        <h1 className='text-5xl font-bold'>
        Advertisement
        </h1>
        <p className='mt-10'>
        Our audience age is 20-35 Year. 
        </p>
        <p className='mt-6'>
        We focus on Career related content. 
        </p>
        <p className='mt-6'>
        Our contact email: <a className='text-sky-600 underline' href='mailto:contact.deshcareer@gmail.com'>contact.deshcareer@gmail.com</a> and phone number: +8801880811047 
        </p>

      </div>
      <Footer/>
    </div>
  )
}
