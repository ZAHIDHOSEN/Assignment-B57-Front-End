"use client"
import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast"


export interface ICreateBlog {
  title: string
  slug: string
  thumbnail: string
  content: string
  
}

export default function CreateBlog() {
    const form = useForm<ICreateBlog>()


   const onSubmit = async(data:ICreateBlog)=>{
      const blog = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`,{
        method:"POST",
        headers:{
          "Content-Type" :"application/json"
        },
        body: JSON.stringify(data),
        credentials: "include"
      })

    const result = await blog.json()
    form.reset()
    toast.success("Blog created")
    
   }

  return (
     
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
    <div className="w-full max-w-2xl bg-white shadow-xl rounded-lg p-8">
   
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

          {/* Title */}
          <Controller
            name="title"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Title</FieldLabel>
                <Input {...field} placeholder="Blog title" />
              </Field>
            )}
          />

          {/* Slug */}
          <Controller
            name="slug"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Slug</FieldLabel>
                <Input {...field} placeholder="blog-slug-example" />
              </Field>
            )}
          />
          {/* image */}

           <Controller
            name="thumbnail"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Thumbnail</FieldLabel>
                <Input {...field} placeholder=" thumbnail-link-example" />
              </Field>
            )}
          />

          {/* Content */}
          <Controller
            name="content"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Content</FieldLabel>
                <Textarea {...field} placeholder="Write blog content..." />
              </Field>
            )}
          />
         

          <Button type="submit" className="bg-indigo-600 w-full hover:bg-indigo-700">
            Create Blog
          </Button>

        </form>
      </Form>
    </div>
    </div>

  )
}
