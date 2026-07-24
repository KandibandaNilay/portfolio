import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from '../themetoggle/ThemeToggle';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();
  const location = useLocation();

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-poppins font-bold gradient-text">
              Nilay Kandibanda
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => {
                  if (link.to.startsWith('/#')) {
                    const id = link.to.split('#')[1];
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <motion.div
          className="h-1 bg-gradient-to-r from-primary via-secondary to-accent"
          style={{ width: `${progress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-3/4 max-w-sm glass z-40 p-8 pt-20 md:hidden"
      >
        <nav className="flex flex-col space-y-6 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="hover:text-primary transition-colors"
              onClick={() => {
                setIsOpen(false);
                if (link.to.startsWith('/#')) {
                  const id = link.to.split('#')[1];
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;