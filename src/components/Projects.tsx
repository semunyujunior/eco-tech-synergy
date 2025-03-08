
import { useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: "Etaka – Smart Waste Management",
    description: "A digital waste management platform connecting households with waste collectors using subscription-based and on-demand service models.",
    highlights: [
      "Leveraging data analytics to optimize collection routes",
      "Product strategy & roadmap planning",
      "Collaborating with engineers on logistics",
      "Implementing waste tracking insights",
      "Driving sustainable partnerships"
    ],
    category: "Waste Management",
    color: "from-emerald-500 to-teal-700"
  },
  {
    id: 2,
    title: "CIAT Digital Solutions",
    description: "Agricultural stakeholder platform improving food security by enhancing information flow between traders, farmers, and researchers.",
    highlights: [
      "Data-driven insights on market trends",
      "WhatsApp Chat Analyzer development",
      "Encouraging digital adoption",
      "Analytics for best practices tracking"
    ],
    category: "Agriculture",
    color: "from-green-500 to-emerald-700"
  },
  {
    id: 3,
    title: "Financial Data Terminal",
    description: "A locally hosted financial data platform designed for quick investment decision-making.",
    highlights: [
      "Market data analytics for forex and equity",
      "Customizable dashboards",
      "AI-driven predictive analytics",
      "Historical data visualization",
      "User-friendly interface design"
    ],
    category: "Fintech",
    color: "from-blue-500 to-indigo-700"
  },
  {
    id: 4,
    title: "MoonChild Streetwear Brand",
    description: "A streetwear clothing line inspired by nostalgia and classic album cover art with the tagline: \"Under the Moon, We Rewind Time.\"",
    highlights: [
      "Data-driven trend analysis",
      "Sustainable fashion practices",
      "Digital-first approach",
      "Community-driven collaborations"
    ],
    category: "Fashion",
    color: "from-indigo-500 to-purple-700"
  }
];

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-24 bg-portfolio-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-portfolio-500 font-medium mb-2 scroll-trigger">My Work</p>
          <h2 className="section-title scroll-trigger">Projects</h2>
          <div className="w-20 h-1 bg-portfolio-900 mx-auto mt-4 mb-8 scroll-trigger"></div>
          <p className="text-lg text-portfolio-700 max-w-3xl mx-auto scroll-trigger">
            Exploring innovative solutions across various industries, from waste management to finance and agriculture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card overflow-hidden scroll-trigger card-hover-effect"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="pill bg-white/20 text-white mb-4">{project.category}</div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-sm font-semibold uppercase text-portfolio-500 mb-4">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-portfolio-500 mr-2">•</span>
                      <span className="text-portfolio-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
