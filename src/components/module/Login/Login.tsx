"use client"

import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast"




export default function Login() {
  const router = useRouter()

  type FormValues ={
    email:string
    password:string
   }

  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password:""
    }
  })

  const onSubmit = async(data:FormValues) => {
      
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
         credentials: "include"
      })

      const result = await res.json()
      console.log("success",result)

      if(res.ok){
        toast.success("login succefully done")
         router.push("/dashboard")
      }

     

     
      
    } catch (error) {
      console.log(error)
    }

     form.reset()
  }

  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
     <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">

    {/* Header */}
    <div className="text-center space-y-2">
      <h2 className="text-3xl font-bold tracking-tight">
        Admin Login
      </h2>
      <p className="text-sm text-muted-foreground">
        Only authorized administrators can access this panel.
      </p>
    </div>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

        {/* Email */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                {...field}
                id="email"
                type="email"
                placeholder="admin@example.com"
                autoComplete="email"
              />
            </Field>
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                {...field}
                id="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </Field>
          )}
        />

        {/* Submit*/}
        <Button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors"
        >
          Sign In
        </Button>

      </form>
    </Form>

  </div>
</div>
  )
}