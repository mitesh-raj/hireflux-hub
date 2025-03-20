
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';

const Layout = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [mounted, setMounted] = useState(false);
  
  // Pages that don't need the navbar
  const noNavbarPages = ['/login', '/register', '/unauthorized'];
  const showNavbar = user && !noNavbarPages.includes(location.pathname);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
