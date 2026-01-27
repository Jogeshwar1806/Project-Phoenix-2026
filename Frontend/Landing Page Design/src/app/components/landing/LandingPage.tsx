import React from 'react';
import { Hero } from './Hero';
import { Story } from './Story';
import { Journey } from './Journey';
import { Features } from './Features';
import { CTA } from './CTA';

export const LandingPage = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Hero />
      <Story />
      <Journey />
      <Features />
      <CTA />
    </div>
  );
};
