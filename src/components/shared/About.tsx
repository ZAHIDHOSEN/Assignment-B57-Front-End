"use client"
import {motion} from "framer-motion"


export default function About() {
    const fadIn = {
        hidden:{opacity:0, x:-20},
        visible: {opacity:1, x:0, transition:{duration:0.6}}
    }

     const skills = [
    "React / Next.js", "TypeScript", "Node.js", 
    "MongoDB", "PostgreSQL", "Tailwind CSS", 
    "Prisma", "Redux Toolkit"
  ];

  return (
   <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side: Story */}
          <motion.div variants={fadIn} className="space-y-6">
            <h2 className="text-4xl font-extrabold text-slate-800 dark:text-white">
              About <span className="text-indigo-600">Me</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I am a dedicated **Full-Stack Developer** with a foundation in **Chemistry (B.Sc)**. 
              This background has instilled in me a scientific approach to problem-solving—where 
              precision, logic, and experimentation meet clean code.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              After completing my specialized training at **Programming Hero**, I’ve focused 
              on the **MERN stack** and **Next.js**. I specialize in building real-world 
              applications like blood donation platforms and collaborative study tools, 
              focusing on creating seamless user experiences.
            </p>

            {/* Quick Stats/Education */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-indigo-600 text-xl">B.Sc</h4>
                <p className="text-sm text-slate-500">Chemistry Graduate</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-indigo-600 text-xl">3+</h4>
                <p className="text-sm text-slate-500">Major Projects</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Skills Cloud */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Technical Arsenal</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span 
                  key={index}
                  whileHover={{ scale: 1.1, backgroundColor: "#4f46e5", color: "#fff" }}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium cursor-default transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
              <p className="text-sm italic text-slate-500">
                Code is like a chemical reaction; every element must be in the right place to achieve the perfect result.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
