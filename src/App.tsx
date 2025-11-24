/* --- IMPORTS --- */
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';


/* --- PAGES IMPORTS --- */
import AnimatedRoutes from '@/components/AnimatedRoutes';
import CookieConsent from '@/components/CookieConsent';


/* --- CODE --- */

// Initialize React Query Client
const queryClient = new QueryClient();

// Define the main App component
const App = () => {
  useEffect(() => {
    const applyTheme = () => {
      const saved = localStorage.getItem('theme') || 'auto';
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = saved === 'dark' || (saved === 'auto' && prefersDark);
      document.documentElement.classList.toggle('dark', isDark);
    };
    applyTheme();
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      const saved = localStorage.getItem('theme') || 'auto';
      if (saved === 'auto') applyTheme();
    };
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CookieConsent />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};


// Export the App component
export default App;
