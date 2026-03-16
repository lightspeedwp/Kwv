import { RouterProvider } from 'react-router';
import { router } from './routes';
import './styles/globals.css';
import { useEffect } from 'react';

/**
 * App Component
 * 
 * The root application component.
 * Uses React Router's Data mode with RouterProvider.
 * 
 * Features:
 * - Centralized routing via /routes.tsx
 * - Clean separation of concerns
 * - Global styles imported for theme system
 * - Sets page language to en-ZA (South African English) for WCAG 3.1.1 compliance
 * 
 * @updated 2026-03-16 - Added lang attribute for accessibility (WCAG 3.1.1)
 */
function App() {
  /**
   * Set page language attribute for accessibility
   * WCAG 3.1.1: Language of Page
   */
  useEffect(() => {
    document.documentElement.lang = 'en-ZA';
  }, []);

  return <RouterProvider router={router} />;
}

export default App;