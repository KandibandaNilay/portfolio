import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    role: '',
    company: '',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    text: 'Nilay transformed our reporting process completely. The dashboards are incredibly intuitive, visually striking, and actionable.',
    rating: 5,
    tag: 'Dashboard Automation',
  },
  {
    name: 'Jane Smith',
    role: '',
    company: '',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    text: 'Incredible attention to detail. Our real-time financial reporting cut our month-end reconciliation time in half.',
    rating: 5,
    tag: 'Financial BI',
  },
  {
    name: 'Mike Johnson',
    role: '',
    company: '',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    text: 'The self-service BI infrastructure built for us saved hundreds of engineering hours. Absolutely top-tier work!',
    rating: 5,
    tag: 'Custom ETL & Power BI',
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-950/5 dark:bg-slate-950/50">
      {/* Trendy Ambient Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight">
            Trusted by Leaders <span className="gradient-text">& Tech Teams</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm md:text-base">
            Here is how data-driven solutions helped teams make better decisions faster.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between p-8 rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all"
            >
              <div>
                {/* Top Bar: Tag & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700">
                    {t.tag}
                  </span>
                  <FaQuoteLeft className="text-primary/20 group-hover:text-primary/40 transition-colors text-2xl" />
                </div>

                {/* Rating Stars */}
                <div className="flex text-amber-400 text-xs gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Body Text */}
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-normal">
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20"
                />
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role} {t.company && `• ${t.company}`}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;