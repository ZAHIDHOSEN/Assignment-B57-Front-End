import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'


export default function PublicLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex flex-col min-h-screen bg-background'>
    <Navbar></Navbar>
      <main className='grow'>
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}
