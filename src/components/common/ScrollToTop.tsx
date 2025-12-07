import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * 
 * A utility component that automatically scrolls the window to the top (0, 0)
 * whenever the React Router location path changes.
 * 
 * Usage:
 * Place this component inside `<BrowserRouter>` but outside `<Routes>`.
 * 
 * @returns {null} This component does not render anything.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
