"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


interface ProjectCardProps {
  project: {
    id:string
    title: string;
    slug: string;
    description: string;
    liveUrl: string;
    repoUrl: string;
    thumbnail: string;
  };
}



    


export default function ProjectCard({project}:ProjectCardProps) {
  // console.log(project)
  return (
  <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        {/* Project Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden group">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            unoptimized
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <Button asChild variant="secondary" size="sm" className="rounded-full">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" /> Live Demo
              </a>
            </Button>
          </div>
        </div>

        <CardHeader className="p-5">
          <CardTitle className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            {project.title}
          </CardTitle>
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            {project.slug}
          </p>
        </CardHeader>

        <CardContent className="px-5 pb-2 flex-grow">
          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-4 leading-relaxed">
            {project.description}
          </p>
        </CardContent>

        <CardFooter className="p-5 pt-4 grid grid-cols-2 gap-3 border-t border-slate-100 dark:border-slate-800">
          {/* Details Link */}
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href={`/projects/${project.id}`}>
              <Info size={16} className="mr-2" /> Details
            </Link>
          </Button>

          {/* GitHub Repo Link */}
          <Button asChild variant="secondary" size="sm" className="w-full">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-2" /> GitHub
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
