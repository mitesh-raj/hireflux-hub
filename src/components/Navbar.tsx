
import { useState, useEffect } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { Menu, X, Bell, User, Briefcase, UserCog, LogOut, Settings, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  const navLinks = user?.role === 'admin' 
    ? [
        { name: 'Dashboard', path: '/admin', icon: <Briefcase className="w-4 h-4 mr-2" /> },
        { name: 'Manage Jobs', path: '/admin/jobs', icon: <Briefcase className="w-4 h-4 mr-2" /> },
        { name: 'Applications', path: '/admin/applications', icon: <UserCog className="w-4 h-4 mr-2" /> },
        { name: 'Settings', path: '/admin/settings', icon: <Settings className="w-4 h-4 mr-2" /> }
      ]
    : [
        { name: 'Dashboard', path: '/dashboard', icon: <Briefcase className="w-4 h-4 mr-2" /> },
        { name: 'Browse Jobs', path: '/jobs', icon: <Briefcase className="w-4 h-4 mr-2" /> },
        { name: 'My Applications', path: '/applications', icon: <FileText className="w-4 h-4 mr-2" /> }
      ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/70 dark:bg-black/70 backdrop-blur-lg shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to={user?.role === 'admin' ? '/admin' : '/dashboard'} className="flex items-center">
              <Briefcase className="h-8 w-8 mr-2 text-primary" />
              <span className="text-xl font-semibold">HireFlux</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `flex items-center text-sm font-medium transition-colors hover:text-primary
                  ${isActive 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"></span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    {user?.avatar ? (
                      <AvatarImage src={user.avatar} alt={user.name} />
                    ) : null}
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {user?.name ? getInitials(user.name) : 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center p-2">
                  <Avatar className="h-10 w-10 mr-2">
                    {user?.avatar ? (
                      <AvatarImage src={user.avatar} alt={user.name} />
                    ) : null}
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {user?.name ? getInitials(user.name) : 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{user?.name}</p>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex cursor-pointer items-center">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                {user?.role === 'admin' && (
                  <DropdownMenuItem asChild>
                    <Link to="/admin/settings" className="flex cursor-pointer items-center">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="flex cursor-pointer items-center text-destructive focus:text-destructive"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-panel mx-4 my-2 animate-scale-in overflow-hidden">
          <div className="p-4">
            <div className="flex items-center mb-4">
              <Avatar className="h-10 w-10 mr-3">
                {user?.avatar ? (
                  <AvatarImage src={user.avatar} alt={user.name} />
                ) : null}
                <AvatarFallback className="bg-primary/10 text-primary">
                  {user?.name ? getInitials(user.name) : 'U'}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{user?.name}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
            </div>
            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors
                    ${isActive 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    }`
                  }
                  onClick={closeMenu}
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              ))}
              
              {/* Mobile profile and logout */}
              <NavLink
                to="/profile"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={closeMenu}
              >
                <User className="w-4 h-4 mr-2" />
                Profile
              </NavLink>
              
              <button
                className="flex w-full items-center px-3 py-2 rounded-md text-base font-medium text-destructive hover:bg-destructive/10"
                onClick={() => {
                  closeMenu();
                  handleLogout();
                }}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
