import React from 'react';
import { Menu } from 'lucide-react';

interface TopBarProps {
  onMenuClick: () => void;
}

export const TopBar = ({ onMenuClick }: TopBarProps) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-30">
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
        <h1 className="font-bold text-lg">Alex Phoenix</h1>
        <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400">
          <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300">v1.0</span>
          <span>Score: <span className="text-orange-500 font-mono">845</span></span>
        </div>
      </div>
      
      <button 
        onClick={onMenuClick}
        className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
      >
        <Menu size={24} />
      </button>
    </header>
  );
};
