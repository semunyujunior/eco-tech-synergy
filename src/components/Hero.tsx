
import { useEffect, useRef } from 'react';

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const cta = ctaRef.current;

    if (heading) heading.classList.add('animate-fade-in-up');
    
    const timer1 = setTimeout(() => {
      if (subheading) subheading.classList.add('animate-fade-in-up');
    }, 300);
    
    const timer2 = setTimeout(() => {
      if (cta) cta.classList.add('animate-fade-in-up');
    }, 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-soft animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 mt-16 md:mt-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={headingRef}
            className="opacity-0 text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-900 mb-6"
          >
            Victor Lesedy
          </h1>
          <p 
            ref={subheadingRef}
            className="opacity-0 text-xl md:text-2xl text-portfolio-600 mb-10 max-w-3xl mx-auto text-balance"
          >
            Data Analyst & Product Manager specializing in tech-driven solutions for real-world challenges
          </p>
          <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-lg bg-portfolio-900 text-white font-medium transition-all hover:bg-portfolio-800 hover:shadow-md"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-white border border-portfolio-300 text-portfolio-900 font-medium transition-all hover:bg-portfolio-50 hover:border-portfolio-400"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-portfolio-500 hover:text-portfolio-700 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
