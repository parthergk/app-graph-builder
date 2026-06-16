import { useState } from 'react';
import {
  Home,
  Network,
  Box,
  Database,
  LineChart,
  Settings,
  HelpCircle
} from 'lucide-react';




export const LeftRail = () => {
  const [activeNav, setActiveNav] = useState('home');

  return (
    <div className="h-16 w-full fixed bottom-0 left-0 right-0 z-30 bg-bg-rail border-t border-border-dark flex flex-row items-center justify-around px-2 select-none md:h-[calc(100vh-64px)] md:w-16 md:relative md:bottom-auto md:left-auto md:right-auto md:z-0 md:flex-col md:border-t-0 md:border-r md:py-4 md:px-0 md:justify-between">
      {/* Navigation Items */}
      <div className="flex flex-row md:flex-col gap-1.5 xs:gap-3 md:gap-5 w-full items-center justify-around md:justify-start">
        {/* Home Icon Container */}
        <button
          onClick={() => setActiveNav('home')}
          className={`w-11 h-11 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${activeNav === 'home'
              ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/10 dark:bg-bg-active dark:text-white dark:border dark:border-[#2d2d34]'
              : 'text-text-muted hover:text-foreground hover:bg-bg-active dark:hover:text-white dark:hover:bg-bg-active/50'
            }`}
          aria-label="Home"
        >
          <Home className="w-5 h-5" />
        </button>

        {/* Graph Icon */}
        <button
          onClick={() => setActiveNav('graph')}
          className={`w-11 h-11 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${activeNav === 'graph'
              ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/10 dark:bg-bg-active dark:text-white dark:border dark:border-[#2d2d34]'
              : 'text-text-muted hover:text-foreground hover:bg-bg-active dark:hover:text-white dark:hover:bg-bg-active/50'
            }`}
          aria-label="Network Graph"
        >
          <Network className="w-5 h-5" />
        </button>

        {/* Package Icon */}
        <button
          onClick={() => setActiveNav('package')}
          className={`w-11 h-11 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${activeNav === 'package'
              ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/10 dark:bg-bg-active dark:text-white dark:border dark:border-[#2d2d34]'
              : 'text-text-muted hover:text-foreground hover:bg-bg-active dark:hover:text-white dark:hover:bg-bg-active/50'
            }`}
          aria-label="Packages"
        >
          <Box className="w-5 h-5" />
        </button>

        {/* Database Icon */}
        <button
          onClick={() => setActiveNav('database')}
          className={`w-11 h-11 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${activeNav === 'database'
              ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/10 dark:bg-bg-active dark:text-white dark:border dark:border-[#2d2d34]'
              : 'text-text-muted hover:text-foreground hover:bg-bg-active dark:hover:text-white dark:hover:bg-bg-active/50'
            }`}
          aria-label="Database"
        >
          <Database className="w-5 h-5" />
        </button>

        {/* Line Chart Icon */}
        <button
          onClick={() => setActiveNav('analytics')}
          className={`w-11 h-11 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${activeNav === 'analytics'
              ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/10 dark:bg-bg-active dark:text-white dark:border dark:border-[#2d2d34]'
              : 'text-text-muted hover:text-foreground hover:bg-bg-active dark:hover:text-white dark:hover:bg-bg-active/50'
            }`}
          aria-label="Analytics"
        >
          <LineChart className="w-5 h-5" />
        </button>

        {/* Settings Icon */}
        <button
          onClick={() => setActiveNav('settings')}
          className={`w-11 h-11 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${activeNav === 'settings'
              ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/10 dark:bg-bg-active dark:text-white dark:border dark:border-[#2d2d34]'
              : 'text-text-muted hover:text-foreground hover:bg-bg-active dark:hover:text-white dark:hover:bg-bg-active/50'
            }`}
          aria-label="Settings"
        >
          <Settings className="w-5 h-5" />
        </button>

        {/* Help Icon (Visible in row on mobile, separate container on desktop) */}
        <button
          onClick={() => setActiveNav('help')}
          className={`w-11 h-11 md:w-10 md:h-10 rounded-xl flex md:hidden items-center justify-center transition-all duration-200 cursor-pointer ${activeNav === 'help'
              ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/10 dark:bg-bg-active dark:text-white dark:border dark:border-[#2d2d34]'
              : 'text-text-muted hover:text-foreground hover:bg-bg-active dark:hover:text-white dark:hover:bg-bg-active/50'
            }`}
          aria-label="Help"
        >
          <HelpCircle className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Help Icon (Visible only on desktop) */}
      <button
        onClick={() => setActiveNav('help')}
        className={`w-10 h-10 rounded-xl hidden md:flex items-center justify-center transition-all duration-200 cursor-pointer ${activeNav === 'help'
            ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/10 dark:bg-bg-active dark:text-white dark:border dark:border-[#2d2d34]'
            : 'text-text-muted hover:text-foreground hover:bg-bg-active dark:hover:text-white dark:hover:bg-bg-active/50'
          }`}
        aria-label="Help"
      >
        <HelpCircle className="w-5 h-5" />
      </button>
    </div>
  );
};

export default LeftRail;
