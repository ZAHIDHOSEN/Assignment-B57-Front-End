"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";


interface IProject {
    id:string
    title: string;
    slug: string;
}

export default function ProjectTable() {
    const [projects,setProjects] = useState([])
    

     useEffect(()=>{
             const getBlog = async()=>{
    
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`,{
                credentials:"include"
            })
    
            const data = await res.json()
            setProjects(data)
        }
    
            getBlog()
        },[])
    

            const handleDelete = async(id:string)=>{
        const confirmDelete = confirm("Are you sure to delete this blog")

        if(!confirmDelete){
            return
        }

        await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`,{
            method:"DELETE",
            credentials:"include"
        })
        
       
    }



  return (
     <div>
        <table className='min-w-full border border-gray-200 rounded-lg'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='px-4 py-3 text-left'>Id</th>
            <th className='px-4 py-3 text-left'>Title</th>
            <th className='px-4 py-3 text-left'>slug</th>
            <th className='px-4 py-3 text-left'>Action</th>
          </tr>
        </thead>
        <tbody>
            {
                projects.map((project:IProject)=>(
                   <tr key={project.id} className="border-t">
                    <td  className="py-3 px-4 text-left">{project.id}</td>
                     <td className="py-3 px-4 text-left">{project.title}</td>
                     <td className="py-3 px-4 text-left">{project.slug}</td>
                     <Button onClick={()=>handleDelete(project.id)} className="bg-indigo-600 hover:bg-indigo-500">Delete</Button>
                   </tr>
                ))
            }
          <tr>
            

          </tr>
        </tbody>
       </table>
    </div>
  )
}
