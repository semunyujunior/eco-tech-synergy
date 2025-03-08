
import { useEffect, useRef } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-trigger');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-portfolio-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-portfolio-800 opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-portfolio-800 opacity-10"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-portfolio-300 font-medium mb-2 scroll-trigger">Reach Out</p>
          <h2 className="section-title text-white scroll-trigger">Get In Touch</h2>
          <div className="w-20 h-1 bg-portfolio-300 mx-auto mt-4 mb-8 scroll-trigger"></div>
          <p className="text-lg text-portfolio-300 max-w-3xl mx-auto scroll-trigger">
            Interested in working together? Feel free to contact me for collaborations or questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="scroll-trigger">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-2 mr-4 rounded-lg bg-portfolio-800/50 text-portfolio-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm text-portfolio-300 mb-1">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-white hover:text-portfolio-300 transition-colors">[Your Email]</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 mr-4 rounded-lg bg-portfolio-800/50 text-portfolio-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm text-portfolio-300 mb-1">LinkedIn</h4>
                  <a href="#" className="text-white hover:text-portfolio-300 transition-colors">[Your LinkedIn Profile]</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 mr-4 rounded-lg bg-portfolio-800/50 text-portfolio-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm text-portfolio-300 mb-1">Website</h4>
                  <a href="#" className="text-white hover:text-portfolio-300 transition-colors">[Your Portfolio Website]</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 mr-4 rounded-lg bg-portfolio-800/50 text-portfolio-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm text-portfolio-300 mb-1">Twitter/X</h4>
                  <a href="#" className="text-white hover:text-portfolio-300 transition-colors">[Your Twitter Handle]</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="scroll-trigger">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-portfolio-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg bg-portfolio-800/50 border border-portfolio-700 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-500 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-portfolio-300 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg bg-portfolio-800/50 border border-portfolio-700 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-500 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-portfolio-300 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-portfolio-800/50 border border-portfolio-700 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-500 transition-all resize-none"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 rounded-lg bg-portfolio-500 text-white font-medium transition-all hover:bg-portfolio-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
