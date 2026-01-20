'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';

const LanguageBtn = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-bold shadow-lg hover:bg-white/20 transition-all group"
    >
      <Languages size={20} className="text-blue-400 group-hover:text-blue-300" />
      <span className="text-sm tracking-wide">
        {language === 'en' ? 'ES' : 'EN'}
      </span>
    </motion.button>
  );
};

export default LanguageBtn;