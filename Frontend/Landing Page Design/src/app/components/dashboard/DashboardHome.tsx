import React from 'react';
import { StatusCard } from './StatusCard';
import { ProgressCircle } from './ProgressCircle';
import { SummaryCards } from './SummaryCards';

export const DashboardHome = () => {
  return (
    <div>
      <StatusCard />
      <ProgressCircle />
      <SummaryCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Weekly Insight */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-2">Weekly Insight</h3>
          <p className="text-lg text-white font-medium">Consistency improved. Finance discipline needs attention.</p>
        </div>
        
        {/* Daily Quote */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-2">Daily Quote</h3>
          <blockquote className="text-lg text-white font-serif italic">"We must all suffer from one of two pains: the pain of discipline or the pain of regret."</blockquote>
          <p className="text-slate-500 text-sm mt-2 text-right">— Jim Rohn</p>
        </div>
      </div>
    </div>
  );
};
