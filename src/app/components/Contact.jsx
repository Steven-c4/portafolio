'use client';

import React, { useState, useEffect } from 'react';
import { Github, Instagram, Mail } from 'lucide-react'; // <--- Agregué Mail

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      timeZone: 'America/El_Salvador'
    });
  };

  const discordIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 55" className="w-6 h-6 fill-current text-slate-300 group-hover:text-white">
      <path d="M60.104 4.552A58.563 58.563 0 0046.91 0a41.425 41.425 0 00-1.93 3.98 55.055 55.055 0 00-16.04 0A41.513 41.513 0 0026.01 0a58.31 58.31 0 00-13.18 4.55C4.33 19.098 0 33.427 0 47.65a70.33 70.33 0 0010.78 8.77c8.033 5.88 15.61 4.815 15.61 4.815l1.785-3.057a49.016 49.016 0 01-7.64-3.78c14.165 9.78 29.712 9.78 43.892 0a48.76 48.76 0 01-7.64 3.78l1.784 3.057s7.578 1.064 15.61-4.815A70.33 70.33 0 0071 47.65c0-14.223-4.33-28.552-10.896-43.098zM29.41 37.195c-3.117 0-5.672-2.857-5.672-6.374s2.53-6.375 5.672-6.375c3.164 0 5.694 2.857 5.672 6.375 0 3.517-2.53 6.374-5.672 6.374zm12.19 0c-3.117 0-5.672-2.857-5.672-6.374s2.53-6.375 5.672-6.375c3.164 0 5.672 2.857 5.672 6.375 0 3.517-2.508 6.374-5.672 6.374z"/>
    </svg>
  );

  return (
    <section id="home" className="pt-20 pb-16 relative">
      <div className="container mx-auto px-6">
        {/* Social Media Links - Fixed Right Side */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
          <a 
            href="https://github.com/Steven-c4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center hover:bg-slate-700 hover:border-slate-500 transition-all duration-300 group"
          >
            <Github size={20} className="text-slate-300 group-hover:text-white" />
          </a>
          <a 
            href="https://www.instagram.com/badtz_steven/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:border-pink-400 transition-all duration-300 group"
          >
            <Instagram size={20} className="text-slate-300 group-hover:text-white" />
          </a>
          <a 
            href="https://www.linkedin.com/in/leonardo-landaverde-397086316/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-400 transition-all duration-300 group"
          >
            <svg className="w-5 h-5 text-slate-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            href="https://discord.com/users/badtz_steven" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-400 transition-all duration-300 group"
          >
            {discordIcon}
          </a>
          
          {/* AQUÍ AGREGUÉ EL CORREO (PC) */}
          <a 
            href="mailto:stevenalfaro505@gmail.com" 
            className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center hover:bg-red-600 hover:border-red-400 transition-all duration-300 group"
          >
            <Mail size={20} className="text-slate-300 group-hover:text-white" />
          </a>
        </div>

        {/* Social Media Links - Mobile Version */}
        <div className="flex lg:hidden justify-center gap-4 mt-12 flex-wrap">
          <a 
            href="https://github.com/Steven-c4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center hover:bg-slate-700 hover:border-slate-500 transition-all duration-300"
          >
            <Github size={20} className="text-slate-300" />
          </a>
          <a 
            href="https://www.instagram.com/badtz_steven/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
          >
            <Instagram size={20} className="text-slate-300" />
          </a>
          <a 
            href="https://www.linkedin.com/in/leonardo-landaverde-397086316/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            href="https://discord.com/users/badtz_steven" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-all duration-300"
          >
            {discordIcon}
          </a>

          {/* AQUÍ AGREGUÉ EL CORREO (MOVIL) */}
          <a 
            href="mailto:stevenalfaro505@gmail.com" 
            className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300"
          >
            <Mail size={20} className="text-slate-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;