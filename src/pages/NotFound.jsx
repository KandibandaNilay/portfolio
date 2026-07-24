import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-7xl font-bold gradient-text"
      >
        404
      </motion.h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <Link to="/" className="mt-6 px-6 py-3 bg-primary text-white rounded-full hover:shadow-lg transition">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;