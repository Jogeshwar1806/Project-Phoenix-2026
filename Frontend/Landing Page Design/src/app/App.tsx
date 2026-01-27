import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Landing & Auth
import { LandingPage } from './components/landing/LandingPage';
import { LoginPage } from './components/auth/LoginPage';
import { SignupPage } from './components/auth/SignupPage';

// Dashboard
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { DashboardHome } from './components/dashboard/DashboardHome';
import { InnerPage } from './components/dashboard/InnerPage';

// Mock Pages
const DailyTracker = () => (
  <InnerPage title="Daily Tracker" description="Master your daily habits and routines.">
    <div className="text-slate-500 text-center py-20">Tracker Interface Placeholder</div>
  </InnerPage>
);

const StudyTracker = () => (
  <InnerPage title="Study Tracker" description="Track your learning progress and sessions.">
    <div className="text-slate-500 text-center py-20">Study Tracker Interface Placeholder</div>
  </InnerPage>
);

const FinanceTracker = () => (
  <InnerPage title="Finance Tracker" description="Take control of your wealth and expenses.">
    <div className="text-slate-500 text-center py-20">Finance Interface Placeholder</div>
  </InnerPage>
);

const Journal = () => (
  <InnerPage title="Journal" description="Reflect on your thoughts and progress.">
    <div className="text-slate-500 text-center py-20">Journal Interface Placeholder</div>
  </InnerPage>
);

const FailureTracker = () => (
  <InnerPage title="Failure Tracker" description="Analyze and learn from your mistakes.">
    <div className="text-slate-500 text-center py-20">Failure Tracker Interface Placeholder</div>
  </InnerPage>
);

const Rules = () => (
  <InnerPage title="Rules & Discipline" description="Define your code of conduct.">
    <div className="text-slate-500 text-center py-20">Rules Interface Placeholder</div>
  </InnerPage>
);

const Analytics = () => (
  <InnerPage title="Analytics" description="Visualize your transformation over time.">
    <div className="text-slate-500 text-center py-20">Analytics Interface Placeholder</div>
  </InnerPage>
);

const Settings = () => (
  <InnerPage title="Settings" description="Configure your Phoenix system.">
    <div className="text-slate-500 text-center py-20">Settings Interface Placeholder</div>
  </InnerPage>
);


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        <Route path="/app" element={<DashboardLayout />}>
           <Route index element={<DashboardHome />} />
           <Route path="daily" element={<DailyTracker />} />
           <Route path="study" element={<StudyTracker />} />
           <Route path="finance" element={<FinanceTracker />} />
           <Route path="journal" element={<Journal />} />
           <Route path="failure" element={<FailureTracker />} />
           <Route path="rules" element={<Rules />} />
           <Route path="analytics" element={<Analytics />} />
           <Route path="settings" element={<Settings />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
