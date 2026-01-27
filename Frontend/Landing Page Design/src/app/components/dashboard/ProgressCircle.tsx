import React from 'react';

export const ProgressCircle = () => {
  const percentage = 62;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center py-8 mb-8">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="128"
            cy="128"
            r={radius}
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            className="text-slate-800"
          />
          {/* Progress Circle */}
          <circle
            cx="128"
            cy="128"
            r={radius}
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="text-orange-500 transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute flex flex-col items-center text-center">
          <span className="text-slate-400 text-sm uppercase tracking-widest mb-1">Phoenix Progress</span>
          <span className="text-5xl font-bold text-white mb-2">{percentage}%</span>
        </div>
      </div>
      <p className="text-slate-400 mt-4 text-sm font-medium tracking-wide">From Ashes <span className="text-orange-500">→</span> Phoenix</p>
    </div>
  );
};
