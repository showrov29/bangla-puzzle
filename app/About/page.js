'use client'
import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'



export default function page() {

  useEffect(() => {
   document.title='About us'
  }, []);
  return (
    <div>
      
<Navbar/>
      <div className='container mt-20 w-2/3 pl-16 lg:pl-32 text-sm'>
        <h1 className='text-5xl font-bold'>About Us</h1>
        <p className='mt-10'>
        Desh Career is Career based newsletter in Bengali language. This newsletter has published weekly. This is published in every Saturday at 12.00 PM. 
        </p> 
        <br />
        <p>
        We focus on Career trend, news, smart job etc.         </p> 
      <br />
        <p>
        If you want to contact us: you can send an email to <a className='text-sky-500 underline ' href=' mailto: contact.deshcareer@gmail.com'>contact.deshcareer@gmail.com </a>  </p> 
      <br />
        <p>
        If you want to meet with us, you can come to our office based on an appointment. </p>
        <br />
        <p>
        Our Office address: </p>
        <br />
        <p>
        House: 13/3, </p>
        <br />
        <p>
        Road: 2,</p>
        <br />
        <p>
        Shyamoly, Dhaka-1207</p>
        <br />
        <p className='mb-20'>
        +8801880811047</p>
        <br />
      </div>
   <Footer/>

    </div>
  )
}
