'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  const getIcon = () => {
    if (theme === 'system') {
      return <Monitor className="w-3 h-3 sm:w-4 sm:h-4" />;
    }
    return resolvedTheme === 'dark' ?
      <Moon className="w-3 h-3 sm:w-4 sm:h-4" /> :
      <Sun className="w-3 h-3 sm:w-4 sm:h-4" />;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-[#008C8C] hover:bg-[#008C8C] hover:text-white transition-colors text-[#008C8C]"
        aria-label="Toggle theme"
      >
        {getIcon()}
      </button>

      {isOpen && (
        <div className="absolute right-0 bottom-full mb-2 w-32 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg z-50">
          <div className="py-1">
            <button
              onClick={() => handleThemeChange('light')}
              className={`w-full px-4 py-2 text-left text-sm transition-colors flex items-center gap-2 ${
                theme === 'light' ? 'bg-[#008C8C] text-white' : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Sun className="w-4 h-4" />
              Light
            </button>
            <button
              onClick={() => handleThemeChange('dark')}
              className={`w-full px-4 py-2 text-left text-sm transition-colors flex items-center gap-2 ${
                theme === 'dark' ? 'bg-[#008C8C] text-white' : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Moon className="w-4 h-4" />
              Dark
            </button>
            <button
              onClick={() => handleThemeChange('system')}
              className={`w-full px-4 py-2 text-left text-sm transition-colors flex items-center gap-2 ${
                theme === 'system' ? 'bg-[#008C8C] text-white' : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Monitor className="w-4 h-4" />
              System
            </button>
          </div>
        </div>
      )}
    </div>
  );
}