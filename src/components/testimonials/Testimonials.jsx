import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    text: 'Nilay transformed our reporting process. The dashboards are intuitive and insightful.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    role: 'Head of Finance, FinanceHub',
    text: 'Incredible attention to detail. Our financial reports are now accurate and real-time.',
    rating: 5,
  },
  {
    name: 'Mike Johnson',
    role: 'Operations Manager, DataDrive',
    text: 'The self-service BI solution he built saved us countless hours. Highly recommended!',
    rating: 5,
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="testimonials" className="py-20 bg-lightbg/50 dark:bg-darkbg/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="section-title gradient-text">Testimonials</h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass-card relative"
            >
              <FaQuoteLeft className="text-primary/30 text-3xl absolute top-3 right-4" />
              <div className="flex text-yellow-400 text-sm">
                {[...Array(t.rating)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="mt-2 text-gray-700 dark:text-gray-300 italic">"{t.text}"</p>
              <div className="mt-4 font-semibold">{t.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;