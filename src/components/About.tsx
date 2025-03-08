
import { useEffect, useRef } from 'react';

export default function About() {
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

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-portfolio-500 font-medium mb-2 scroll-trigger">Get to know me</p>
          <h2 className="section-title scroll-trigger">About Me</h2>
          <div className="w-20 h-1 bg-portfolio-900 mx-auto mt-4 mb-8 scroll-trigger"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="scroll-trigger">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-portfolio-200 transform rotate-3"></div>
              <div className="relative overflow-hidden rounded-2xl bg-portfolio-900 aspect-[4/5]">
                <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-950 via-portfolio-900 to-portfolio-800 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-light">
                  Data Analyst & Product Manager
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-lg text-portfolio-700 mb-6 scroll-trigger">
              I am a data analyst, product manager, and digital consultant passionate about leveraging technology to solve real-world problems. With experience in fintech, waste management, and agritech, I specialize in using data to drive product decisions and collaborating with engineers to build scalable, user-centered solutions.
            </p>
            <p className="text-lg text-portfolio-700 mb-6 scroll-trigger">
              My work revolves around innovation, data-driven decision-making, and fostering technological advancements that improve industries and communities.
            </p>
            <p className="text-lg text-portfolio-700 mb-8 scroll-trigger">
              With a keen eye for emerging trends, I focus on creating digital ecosystems that enhance accessibility, automation, and sustainability. Whether it's optimizing waste collection, improving financial data transparency, or enabling smart agriculture, I am committed to using insights to make life easier and businesses more efficient.
            </p>
            
            <div className="grid grid-cols-2 gap-4 scroll-trigger">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-portfolio-900"></div>
                <span className="text-portfolio-800 font-medium">Data Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-portfolio-900"></div>
                <span className="text-portfolio-800 font-medium">Product Management</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-portfolio-900"></div>
                <span className="text-portfolio-800 font-medium">Tech Consulting</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-portfolio-900"></div>
                <span className="text-portfolio-800 font-medium">Sustainable Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
