
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Expertise from "../components/Expertise";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Initialize scroll animation observers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with the scroll-trigger class
    document.querySelectorAll('.scroll-trigger').forEach((el) => {
      observer.observe(el);
    });

    // Update scroll indicator width on scroll
    const updateScrollIndicator = () => {
      const scrollIndicator = document.querySelector('.scroll-indicator') as HTMLElement;
      if (scrollIndicator) {
        const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        scrollIndicator.style.width = `${scrollPercentage}%`;
      }
    };

    window.addEventListener('scroll', updateScrollIndicator);
    updateScrollIndicator(); // Initialize on first load
    
    // Clean up
    return () => {
      document.querySelectorAll('.scroll-trigger').forEach((el) => {
        observer.unobserve(el);
      });
      window.removeEventListener('scroll', updateScrollIndicator);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="scroll-indicator" /> {/* Add it directly in the DOM structure */}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Expertise />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
