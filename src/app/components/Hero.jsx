'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Code } from 'lucide-react';

// Componente para la hora local solo en cliente
const LocalTime = () => {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!currentTime) return null; // No renderiza nada en SSR

  return currentTime.toLocaleTimeString('en-US', {
    hour12: false,
    timeZone: 'America/El_Salvador',
  });
};

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 relative">
      {/* Local Time - Fixed Top Right */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-slate-700/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-slate-100 font-medium shadow-lg">
        <MapPin size={14} />
        Local Time (SV): <LocalTime />
      </div>

      <div className="container mx-auto px-6">
        {/* Status Bar */}
        <div className="flex flex-wrap gap-4 mb-12 text-sm">
          <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available For Work
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <h2 className="text-lg text-blue-400 mb-2">Hello I Am</h2>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Steven Alfaro
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Student of Technical Software Engineering from El Salvador, passionate about software development
              and improving technological processes, with experience in testing and developing Java applications 
              and knowledge in various technologies and databases.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">3</div>
                <div className="text-sm text-slate-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">1</div>
                <div className="text-sm text-slate-400">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">3</div>
                <div className="text-sm text-slate-400">Certifications</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/images/yo.png" 
                    alt="Steven Alfaro" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <Code size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
