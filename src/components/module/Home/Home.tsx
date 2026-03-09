"use client"
import Image from "next/image"
import photo from "../../../../public/zahid.jpg"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import Link from "next/link"


export default function Home() {


    const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  return (
  <section className="min-h-[80vh] flex items-center justify-center px-6 py-10">
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-6xl w-full"
      >
        {/* Image Section */}
        <motion.div 
          variants={itemVars}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          {/* Decorative Ring */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-400 blur-sm opacity-30 animate-pulse" />
          
          <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-white shadow-2xl">
            <Image 
              src={photo} 
              alt="Zahid Hosen"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          variants={itemVars}
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-xl"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
              Hi, I am 
            </h3>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              <span className="text-indigo-600 hover:text-indigo-500 transition-colors cursor-default">
                ZAHID HOSEN
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-500">
              MERN Stack Developer
            </h2>
          </div>

          <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
            Passionate about building <span className="text-indigo-500 font-medium">interactive</span> and <span className="text-indigo-500 font-medium">scalable</span> web applications. 
            I love blending design and functionality to create seamless digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-full shadow-lg">
               <a href="/zahid-resume.pdf" download={`resume`}>
               Download Resume
               </a>
                
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/project">
                <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg rounded-full shadow-sm">
                  View Projects
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
