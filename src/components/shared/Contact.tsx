"use client"
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Button } from "../ui/button";
import {motion} from "framer-motion"

export default function Contact() {
    const containerVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, staggerChildren: 0.2 } 
    },
  };

  const itemVars = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
   <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div 
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* Left: Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-800 dark:text-white">
              Get in <span className="text-indigo-600">Touch</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg">
              I’m currently open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
          </div>

          <div className="space-y-6">
            <motion.div variants={itemVars} className="flex items-center gap-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-lg">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Email</p>
                <p className="text-lg font-medium">zahidhosen.dev@gmail.com</p>
              </div>
            </motion.div>

            <motion.div variants={itemVars} className="flex items-center gap-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-lg">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Location</p>
                <p className="text-lg font-medium">Chapai Nawabganj, Bangladesh</p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            {[
              { icon: <Github />, link: "https://github.com", label: "GitHub" },
              { icon: <Linkedin />, link: "https://linkedin.com", label: "LinkedIn" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                whileHover={{ y: -5 }}
                className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white transition-all"
                target="_blank"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700"
        >
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-lg border dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 rounded-lg border dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <input 
                type="text" 
                className="w-full p-3 rounded-lg border dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                placeholder="How can I help?"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea 
                rows={4}
                className="w-full p-3 rounded-lg border dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 rounded-lg text-lg flex gap-2">
              Send Message <Send size={18} />
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}
