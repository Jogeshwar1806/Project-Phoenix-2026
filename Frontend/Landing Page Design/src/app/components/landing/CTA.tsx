import React from 'react';
import { Link } from 'react-router-dom';

export const CTA = () => {
  return (
    <section className="py-32 bg-slate-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Enter the Phoenix System</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </section>
  );
};
