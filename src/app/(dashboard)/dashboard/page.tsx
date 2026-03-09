
import BlogTable from '@/components/module/Blog/BlogTable'
import ProjectTable from '@/components/module/Projects/ProjectTable'


export default function DashboardPage() {
  return (
    <div>
     <h3 className='text-3xl font-bold text-indigo-600 text-center'>Dashboard Home</h3>

     <div className='p-4'>
      <h2 className='font-bold text-center text-2xl my-4'>Blog</h2>
       <BlogTable></BlogTable>
     </div>
     <h2 className='text-center font-bold text-2xl my-4'>Project</h2>
     <div>
       <ProjectTable></ProjectTable>
     </div>
    </div>
  )
}
