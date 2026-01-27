import React from 'react';

export const StatusCard = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
      <h2 className="text-xl font-bold text-white mb-4">Current Status: <span className="text-orange-500">Phoenix in Progress</span></h2>
      <div className="grid grid-cols-3 gap-4 text-center divide-x divide-slate-800">
        <div>
          <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Days Active</p>
          <p className="text-2xl font-mono text-white">42</p>
        </div>
        <div>
          <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Current Streak</p>
          <p className="text-2xl font-mono text-white">12</p>
        </div>
        <div>
          <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Last Updated</p>
          <p className="text-2xl font-mono text-white">Today</p>
        </div>
      </div>
    </div>
  );
};
