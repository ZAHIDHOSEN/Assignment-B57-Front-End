import { ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";


export default function Footer() {


const navLinks = [
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: <Github size={18} /> },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: <Linkedin size={18} /> },
  { name: 'Twitter', href: 'https://twitter.com', icon: <Twitter size={18} /> },
];


  return (
   <footer className="bg-white border-t border-slate-100">
      <div className="mx-auto  px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 group">
              DEV<span className="text-indigo-600 group-hover:text-indigo-400 transition-colors">PORTFOLIO</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              I specialize in building high-performance web applications using modern technologies. 
              Lets turn your ideas into functional, beautiful code.
            </p>
            {/* Status Badge */}
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 w-fit px-3 py-1 rounded-md border border-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Open for Collaboration
            </div>
          </div>

          {/* Navigation Link Tag usage */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / External Link Tag usage */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-50 text-slate-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm border border-slate-100"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </Link>
              ))}
              <Link
                href="mailto:your@email.com"
                className="p-2.5 rounded-xl bg-slate-50 text-slate-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm border border-slate-100"
              >
                <Mail size={18} />
              </Link>
            </div>
            <Link 
              href="/resume.pdf" 
              className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-indigo-600 group"
            >
              View Resume 
              <ExternalLink size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-slate-400 font-medium">
            © {new Date().getFullYear()} DESIGNED & DEVELOPED BY YOUR NAME
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[11px] text-slate-400 hover:text-slate-900 transition-colors">PRIVACY POLICY</Link>
            <div className="h-1 w-1 rounded-full bg-slate-200"></div>
            <Link href="/terms" className="text-[11px] text-slate-400 hover:text-slate-900 transition-colors">TERMS OF USE</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
