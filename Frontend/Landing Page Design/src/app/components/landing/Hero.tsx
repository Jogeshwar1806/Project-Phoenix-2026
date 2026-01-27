import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1762869572743-95f59d354798?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwYWJzdHJhY3QlMjBtaW5pbWFsJTIwYmFja2dyb3VuZCUyMGRhcmslMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzY5NTQwMzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white"
        >
          Project Phoenix
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl font-light text-slate-300 mb-8"
        >
          From Ashes to Authority
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          A personal life operating system built for discipline, focus, and transformation.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            to="/login"
            className="px-8 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-200 transition-colors duration-200 min-w-[140px]"
          >
            Login
          </Link>
          <Link 
            to="/signup"
            className="px-8 py-3 bg-transparent border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200 min-w-[140px]"
          >
            Sign Up
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
