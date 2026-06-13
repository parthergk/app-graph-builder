import React, { useState } from 'react';
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
    <div className="h-[calc(100vh-64px)] flex border-r border-border-dark select-none">
      {/* 1. Narrow Vertical Navigation Rail */}
      <div className="w-16 h-full bg-[#050507] border-r border-border-dark flex flex-col items-center justify-between py-4">
        {/* Navigation Items */}
        <div className="flex flex-col gap-5 w-full items-center">
          {/* Home Icon Container */}
          <button
            onClick={() => setActiveNav('home')}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
              activeNav === 'home'
                ? 'bg-bg-active text-white border border-[#2d2d34]'
                : 'text-text-muted hover:text-white hover:bg-bg-active/50'
            }`}
            aria-label="Home"
          >
            <Home className="w-5 h-5" />
          </button>

          {/* Graph Icon */}
          <button
            onClick={() => setActiveNav('graph')}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
              activeNav === 'graph'
                ? 'bg-bg-active text-white border border-[#2d2d34]'
                : 'text-text-muted hover:text-white hover:bg-bg-active/50'
            }`}
            aria-label="Network Graph"
          >
            <Network className="w-5 h-5" />
          </button>

          {/* Package Icon */}
          <button
            onClick={() => setActiveNav('package')}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
              activeNav === 'package'
                ? 'bg-bg-active text-white border border-[#2d2d34]'
                : 'text-text-muted hover:text-white hover:bg-bg-active/50'
            }`}
            aria-label="Packages"
          >
            <Box className="w-5 h-5" />
          </button>

          {/* Database Icon */}
          <button
            onClick={() => setActiveNav('database')}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
              activeNav === 'database'
                ? 'bg-bg-active text-white border border-[#2d2d34]'
                : 'text-text-muted hover:text-white hover:bg-bg-active/50'
            }`}
            aria-label="Database"
          >
            <Database className="w-5 h-5" />
          </button>

          {/* Line Chart Icon */}
          <button
            onClick={() => setActiveNav('analytics')}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
              activeNav === 'analytics'
                ? 'bg-bg-active text-white border border-[#2d2d34]'
                : 'text-text-muted hover:text-white hover:bg-bg-active/50'
            }`}
            aria-label="Analytics"
          >
            <LineChart className="w-5 h-5" />
          </button>

          {/* Settings Icon */}
          <button
            onClick={() => setActiveNav('settings')}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
              activeNav === 'settings'
                ? 'bg-bg-active text-white border border-[#2d2d34]'
                : 'text-text-muted hover:text-white hover:bg-bg-active/50'
            }`}
            aria-label="Settings"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Help Icon */}
        <button
          onClick={() => setActiveNav('help')}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
            activeNav === 'help'
              ? 'bg-bg-active text-white border border-[#2d2d34]'
              : 'text-text-muted hover:text-white hover:bg-bg-active/50'
          }`}
          aria-label="Help"
        >
          <HelpCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default LeftRail;
