import ProjectCard from '@/components/module/Projects/ProjectCard'
import React from 'react'


interface IProject {
    id: string 
   title: string;
    slug: string;
    description: string;
    liveUrl: string;
    repoUrl: string;
    thumbnail: string;
}
export default async function ProjectPage() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`,{
        cache:"no-store"
    })

    const data = await res.json()
  return (
    <div className='md:grid grid-cols-3 gap-5 py-20 px-4'>

        {
          data?.map((project:IProject) => <ProjectCard key={project.id} project ={project}></ProjectCard>)
        }
      
    </div>
  )
}
