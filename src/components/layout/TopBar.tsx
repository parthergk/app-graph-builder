import React from 'react';
import { Menu, Maximize2, Moon, Sun, ChevronRight, X } from 'lucide-react';

interface TopBarProps {
  onMenuToggle?: () => void;
  onFitView?: () => void;
  onToggleTheme?: () => void;
  isMobilePanelOpen: boolean;
  theme?: 'light' | 'dark';
}

export const TopBar: React.FC<TopBarProps> = ({
  isMobilePanelOpen,
  onMenuToggle,
  onFitView,
  onToggleTheme,
  theme = 'dark',
}) => {
  return (
    <header className="w-full h-16 bg-bg-panel border-b border-border-dark flex items-center justify-between px-4 sm:px-6 select-none z-50 shadow-[0_1px_2px_rgba(0,0,0,0.02)] dark:shadow-none">
      {/* Left side: Brand Logo and Title */}
      <div className="flex items-center gap-4">
        {/* Custom Node Graph Builder Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center text-foreground">
            <svg
              className="w-6 h-6 text-primary"
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
          <span className="font-sans font-semibold text-[17px] text-foreground tracking-wide hidden sm:inline">
            App Graph Builder
          </span>
        </div>
      </div>

      {/* Right side: Action Buttons */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Fit View Button */}
        <button
          onClick={onFitView}
          className="flex items-center gap-2 px-2.5 py-2 sm:px-3 sm:py-1.5 rounded-lg border border-border-dark hover:bg-bg-active text-[13px] font-medium text-text-muted hover:text-foreground transition-all duration-200 cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
          <span className="hidden sm:inline">Fit View</span>
        </button>

        {/* Theme Toggle Button with chevron */}
        <button
          onClick={onToggleTheme}
          className="flex items-center gap-1.5 px-2.5 py-2 sm:px-3 sm:py-1.5 rounded-lg border border-border-dark hover:bg-bg-active text-[13px] font-medium text-text-muted hover:text-foreground transition-all duration-200 cursor-pointer"
          title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        >
          {theme === 'light' ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
          <ChevronRight className="w-3.5 h-3.5 hidden sm:inline" />
        </button>

        {/* Menu/Hamburger toggle */}
        <button
          onClick={onMenuToggle}
          className="text-text-muted hover:text-foreground p-2 transition-colors duration-200 cursor-pointer lg:hidden"
          aria-label="Toggle Menu"
        >
          {
            isMobilePanelOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />
          }
        </button>
      </div>
    </header>
  );
};

export default TopBar;
