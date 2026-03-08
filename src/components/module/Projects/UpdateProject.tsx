"use client"

import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useForm } from "react-hook-form";


interface IUpdateProject {
  title?: string;
  slug?: string;
  description?: string;
  liveUrl?: string;
  repoUrl?: string;
  thumbnail?: string;
  features: string[];
}
export default function UpdateProject() {

    const form = useForm<IUpdateProject>()
      
     const onSubmit = async(data:IUpdateProject)=>{
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
                <Input {...field} placeholder="Project title" />
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
                <Input {...field} placeholder="project-slug-example" />
              </Field>
            )}
          />

          {/* description */}
          <Controller
            name="description"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Description</FieldLabel>
                <Textarea {...field} placeholder="Write project description..." />
              </Field>
            )}
          />
          {/* liveUrl and repoUrl */}
          <div className="flex gap-5">
           <Controller
            name="liveUrl"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>LiveUrl</FieldLabel>
                <Input {...field} placeholder="liveURL..." />
              </Field>
            )}
          />
          <Controller
            name="repoUrl"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>RepoUrl</FieldLabel>
                <Input {...field} placeholder="RepoUrl" />
              </Field>
            )}
          />
          </div>

          {/* thubnail */}
            <Controller
            name="thumbnail"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Thumbnail</FieldLabel>
                <Input {...field} placeholder="Thumbnail" />
              </Field>
            )}
          />


          {/*  features */}
             <Controller
            name="features"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Features</FieldLabel>
                <Input {...field} placeholder="Features" />
              </Field>
            )}
          />

          
         

          <Button type="submit" className="bg-indigo-600 w-full hover:bg-indigo-700">
            Update Project
          </Button>

        </form>
      </Form>
    </div>
    </div>
  )
}
