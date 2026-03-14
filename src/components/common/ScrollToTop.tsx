import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * useScrollToTop Hook
 * 
 * A custom hook that automatically scrolls the window to the top (0, 0)
 * whenever the React Router location path changes.
 * 
 * Usage:
 * Call this hook in any component that has access to React Router context.
 * Typically used in the Layout component.
 * 
 * @example
 * ```tsx
 * export const Layout = () => {
 *   useScrollToTop();
 *   return <div>...</div>;
 * }
 * ```
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

/**
 * ScrollToTop Component (Deprecated)
 * 
 * @deprecated Use the Layout component's built-in scroll behavior instead.
 * This component is kept for backward compatibility but should not be used.
 * 
 * @returns {null} This component does not render anything.
 */
export const ScrollToTop = () => {
  useScrollToTop();
  return null;
};