import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Shadow Echoes",
      description: "Unity game where the player must survive waves of monsters, improving skills and strategies to progress through increasingly challenging levels.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop", // replace with a game screenshot if desired
      tags: ["Unity", "C#", "Game Design"],
      github: "https://github.com/Steven-c4/Shadow-Echoes",
      demo: "#" // replace if there’s a demo
    },
    {
      title: "Recicladora Fernández System",
      description: "Comprehensive control system for the recycling company, including client and vendor registration, purchase and product management, full billing system, and financial reports. Developed in Laravel, with CSS design and MySQL database.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop", // you can add a system screenshot
      tags: ["Laravel", "CSS", "MySQL"],
      github: "https://github.com/andyj2712/proyectoMH",
      demo: "#" // leave # if no demo
    },
    {
      title: "Mentari",
      description: "Open-source project on GitHub implementing web development functionalities and collaborative learning.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop", // add screenshot if desired
      tags: ["PHP", "Laravel", "Open Source"],
      github: "https://github.com/Francooz/mentarip",
      demo: "#" // add demo link if available
    }
  ];

  return (
    <section id="projects" className="py-16 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          Explore a collection of my most innovative development works.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-700/30 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-slate-600/30">
              
              {/* Preview Section */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-lg font-semibold uppercase tracking-wide">
                  Preview Coming Soon
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-slate-600/50 text-xs rounded-full text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                    <Github size={16} />
                    Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
