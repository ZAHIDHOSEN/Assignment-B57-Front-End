
import BlogTable from '@/components/module/Blog/BlogTable'
import React from 'react'

export default function DashboardPage() {
  return (
    <div>
     <h3 className='text-3xl font-bold text-indigo-600 text-center'>Dashboard Home</h3>

     <div>
       <BlogTable></BlogTable>
     </div>
    </div>
  )
}
