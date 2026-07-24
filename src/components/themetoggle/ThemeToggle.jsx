import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full glass text-primary transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </motion.button>
  );
};

export default ThemeToggle;