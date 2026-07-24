import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (to) => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-lightbg/50 dark:bg-darkbg/90 dark:backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-200/60 dark:border-gray-800/80">
          
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4 text-left">
            <Link 
              to="/" 
              onClick={() => handleNavClick('/')} 
              className="inline-block text-2xl font-poppins font-extrabold tracking-tight gradient-text"
            >
              Nilay Kandibanda
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
              Freelance Power BI Consultant transforming complex data into clear, automated executive insights and business intelligence dashboards.
            </p>
            <div className="flex items-center space-x-3 text-lg text-gray-600 dark:text-gray-400 pt-2">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://linkedin.com/in/nilay-kandibanda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="mailto:nilaykandibanda@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="/#about" onClick={(e) => { e.preventDefault(); handleNavClick('/#about'); }} className="hover:text-primary transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#services" onClick={(e) => { e.preventDefault(); handleNavClick('/#services'); }} className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#experience" onClick={(e) => { e.preventDefault(); handleNavClick('/#experience'); }} className="hover:text-primary transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="/#projects" onClick={(e) => { e.preventDefault(); handleNavClick('/#projects'); }} className="hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">Direct Reach</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Based in <strong className="text-gray-800 dark:text-gray-200">Paris, France</strong> — available worldwide for remote consulting.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('/#contact'); }}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-primary/30 hover:scale-105 transition-all"
              >
                Start a Conversation
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Nilay Kandibanda. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-primary transition-colors focus:outline-none"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-xs">
              <FaArrowUp />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;