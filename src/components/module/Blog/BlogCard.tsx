/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Image from "next/image";
import {motion} from "framer-motion"
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, Badge } from "lucide-react";
import { Button } from "@/components/ui/button";





// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogCard({blog}:any) {
   
  const itemVariants = {
    hidden:{opacity:0,y:20},
    visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  },
  }
  return (
    
  <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }} // Lifts the card up on hover
      className="h-full"
    >
      <Card className="overflow-hidden 
      flex flex-col h-full border-slate-200 dark:border-slate-800 
      shadow-sm hover:shadow-xl transition-shadow duration-300">
        {/* Thumbnail with inner zoom effect */}
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <CardHeader className="p-4 pb-2">
          <h3 className="text-xl font-bold leading-tight line-clamp-2 group-hover:text-indigo-600 transition-colors">
            {blog.title}
          </h3>
        </CardHeader>

        <CardContent className="p-4 pt-0 grow">
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {blog.content}
          </p>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button 
            asChild 
            variant="ghost" 
            className="p-0 hover:bg-transparent text-indigo-600 dark:text-indigo-400 group"
          >
            <Link href={`/blogs/${blog.slug}`} className="flex items-center gap-2 font-bold">
              Read More 
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>

    

    
  )
}
