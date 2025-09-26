import React from 'react';
import { Award, ArrowRight, Globe, Database, Code, Cloud } from 'lucide-react';

const Skills = () => {
  // Tech Stack con espacio para poner tus imágenes
  const techStack = [
    {
      name: 'Vue.js',
      description: 'Frontend Framework',
      icon: '/images/vue.png',
      color: 'from-slate-700 to-slate-800',
      link: 'https://vuejs.org/'
    },
    {
      name: 'C#',
      description: 'Desktop & Backend Development',
      icon: '/images/c.png',
      color: 'from-slate-700 to-slate-800',
      link: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
    },
    {
      name: 'Laravel',
      description: 'Web Development',
      icon: '/images/laravel.png',
      color: 'from-slate-700 to-slate-800',
      link: 'https://laravel.com/'
    },
    {
      name: 'Python',
      description: 'Programming Language',
      icon: '/images/py.webp',
      color: 'from-slate-700 to-slate-800',
      link: 'https://www.python.org/'
    },
    {
      name: 'SQL Server',
      description: 'Database Management',
      icon: '/images/sql.png',
      color: 'from-slate-700 to-slate-800',
      link: 'https://www.microsoft.com/en-us/sql-server'
    },
    {
      name: 'PHP',
      description: 'Backend Development',
      icon: '/images/php.png',
      color: 'from-slate-700 to-slate-800',
      link: 'https://www.php.net/'
    },
    {
      name: 'TailwindCSS',
      description: 'Utility-First CSS Framework',
      icon: '/images/tailwind.png',
      color: 'from-slate-700 to-slate-800',
      link: 'https://tailwind.png/'
    },
    {
      name: 'HTML',
      description: 'Web Markup Language',
      icon: '/images/html.png',
      color: 'from-slate-700 to-slate-800',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    }
  ];

  // Certificaciones
  const certifications = [
    {
      name: 'Cisco – Introduction to IoT and Digital Transformation',
      provider: 'Cisco Networking Academy',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-slate-700 to-slate-800'
    },
    {
      name: 'Cisco – Getting Started with Cisco Packet Tracer',
      provider: 'Cisco Networking Academy',
      icon: <Code className="w-6 h-6" />,
      color: 'from-slate-700 to-slate-800'
    },
    {
      name: 'Software Development Student',
      provider: 'ITCA-FEPADE',
      icon: <Award className="w-6 h-6" />,
      color: 'from-slate-700 to-slate-800'
    }
  ];

  // Servicios
  const services = [
    {
      name: 'Software Development',
      description: 'Building applications with Vue.js, C#, Laravel, and Python.',
      icon: <Code className="w-8 h-8" />,
      color: 'from-slate-700 to-slate-800'
    },
    {
      name: 'Database Management',
      description: 'Experience with SQL Server, MySQL, Oracle, and PostgreSQL.',
      icon: <Database className="w-8 h-8" />,
      color: 'from-slate-700 to-slate-800'
    },
    {
      name: 'Server Administration',
      description: 'Managing Apache servers on Linux/Ubuntu.',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-slate-700 to-slate-800'
    },
    {
      name: 'Testing & QA',
      description: 'Documenting bugs and performing exhaustive tests.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-slate-700 to-slate-800'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">

        {/* My Stacks Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-slate-300" />
            </div>
            <h2 className="text-4xl font-bold">My Stacks</h2>
          </div>
          <p className="text-slate-400 mb-12 text-lg">
            Core technologies I focus on for software development and problem solving.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {techStack.map((tech, index) => (
              <a
                key={index}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:bg-slate-800/50 hover:border-slate-700 transition-all duration-300 cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center`}>
                    <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain"/>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200">{tech.name}</h3>
                    <p className="text-slate-500 text-sm">{tech.description}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-slate-300 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* My Certifications Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-slate-300" />
            </div>
            <h2 className="text-4xl font-bold">My Certifications</h2>
          </div>
          <p className="text-slate-400 mb-12 text-lg">
            Academic and professional certifications achieved so far.
          </p>
          
          <div className="grid md:grid-cols-1 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="group bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:bg-slate-800/50 hover:border-slate-700 transition-all duration-300 cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center text-slate-300`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200">{cert.name}</h3>
                    <p className="text-slate-500 text-sm">{cert.provider}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-slate-300 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* My Services and Skills Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-slate-300" />
            </div>
            <h2 className="text-4xl font-bold">My Services and Skills</h2>
          </div>
          <p className="text-slate-400 mb-12 text-lg">
            Areas where I apply my skills and continuously improve as a software developer.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:bg-slate-800/50 hover:border-slate-700 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-slate-300 mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-200 mb-3">{service.name}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
