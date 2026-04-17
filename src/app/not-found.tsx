import { Button } from '@/components/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full gap-2'>
      <h2 className='font-bold text-3xl'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Button className='bg-indigo-600 text-white hover:bg-indigo-700'>
        <Link href="/">Return Home</Link>
      </Button>
      
    </div>
  )
}