import React from 'react';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const cards = [
  { title: "Daily Discipline", status: "Good", value: "92%", trend: "up", path: "/app/daily" },
  { title: "Study Progress", status: "Warning", value: "4 hrs", trend: "down", path: "/app/study" },
  { title: "Financial Control", status: "Good", value: "$Saved", trend: "up", path: "/app/finance" },
  { title: "Failure Tracing", status: "Good", value: "0 New", trend: "flat", path: "/app/failure" },
  { title: "Consistency", status: "Good", value: "High", trend: "up", path: "/app/analytics" },
];

export const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
      {cards.map((card, index) => (
        <Link 
          key={index} 
          to={card.path}
          className="bg-slate-900 border border-slate-800 p-4 rounded-xl hover:border-slate-700 transition-colors group"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-medium text-slate-400 group-hover:text-slate-200">{card.title}</h3>
            {card.trend === 'up' && <ArrowUp size={16} className="text-green-500" />}
            {card.trend === 'down' && <ArrowDown size={16} className="text-red-500" />}
            {card.trend === 'flat' && <Minus size={16} className="text-slate-500" />}
          </div>
          <div className="flex items-end justify-between">
            <span className="text-xl font-bold text-white">{card.value}</span>
            <span className={`text-xs px-2 py-1 rounded ${
              card.status === 'Good' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
            }`}>
              {card.status}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};
