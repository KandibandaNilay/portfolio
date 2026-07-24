import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-lightbg/50 dark:bg-darkbg/50">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>© 2026 Nilay Kandibanda – Power BI Consultant</p>
        <p className="mt-1"></p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;