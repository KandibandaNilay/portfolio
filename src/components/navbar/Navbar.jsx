import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from '../themetoggle/ThemeToggle';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const progress = useScrollProgress();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/#about' },
    { name: 'Services', to: '/#services' },
    { name: 'Skills', to: '/#skills' },
    { name: 'Experience', to: '/#experience' },
    { name: 'Projects', to: '/#projects' },
    { name: 'Contact', to: '/#contact' },
    { name: 'Blog', to: '/blog' },
  ];

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle header glassmorphism effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section on home page
      if (location.pathname === '/') {
        const sections = ['about', 'services', 'skills', 'experience', 'projects', 'contact'];
        const current = sections.find((sec) => {
          const el = document.getElementById(sec);
          if (el) {
            const rect = el.getBoundingClientRect();
            return rect.top <= 200 && rect.bottom >= 200;
          }
          return false;
        });
        setActiveSection(current || '');
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle cross-page and hash smooth scrolling
  const handleNavClick = (to) => {
    setIsOpen(false);

    if (to === '/') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (to.startsWith('/#')) {
      const targetId = to.split('#')[1];
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: targetId } });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? 'glass shadow-lg dark:bg-darkbg/90 dark:backdrop-blur-lg'
      : 'bg-transparent dark:bg-darkbg/50 dark:backdrop-blur-sm'
  }`}
>
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => handleNavClick('/')}
            className="flex items-center space-x-2 group"
          >
            <span className="text-xl md:text-2xl font-poppins font-extrabold tracking-tight gradient-text group-hover:opacity-90 transition-opacity">
              Nilay Kandibanda
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isHashLink = link.to.startsWith('/#');
              const linkHash = isHashLink ? link.to.split('#')[1] : '';
              const isActive =
                (link.to === '/' && location.pathname === '/' && !activeSection) ||
                (isHashLink && activeSection === linkHash) ||
                (link.to === '/blog' && location.pathname.startsWith('/blog'));

              return (
                <a
                  key={link.name}
                  href={link.to}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.to);
                  }}
                  className={`relative text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/#contact');
              }}
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-primary text-white rounded-full shadow-md shadow-primary/20 hover:shadow-lg hover:scale-105 transition-all"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-xl text-gray-800 dark:text-gray-200 focus:outline-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="w-full h-0.5 bg-gray-200/30 dark:bg-gray-800/30">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Mobile Backdrop & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-xs glass bg-white/90 dark:bg-gray-900/95 shadow-2xl z-50 p-6 pt-20 lg:hidden flex flex-col justify-between border-l border-gray-200/50 dark:border-gray-800/50"
            >
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.to}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.to);
                    }}
                    className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-primary transition-colors py-1 border-b border-gray-100 dark:border-gray-800/50"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="pt-6">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/#contact');
                  }}
                  className="w-full block text-center py-3 bg-primary text-white font-semibold text-sm rounded-full shadow-lg shadow-primary/25"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;