'use client'
import Head from 'next/head';
import React, { useState } from 'react'

export default function Navbar() {

  const [open,setOpen]=useState(false)


  
console.log(open);
  return (
    <div>
     


    <nav className={`p-10 lg:flex flex-row md:flex-row justify-between lg:mx-auto bg-white md:shadow-lg ${open ? "h-96  shadow-lg":""}  `}>
      <div className='flex justify-between px-0'>
        <span>
        <img src='deshCareer.png' className='h-20 inline'/>
        </span>

        <button className=' pointer-events-auto data-target="#navigation"'>
        <svg name='menu' onClick={()=>(setOpen(!open))} className='h-12 w-12  lg:invisible md:invisible' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-width="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        </button>
      </div>
    <div>

    </div>


<ul className={` justify-center items-center content-center  absolute md:static bg-white  md:z-auto  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in left-0 w-full md:flex md:items-center  text-md font-bold pr-20  ${open ? "":"z-[-1] transition-all duration-300 ease-in top-[-293px]" } ` }>
       
       <li className='mx-2 my-1 md:my-0' >
         <a href='/' className=' hover:text-red-700 duration-75 ' >Home</a>
       </li>
       <li className='mx-2 my-1 md:my-0'>
         <a href='/Privacy' className=' hover:text-red-700 duration-75' >Privacy Policy</a>
       </li>
       <li className='mx-2 my-1 md:my-0'>
         <a href='/Term-Condition' className=' hover:text-red-700 duration-75' >Terms Condition</a>
       </li>
       <li className='mx-2 my-1 md:my-0' >
         <a href='/About' className=' hover:text-red-700 duration-75' >About Us</a>
       </li>
       <li className='mx-2 my-1 md:my-0' >
         <a href='/Contact' className=' hover:text-red-700 duration-75' >Contack Us</a>
       </li>
       <li className='mx-2 my-1 md:my-0' >
         <a href='/Advertise' className=' hover:text-red-700 duration-75' >Advertise Us</a>
       </li>
       
         <button  className='bg-red-700 px-5 py-1 text-white rounded-md'>Join now</button>


       
      
        
     </ul>

    </nav>
    </div>
  )
}
