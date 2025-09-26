import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Github, Instagram, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Minimalist Footer */}
      <footer className="border-t border-slate-700/30 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400">
            <div className="flex items-center gap-8 text-base">
              <span className="font-medium">@2025, All Rights Reserved</span>
              <span className="text-slate-600 text-lg font-semibold">404</span>
            </div>
            
            <div className="text-center">
              <span className="font-bold text-slate-200 text-2xl tracking-wide">Steven Alfaro</span>
            </div>
            
            <div className="text-center md:text-right text-base">
              <div className="text-slate-400 font-medium">
                <div>Portfolio in constant</div>
                <div>development</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;