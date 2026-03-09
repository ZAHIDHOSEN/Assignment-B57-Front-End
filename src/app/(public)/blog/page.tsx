
import BlogCard from '@/components/module/Blog/BlogCard'




export default async function BlogPage() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`,{
      cache:"no-store"
    })
    const blogs = await data.json()
   
  return (
    <div className='md:grid grid-cols-4 gap-5'>
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        blogs.map((blog:any) => <BlogCard key={blog.id} blog={blog}></BlogCard>)
      }
      
    </div>
  )
}
