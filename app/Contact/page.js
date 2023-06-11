'use client'
import React from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useEffect } from 'react'
export default function contact() {

  useEffect(() => {
    document.title='Contact us'
   }, []);
  return (
    <div>
       <Navbar/>
      <div className='container mt-20 mb-20 w-2/3 pl-16 lg:pl-32 text-sm'>
        <h1 className='text-5xl font-bold'>Contact Us</h1>
        <div className='mt-10'>
            <p className='mt-6'>
            If you want to contact us: you can send an email to <a className='text-sky-600 underline' href='mailto:contact.deshcareer@gmail.com'>contact.deshcareer@gmail.com</a>
            </p>

            <p className='mt-6'>
            If you want to meet with us, you can come to our office based on an appointment. 
            </p>

            <p className='mt-6' >
            Our Office address:
            </p>

            <p className='mt-6'>
            House: 13/3,
            </p>

            <p className='mt-6'>
            Road: 2,
            </p>

            <p className='mt-6'>
            Shyamoly, Dhaka-1207
            </p>

            <p className='mt-6' >
            +8801880811047
            </p>

        </div>

      </div>
      <Footer/>
    </div>
  )
}
