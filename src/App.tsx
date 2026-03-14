import { RouterProvider } from 'react-router';
import { router } from './routes';
import './styles/globals.css';

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
 */
function App() {
  return <RouterProvider router={router} />;
}

export default App;