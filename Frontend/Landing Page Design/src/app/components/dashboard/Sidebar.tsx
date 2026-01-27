import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, LayoutDashboard, Calendar, BookOpen, DollarSign, 
  Book, AlertTriangle, ScrollText, BarChart2, Settings, LogOut 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/app' },
  { icon: Calendar, label: 'Daily Tracker', path: '/app/daily' },
  { icon: BookOpen, label: 'Study Tracker', path: '/app/study' },
  { icon: DollarSign, label: 'Finance Tracker', path: '/app/finance' },
  { icon: Book, label: 'Journal', path: '/app/journal' },
  { icon: AlertTriangle, label: 'Failure Tracker', path: '/app/failure' },
  { icon: ScrollText, label: 'Rules & Discipline', path: '/app/rules' },
  { icon: BarChart2, label: 'Analytics', path: '/app/analytics' },
  { icon: Settings, label: 'Settings', path: '/app/settings' },
];

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-64 bg-slate-900 border-l border-slate-800 z-50 shadow-2xl"
          >
            <div className="p-4 flex justify-between items-center border-b border-slate-800">
              <span className="font-bold text-lg text-white">Menu</span>
              <button onClick={onClose} className="p-2 text-slate-400 hover:text-white">
                <X size={20} />
              </button>
            </div>
            
            <nav className="p-4 space-y-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-slate-800 text-white' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              
              <Link
                to="/login" 
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-slate-800/50 hover:text-red-300 transition-colors mt-8"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </Link>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
