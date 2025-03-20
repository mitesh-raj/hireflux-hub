
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Briefcase } from 'lucide-react';

const Index = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        // Redirect based on user role
        if (user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/dashboard');
        }
      } else {
        navigate('/login');
      }
    }
  }, [user, isLoading, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-accent/30 to-background">
      <div className="text-center animate-pulse-light">
        <Briefcase className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">HireFlux</h1>
        <p className="text-xl text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
};

export default Index;
