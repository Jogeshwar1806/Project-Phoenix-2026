import React from 'react';
import { motion } from 'motion/react';
import { Flame, AlertCircle, ShieldCheck, ArrowUpCircle } from 'lucide-react';

const steps = [
  { icon: Flame, text: "A spark in the ashes." },
  { icon: AlertCircle, text: "Facing pain, failure, and collapse." },
  { icon: ShieldCheck, text: "Choosing discipline over comfort." },
  { icon: ArrowUpCircle, text: "Rising again, stronger than before." },
];

export const Story = () => {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center space-y-4 p-8 border border-slate-800/50 rounded-2xl bg-slate-900/20 backdrop-blur-sm"
            >
              <step.icon className="w-12 h-12 text-orange-500/80 mb-2" strokeWidth={1.5} />
              <p className="text-xl font-light text-slate-300">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
