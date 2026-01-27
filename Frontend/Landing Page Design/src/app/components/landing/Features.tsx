import React from 'react';
import { motion } from 'motion/react';
import { Calendar, BookOpen, DollarSign, AlertTriangle, BarChart2 } from 'lucide-react';

const features = [
  { name: "Daily Tracker", icon: Calendar, description: "Master your daily habits." },
  { name: "Study Tracker", icon: BookOpen, description: "Track your learning progress." },
  { name: "Finance Tracker", icon: DollarSign, description: "Take control of your wealth." },
  { name: "Failure Tracing", icon: AlertTriangle, description: "Learn from your mistakes." },
  { name: "Analytics", icon: BarChart2, description: "Visualize your transformation." },
];

export const Features = () => {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">System Controls</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-slate-900/40 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300"
            >
              <feature.icon className="w-10 h-10 text-slate-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
              <p className="text-slate-500 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
