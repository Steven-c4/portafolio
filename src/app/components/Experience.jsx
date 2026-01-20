'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
// Importamos el hook del idioma
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { language } = useLanguage(); // Obtenemos el idioma actual ('en' o 'es')

  // --- DICCIONARIO DE TEXTOS ---
  const t = {
    en: {
      title: "Trajectory",
      subtitle: "My academic and professional path.",
      educationTitle: "Education",
      experienceTitle: "Experience",
      present: "PRESENT",
      // Education Items
      itca: {
        title: "Technical Software Engineering",
        desc: "Second-year student. Comprehensive training in web development, databases, and server administration."
      },
      inti: {
        title: "Technical Bachelor in Software Development",
        desc: "Specialized technical high school education focused on programming logic, algorithms, and software fundamentals."
      },
      cisco: {
        desc: "Certification in networking fundamentals, communication protocols, and basic security."
      },
      // Experience Items
      pentcloud: {
        title: "Software Developer & Data Analyst",
        // CAMBIO AQUÍ: Regional Fixed Billing
        assign: "Assigned to Claro (Regional Fixed Billing - Central America)", 
        summary: "Supporting the Regional Fixed Billing cycle operations for Central America. Focusing on ETL execution and massive data validation.",
        bullets: [
          "Backend Support (PL/SQL): Executing stored procedures to validate clients and assign billing cycles across the region.",
          "Data Integrity: Diagnosing errors (No Data Found, duplicates) and reporting findings.",
          "Automation: Developing logic (Excel/Scripts) to validate records."
        ]
      },
      recicladora: {
        title: "Software Developer",
        type: "Freelance Project",
        summary: "Implementation of a comprehensive management system for a recycling company, including modules for clients, providers, purchases, products, billing, and financial reports.",
        bullets: [
          "Backend development with PHP using Laravel, optimizing system architecture, scalability, and security.",
          "Frontend development with Vue.js, creating a modern, dynamic interface focused on a fluid user experience.",
          "MySQL database configuration and administration, ensuring data integrity and efficiency.",
          "Delivery of a functional, customizable solution aligned with the company's operational processes."
        ]
      },
      sherwin: {
        title: "Java App Testing and Development Analyst",
        summary: "Active participation in testing and improving an internal Java (Android Studio) application to optimize purchase and sales management.",
        bullets: [
          "Collaboration with the development team in identifying, documenting, and resolving critical errors.",
          "Creation of performance reports and user manuals, facilitating system adoption by staff.",
          "Strengthening of software testing skills, ensuring the quality and functionality of the final product."
        ]
      }
    },
    es: {
      title: "Trayectoria",
      subtitle: "Mi camino académico y profesional.",
      educationTitle: "Educación",
      experienceTitle: "Experiencia",
      present: "ACTUALIDAD",
      // Education Items
      itca: {
        title: "Técnico en Ingeniería de Software",
        desc: "Estudiante de segundo año. Formación integral en desarrollo web, bases de datos y administración de servidores."
      },
      inti: {
        title: "Bachillerato Técnico en Desarrollo de Software",
        desc: "Educación técnica especializada enfocada en lógica de programación, algoritmos y fundamentos de software."
      },
      cisco: {
        desc: "Certificación en fundamentos de redes, protocolos de comunicación y seguridad básica."
      },
      // Experience Items
      pentcloud: {
        title: "Desarrollador de Software y Analista de Datos",
        // CAMBIO AQUÍ: Facturación Fija Regional
        assign: "Asignado a Claro (Facturación Fija Regional - Centroamérica)",
        summary: "Apoyo en las operaciones del ciclo de Facturación Fija a nivel regional (Centroamérica). Enfoque en ejecución de ETL y validación masiva de datos.",
        bullets: [
          "Soporte Backend (PL/SQL): Ejecución de procedimientos almacenados para validar clientes y asignar ciclos de facturación.",
          "Integridad de Datos: Diagnóstico de errores (No Data Found, duplicados) y reporte de hallazgos.",
          "Automatización: Desarrollo de lógica (Excel/Scripts) para validar registros."
        ]
      },
      recicladora: {
        title: "Desarrollador de Software",
        type: "Proyecto Freelance",
        summary: "Implementación de un sistema de gestión integral para una recicladora, incluyendo módulos de clientes, proveedores, compras, productos y facturación.",
        bullets: [
          "Desarrollo Backend con PHP (Laravel), optimizando la arquitectura del sistema y la seguridad.",
          "Desarrollo Frontend con Vue.js, creando una interfaz moderna y dinámica.",
          "Administración de base de datos MySQL, asegurando la integridad de los datos.",
          "Entrega de una solución funcional alineada con los procesos operativos de la empresa."
        ]
      },
      sherwin: {
        title: "Analista de Pruebas y Desarrollo Java",
        summary: "Participación activa en pruebas y mejora de una aplicación interna Java (Android Studio) para optimizar la gestión de compras y ventas.",
        bullets: [
          "Colaboración con el equipo de desarrollo en la identificación y resolución de errores críticos.",
          "Creación de reportes de rendimiento y manuales de usuario.",
          "Fortalecimiento de habilidades de pruebas de software (QA), asegurando la calidad del producto final."
        ]
      }
    }
  };

  // Seleccionamos el contenido según el idioma actual
  const content = t[language];

  return (
    <section id="experience" className="py-24 bg-black text-white relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-purple-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* TÍTULO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4">{content.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-neutral-400">{content.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* --- COLUMNA 1: EDUCACIÓN --- */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-900/50">
                <GraduationCap className="text-blue-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">{content.educationTitle}</h3>
            </div>

            <div className="space-y-12 border-l-2 border-neutral-800 ml-3 pl-8 relative">
              
              {/* ITCA */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-black bg-blue-600"></span>
                <h4 className="text-xl font-bold text-white">{content.itca.title}</h4>
                <p className="text-blue-400 font-medium mb-1">ITCA-FEPADE</p>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3 font-mono">
                  <Calendar size={12} /> 2024 - {content.present}
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">{content.itca.desc}</p>
              </motion.div>

              {/* INTI */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-black bg-neutral-700"></span>
                <h4 className="text-xl font-bold text-white">{content.inti.title}</h4>
                <p className="text-blue-400 font-medium mb-1">Instituto Nacional Técnico Industrial (INTI)</p>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3 font-mono">
                  <Calendar size={12} /> 2021 - 2023
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">{content.inti.desc}</p>
              </motion.div>

              {/* CISCO */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-black bg-neutral-700"></span>
                <h4 className="text-lg font-bold text-white">Cisco Networking Essentials</h4>
                <p className="text-blue-400 font-medium mb-1">Cisco Networking Academy</p>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3 font-mono">
                  <Calendar size={12} /> 2023
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">{content.cisco.desc}</p>
              </motion.div>

            </div>
          </div>

          {/* --- COLUMNA 2: EXPERIENCIA --- */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-green-900/20 rounded-xl border border-green-900/50">
                <Briefcase className="text-green-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">{content.experienceTitle}</h3>
            </div>

            <div className="space-y-12 border-l-2 border-neutral-800 ml-3 pl-8 relative">

              {/* PENTCLOUD / CLARO */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-black bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                <h4 className="text-xl font-bold text-white">{content.pentcloud.title}</h4>
                <div className="mb-2">
                  <span className="text-green-400 font-medium">Pentcloud</span>
                  <span className="text-neutral-500 mx-2">|</span>
                  <span className="text-neutral-300 text-sm">{content.pentcloud.assign}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-4 font-mono">
                  <Calendar size={12} /> DEC 2025 - {content.present}
                </div>
                <p className="text-neutral-300 text-sm mb-4">{content.pentcloud.summary}</p>
                <ul className="text-neutral-400 text-sm space-y-2 list-disc list-inside marker:text-green-500">
                  {content.pentcloud.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>

              {/* RECICLADORA */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-black bg-green-500"></span>
                <h4 className="text-xl font-bold text-white">{content.recicladora.title}</h4>
                <p className="text-green-400 font-medium mb-1">Recicladora Fernández ({content.recicladora.type})</p>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3 font-mono">
                  <Calendar size={12} /> 2024-2025
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed mb-3">{content.recicladora.summary}</p>
                <ul className="text-neutral-400 text-sm space-y-2 list-disc list-inside marker:text-green-500">
                  {content.recicladora.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>

              {/* SHERWIN */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-black bg-green-500"></span>
                <h4 className="text-xl font-bold text-white">{content.sherwin.title}</h4>
                <p className="text-green-400 font-medium mb-1">Sherwin Williams Central America</p>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3 font-mono">
                  <Calendar size={12} /> 2023
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed mb-3">{content.sherwin.summary}</p>
                <ul className="text-neutral-400 text-sm space-y-2 list-disc list-inside marker:text-green-500">
                  {content.sherwin.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;  