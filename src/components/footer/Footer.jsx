import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

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
    <footer className="py-10 border-t border-slate-200/50 dark:border-white/10 bg-white/50 dark:bg-darkbg/95 backdrop-blur-md relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/60 dark:border-slate-800/80">
          
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-5 text-left">
            <Link 
              to="/" 
              onClick={() => handleNavClick('/')} 
              className="inline-block text-2xl font-poppins font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary transition-all hover:opacity-80"
            >
              Nilay Kandibanda
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Freelance Power BI Consultant transforming complex data into clear, automated executive insights and business intelligence dashboards.
            </p>
            
            {/* Social Icons – Upgraded with glowing primary theme colors */}
            <div className="flex items-center space-x-4 pt-2">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://linkedin.com/in/nilay-kandibanda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                <FaLinkedin className="text-lg" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="mailto:nilaykandibanda@gmail.com"
                aria-label="Email"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                <FaEnvelope className="text-lg" />
              </motion.a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Navigation</h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="/#about" onClick={(e) => { e.preventDefault(); handleNavClick('/#about'); }} className="hover:text-primary dark:hover:text-primary transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#services" onClick={(e) => { e.preventDefault(); handleNavClick('/#services'); }} className="hover:text-primary dark:hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#experience" onClick={(e) => { e.preventDefault(); handleNavClick('/#experience'); }} className="hover:text-primary dark:hover:text-primary transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="/#projects" onClick={(e) => { e.preventDefault(); handleNavClick('/#projects'); }} className="hover:text-primary dark:hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary dark:hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Direct Reach</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Based in <strong className="text-slate-900 dark:text-white font-semibold">Paris, France</strong> — available worldwide for remote consulting.
            </p>
            <div className="pt-3">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('/#contact'); }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Start a Conversation
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Nilay Kandibanda. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 hover:text-primary dark:hover:text-primary transition-colors focus:outline-none"
            aria-label="Back to top"
          >
            <span className="font-semibold tracking-wide">Back to top</span>
            <div className="p-2.5 rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
              <FaArrowUp />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;