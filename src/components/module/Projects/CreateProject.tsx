"use client"

import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";


interface ICreateProject {
  title: string;
  slug: string;
  description: string;
  liveUrl?: string;
  repoUrl?: string;
  thumbnail?: string;
  features: string[];
}

export default function CreateProject() {
    const form = useForm<ICreateProject>()
    const [features,setFeatures] = useState<string[]>([])
    const [featuresInput,setFeatureInput] = useState("")
    

    const addFeatured = () =>{
      const val = featuresInput.trim()
      if(val && !features.includes(val)){
        setFeatures([...features,val])
      }
      setFeatureInput("")
    }
     

    const removeFeature = (feature: string) => {
    setFeatures(features.filter(f => f !== feature))
  }
    
    
    
   const onSubmit = async(data:ICreateProject)=>{
      const payload = {...data,features}
      console.log("payload",payload)

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data),
      credentials:"include"
    })
    
   await res.json()

    if(res.ok){
      toast.success("Project created Successfully")
    }
     form.reset()
     setFeatures([])
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
                <Textarea {...field} placeholder="liveURL..." />
              </Field>
            )}
          />
          <Controller
            name="repoUrl"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>RepoUrl</FieldLabel>
                <Textarea {...field} placeholder="RepoUrl" />
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
            <div className="flex gap-2 mb-2">
              <Input
                value={featuresInput}
                onChange={e => setFeatureInput(e.target.value)}
                placeholder="Add feature and press Enter"
                onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addFeatured())}
              />
              <Button type="button" onClick={addFeatured}>
                Add
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {features.map(f => (
                <div
                  key={f}
                  className="flex items-center gap-1 bg-indigo-100 text-indigo-800 rounded px-2 py-1"
                >
                  <span>{f}</span>
                  <button
                    type="button"
                    onClick={() => removeFeature(f)}
                    className="font-bold"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </Field>
            )}
          />

          
         

          <Button type="submit" className="bg-indigo-600 w-full hover:bg-indigo-700">
            Create Project
          </Button>

        </form>
      </Form>
    </div>
    </div>
  )
}
