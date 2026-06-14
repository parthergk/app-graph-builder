import React from 'react';
import { Menu, Maximize2, Moon, ChevronRight } from 'lucide-react';

interface TopBarProps {
  onMenuToggle?: () => void;
  onFitView?: () => void;
  onToggleTheme?: () => void;
  onSettingsClick?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  onMenuToggle,
  onFitView,
  onToggleTheme,
}) => {
  return (
    <header className="w-full h-16 bg-bg-panel border-b border-border-dark flex items-center justify-between px-6 select-none z-50">
      {/* Left side: Brand Logo and Title */}
      <div className="flex items-center gap-4">
        {/* Custom Node Graph Builder Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center text-white">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" />
              <line x1="12" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
              <line x1="6" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="6" r="3" fill="currentColor" />
              <circle cx="6" cy="18" r="3" fill="currentColor" />
              <circle cx="18" cy="18" r="3" fill="currentColor" />
            </svg>
          </div>
          <span className="font-sans font-semibold text-[17px] text-white tracking-wide">
            App Graph Builder
          </span>
        </div>
      </div>

      {/* Right side: Action Buttons */}
      <div className="flex items-center gap-3">
        {/* Fit View Button */}
        <button
          onClick={onFitView}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-dark hover:bg-bg-active text-[13px] font-medium text-white transition-all duration-200 cursor-pointer"
        >
          <Maximize2 className="w-4 h-4 text-text-muted" />
          <span>Fit View</span>
        </button>

        {/* Theme Toggle Button with chevron */}
        <button
          onClick={onToggleTheme}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-dark hover:bg-bg-active text-[13px] font-medium text-white transition-all duration-200 cursor-pointer"
        >
          <Moon className="w-4 h-4 text-text-muted" />
          <ChevronRight className="w-3.5 h-3.5 text-text-muted" />
        </button>

       {/* Menu/Hamburger toggle */}
        <button
          onClick={onMenuToggle}
          className="text-text-muted hover:text-white transition-colors duration-200 cursor-pointer"
          aria-label="Toggle Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default TopBar;
