import React from 'react';
import { Calendar, Globe } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: "Java App Testing and Development Analyst",
      company: "Sherwin Williams Central America",
      companyLink: "https://www.sherwin-williams.com/",
      period: "2022 - 2022",
      description: `Development and testing of an internal Java (Android Studio) application, focused on improving purchase and sales management.
- Collaboration with the development team to ensure high-quality standards, identify critical errors, and maintain detailed documentation.
- Execution of thorough testing and preparation of comprehensive reports on software performance and functionality.
- Creation of user manuals and operation guides to facilitate employee adoption of the application.
- Development of technical skills in software testing and understanding of how technology can optimize operational processes.`,
    },
    {
      position: "Software Developer – Recicladora Fernández",
      company: "Freelance Project",
      companyLink: "",
      period: "2025",
      description: `Implementation of a comprehensive control system for the company, including client and vendor registration, purchase and product management, full billing system, and financial reports.
- Development using Laravel, with interface design in CSS and MySQL database.
- Creation of a functional and scalable system tailored to the specific needs of the recycling company.`,
    },
  ];

  return (
    <section id="experience" className="py-16 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">My Experience</h2>
        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          I adapt quickly to diverse work environments, leveraging my skills and experience to deliver effective and comprehensive software solutions.
        </p>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-700/30 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/30">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">{exp.position}</h3>
                  {exp.companyLink ? (
                    <p className="text-slate-300">
                      <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">
                        {exp.company}
                      </a>
                    </p>
                  ) : (
                    <p className="text-slate-300">{exp.company}</p>
                  )}
                </div>
                <div className="flex items-center gap-2 text-slate-400 mt-2 md:mt-0">
                  <Calendar size={16} />
                  {exp.period}
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed whitespace-pre-line">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
