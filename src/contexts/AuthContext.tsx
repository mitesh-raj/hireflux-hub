
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from "@/components/ui/use-toast";

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'candidate' | 'admin';
  profileCompleted: boolean;
  avatar?: string;
  provider?: 'email' | 'google' | 'github';
  resume?: {
    name: string;
    type: string;
    url: string;
  };
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  socialLogin: (provider: 'google' | 'github') => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const mockUsers = [
    {
      id: '1',
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'password',
      role: 'admin' as const,
      profileCompleted: true,
      avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=admin',
      provider: 'email' as const
    },
    {
      id: '2',
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password',
      role: 'candidate' as const,
      profileCompleted: false,
      avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=john',
      provider: 'email' as const
    },
    {
      id: '3',
      name: 'Google User',
      email: 'google@example.com',
      password: '',
      role: 'candidate' as const,
      profileCompleted: true,
      avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=google',
      provider: 'google' as const
    },
    {
      id: '4',
      name: 'GitHub User',
      email: 'github@example.com',
      password: '',
      role: 'candidate' as const,
      profileCompleted: true, 
      avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=github',
      provider: 'github' as const
    }
  ];

  useEffect(() => {
    const storedUser = localStorage.getItem('jobPortalUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('jobPortalUser');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const foundUser = mockUsers.find(
        user => user.email === email && user.password === password
      );
      
      if (foundUser) {
        const { password, ...userWithoutPassword } = foundUser;
        console.log("User role during login:", userWithoutPassword.role); // Debug log
        setUser(userWithoutPassword);
        localStorage.setItem('jobPortalUser', JSON.stringify(userWithoutPassword));
        toast({
          title: "Login successful",
          description: `Welcome back, ${foundUser.name}!`,
        });
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      setError((error as Error).message);
      toast({
        title: "Login failed",
        description: (error as Error).message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const socialLogin = async (provider: 'google' | 'github') => {
    setIsLoading(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      const foundUser = mockUsers.find(user => user.provider === provider);
      
      if (foundUser) {
        const { password, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem('jobPortalUser', JSON.stringify(userWithoutPassword));
        toast({
          title: "Login successful",
          description: `Welcome, ${foundUser.name}!`,
        });
      } else {
        const newUser: User = {
          id: `${mockUsers.length + 1}`,
          name: `${provider.charAt(0).toUpperCase() + provider.slice(1)} User`,
          email: `${provider}@example.com`,
          role: 'candidate',
          profileCompleted: true,
          avatar: `https://api.dicebear.com/6.x/avataaars/svg?seed=${provider}`,
          provider: provider
        };
        
        setUser(newUser);
        localStorage.setItem('jobPortalUser', JSON.stringify(newUser));
        toast({
          title: "Login successful",
          description: `Welcome, ${newUser.name}!`,
        });
      }
    } catch (error) {
      setError((error as Error).message);
      toast({
        title: "Login failed",
        description: "Could not authenticate with the provider",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const emailExists = mockUsers.some(user => user.email === email);
      
      if (emailExists) {
        throw new Error('Email already exists');
      }
      
      const newUser: User = {
        id: (mockUsers.length + 1).toString(),
        name,
        email,
        role: 'candidate',
        profileCompleted: false,
        avatar: `https://api.dicebear.com/6.x/avataaars/svg?seed=${name.replace(/\s/g, '')}`,
        provider: 'email'
      };
      
      setUser(newUser);
      localStorage.setItem('jobPortalUser', JSON.stringify(newUser));
      toast({
        title: "Registration successful",
        description: "Your account has been created.",
      });
    } catch (error) {
      setError((error as Error).message);
      toast({
        title: "Registration failed",
        description: (error as Error).message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('jobPortalUser');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('jobPortalUser', JSON.stringify(updatedUser));
    }
  };

  const value = {
    user,
    isLoading,
    error,
    login,
    register,
    socialLogin,
    logout,
    updateUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
