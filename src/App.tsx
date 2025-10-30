/* --- IMPORTS --- */
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


/* --- PAGES IMPORTS --- */
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Resultados from './pages/Resultados';
import Perfil from './pages/Perfil';
import ChatCliente from './pages/ChatCliente';
import ChatSupervisor from './pages/ChatSupervisor';
import NotFound from './pages/NotFound';


/* --- CODE --- */

// Initialize React Query Client
const queryClient = new QueryClient();

// Define the main App component
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/onboarding' element={<Onboarding />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/resultados' element={<Resultados />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/chat/cliente' element={<ChatCliente />} />
          <Route path='/chat/supervisor/:sessionId?' element={<ChatSupervisor />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


// Export the App component
export default App;
