'use client'
import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useEffect } from 'react'
export default function page() {

  useEffect(() => {
    document.title='FAQ'
   }, []);
  return (
    <>
    <Navbar/>
    <div className='container  relative mt-12 w-2/3 pl-16 lg:pl-32 text-sm'>
      <h1 className=' text-5xl font-extrabold'>FAQ's</h1>
      <h1 className=' text-lg font-medium'>How can i subsribe Desh Career Email?</h1>
      <p className='mt-4'>You can subscribe this newsletter from . You input you email, then follow instruction. After email confirmation, your email address is added in our database. </p>
      <h1 className=' mt-6 text-lg font-medium'>I am a subscriber of Desh Career, but I don't find your email. Why?</h1>
      <p>Please check your email. May be our email goes to Promotion tab. If you find our email in this tab, please move it to primary tab. Than you will find this email in primary tab. </p>

    </div>
    <Footer/>
    </>
  )
}
