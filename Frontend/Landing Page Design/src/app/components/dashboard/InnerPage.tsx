import React from 'react';

interface InnerPageProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const InnerPage = ({ title, description, children }: InnerPageProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
        {description && (
          <p className="text-slate-400">{description}</p>
        )}
      </div>
      
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 min-h-[400px]">
        {children}
      </div>
    </div>
  );
};
