"use client"
import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Controller, useForm } from "react-hook-form"

interface IUpdateBlog {
 title ?: string
  slug ?: string
  content ?: string
}



export default function UpdateBlog() {
  const form = useForm<IUpdateBlog>()

   const onSubmit = async(data:IUpdateBlog)=>{
     console.log(data)
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
