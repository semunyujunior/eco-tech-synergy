
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <div className="scroll-indicator" style={{ width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%` }} />
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-3",
          scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-70 group-hover:opacity-100 blur-sm group-hover:blur transition duration-300"></div>
              <div className="relative flex items-center justify-center bg-white text-portfolio-900 px-3 py-1.5 rounded-full font-bold text-xl">
                <Sparkles className="w-4 h-4 text-blue-500 mr-1" />
                <span>VL</span>
                <Sparkles className="w-4 h-4 text-purple-500 ml-1" />
              </div>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  activeSection === item.href.substring(1)
                    ? "text-portfolio-900 font-semibold"
                    : "text-portfolio-600 hover:text-portfolio-900"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="md:hidden">
            <button className="text-portfolio-900 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
