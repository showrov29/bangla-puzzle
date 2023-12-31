
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function Home() {

  return (
   
      <>
      <Navbar/>
      <div className='container  mt-20 w-2/3 pl-16 lg:pl-32 text-sm'>
    <h1 className='text-6xl font-extrabold'>Get Smarter about your career</h1>
    <p className=' m-2'>Get the <strong>5-minute newsletter</strong> keeping about smart career</p>

    <div className=' flex items-center space-x-4  max-w-auto h-16 py-2 rounded-lg shadow-lg shadow-fuchsia-400/50 '>
    <svg className='h-8 w-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
    <input className='h-full w-96 p-1 ' placeholder='Your Email Address'/>
    <button className='bg-red-600 rounded-md px-16 py-2 hover:bg-red-600 text-white'>Join Free</button>

    </div>
    <p className='mt-8 mb-20'>We're committed to your privacy. DashCareer uses the information you provide to contact you about our relevant content and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</p>

   </div>
<Footer/>
      </>
  )
}
