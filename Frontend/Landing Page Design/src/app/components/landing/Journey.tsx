import React from 'react';
import { motion } from 'motion/react';

const stages = [
  { title: "Chaos", description: "The state of disorder and overwhelm." },
  { title: "Structure", description: "Building the foundation of habits." },
  { title: "Discipline", description: "Consistently executing the plan." },
  { title: "Phoenix", description: "Rebirth into authority and control." },
];

export const Journey = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">The Journey</h2>
        <div className="relative">
           {/* Vertical Line */}
           <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 hidden md:block" />
           
           <div className="space-y-12">
             {stages.map((stage, index) => (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: index * 0.1 }}
                 className={`flex flex-col md:flex-row items-center gap-8 ${
                   index % 2 === 0 ? 'md:flex-row-reverse' : ''
                 }`}
               >
                 <div className="flex-1 w-full" />
                 
                 <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 border-4 border-slate-900 shrink-0 hidden md:flex">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                 </div>
                 
                 <div className={`flex-1 w-full text-center md:text-left ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                 }`}>
                   <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-orange-500/30 transition-colors duration-300">
                     <h3 className="text-xl font-semibold mb-2 text-white">{stage.title}</h3>
                     <p className="text-slate-400">{stage.description}</p>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};
