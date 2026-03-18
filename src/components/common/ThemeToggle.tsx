/**
 * ThemeToggle Component
 * 
 * A button that toggles between light and dark modes for The Wire Brand.
 * 
 * Features:
 * - Toggles .dark class on document root
 * - Persists preference to localStorage
 * - Respects OS preference on first load
 * - Smooth icon transition animation
 * - Accessible with ARIA labels
 * 
 * @example
 * <ThemeToggle />
 */

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    // Initialize state immediately on mount
    if (typeof window === 'undefined') return false;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') return true;
    if (savedTheme === 'light') return false;
    
    // Default to OS preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [mounted, setMounted] = useState(false);

  // Apply theme class on mount and when isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      console.log('🌙 Dark mode active');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('☀️ Light mode active');
    }
  }, [isDark]);

  // Mark as mounted
  useEffect(() => {
    setMounted(true);
    
    // Log initial state
    const savedTheme = localStorage.getItem('theme');
    console.log('Initial theme state:', { savedTheme, isDark, osPreference: window.matchMedia('(prefers-color-scheme: dark)').matches });
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Prevent flash of unstyled content
  if (!mounted) {
    return (
      <div className="w-10 h-10" aria-hidden="true" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-3 hover:opacity-70 transition-opacity relative min-w-[44px] min-h-[44px] flex items-center justify-center"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
          rotate: isDark ? 180 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun size={20} color="white" className="dark:text-[var(--twb-color-gold)]" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : -180,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon size={20} color="white" className="dark:text-[var(--twb-color-gold)]" />
      </motion.div>
      
      {/* Spacer to maintain button size */}
      <div className="opacity-0" aria-hidden="true">
        <Sun size={20} />
      </div>
    </button>
  );
};