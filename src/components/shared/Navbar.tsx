"use client"; 

import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
   { name: "Blog", href: "/blog" },
  { name: "Project", href: "/project" },
   { name: "Contact", href: "/contact" },
  { name: "dashboard", href: "/dashboard" },
];



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

 

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="rounded-lg bg-indigo-600 p-1.5 text-white transition-transform group-hover:rotate-12">
              <Code2 size={20} />
            </div>
            <span className="text-xl font-bold tracking-tighter text-slate-900">
              DEV<span className="text-indigo-600">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="h-6 w-[1px] bg-slate-200" />
            <Button className="bg-indigo-600">
            <Link href={`/login`}>Login</Link>
           </Button>

            {/* <Link
              href="https://github.com"
              target="_blank"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              <Github size={16} />
              GitHub
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-8 space-y-6 shadow-xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="text-lg font-semibold text-slate-900 hover:text-indigo-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
           <Button className="bg-indigo-600">
            <Link href={`/login`}>Login</Link>
           </Button>
          
        </div>
      )}
    </nav>
  );
}