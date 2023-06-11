import React from 'react'

export default function Footer() {

 
  return (
    <>
    <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
      <div className='  bg-indigo-950 text-slate-400 px-12 lg:px-28 pt-10 divide-y-2 pb-6'>
        <div className='max-w-7xl '>
          <div className='grid px-0 lg:justify-items-center'>
            <div className=' space-x-4'>
            <ion-icon  className="h-24 w-10 " name="logo-facebook"></ion-icon>
            <ion-icon className=" h-10 w-10 " name="logo-youtube"></ion-icon>
            <ion-icon className="h-10 w-10" name="logo-linkedin"></ion-icon>
             </div>
                
          </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-52 mt-20'>
              <div className='mb-5  '>
                <img src='deshCareer.png ' className='h-20 w-40' />
                <p className=' '>
                Desh Career is Career based newsletter in Bengali language. This newsletter has published weekly. This is published in every Saturday at 12.00 PM. 
                </p>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:col-span-2 '>
              <div className='mb-5 justify-center items-center' >
                <h1 className='text-xl font-bold text-white'>Privacy and Terms</h1>
                <ul className='mt-16'>
                  <li>
                    <a className='hover:text-white' href='/Privacy'>Privacy Policy</a>
                  </li>
                  <li>
                    <a className='hover:text-white' href='/Term-Condition'> Terms and Conditions</a>
                  </li>
                  <li>
                     <a className='hover:text-white' href='/FAQ'>FAQ</a>
                  </li>
                </ul>

              </div>
              <div className='mb-5 '>
                <h1 className='text-xl font-bold text-white'>Support</h1>
                <ul className=' mt-16'>
                  <li>
                    <a className='hover:text-white' href='/Affileate'>Affiliate link</a>
                  </li>
                  <li>
                    <a className='hover:text-white' href='/Contact'> Contact us</a>
                  </li>
                  <li>
                     <a className='hover:text-white' href='/Advertise'>Advertise with us</a>
                  </li>
                </ul>
              </div>

            </div>

              </div>
              
        </div>
        <div className='flex justify-between text-xs font-thin  text-white  ' >
         <div className=''>
         © 2023 Newsletter E-mail Service: All Copy right reserved
         </div>
         <div className=' space-x-4'>
         <a href='/Term-Condition'>Terms</a>
         <a href='/Privacy'>Cokkie Policy</a>
         <a href='/Term-Condition'>Terms</a>
         <a href='/Privacy'>Privacy</a>
         </div>
        </div>
      </div>
    </>
  )
}
