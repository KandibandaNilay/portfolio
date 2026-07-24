import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-lightbg dark:bg-darkbg"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <motion.p
          className="mt-4 text-lg font-poppins font-semibold text-primary"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;