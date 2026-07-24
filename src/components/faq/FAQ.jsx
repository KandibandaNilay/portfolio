import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    q: 'How long does it take to build a dashboard?',
    a: 'Typically 1 to 3 weeks depending on data complexity, pipeline readiness, and required dashboard views. Simple reports can be turned around in a few days.',
    category: 'Timeline',
  },
  {
    q: 'Do you provide post-delivery support and training?',
    a: 'Yes, every project includes thorough user training sessions, documentation, and a post-launch support window to ensure your team feels confident.',
    category: 'Support',
  },
  {
    q: 'Can you work with my existing data sources?',
    a: 'Absolutely. I integrate directly with SQL databases, Cloud Data Warehouses (Snowflake, BigQuery), Excel/CSV workflows, REST APIs, and CRM platforms.',
    category: 'Integration',
  },
  {
    q: 'How do we handle data security and access controls?',
    a: 'Security is prioritized through Row-Level Security (RLS), role-based permissions, and strict alignment with your existing IT and security protocols.',
    category: 'Security',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Opens first FAQ by default
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-slate-950/5 dark:bg-slate-950/40">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm md:text-base">
            Everything you need to know about starting a project, data integration, and delivery.
          </p>
        </div>

        {/* Accordion Cards */}
        <div ref={ref} className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className={`rounded-2xl transition-all duration-300 backdrop-blur-xl border ${
                  isOpen
                    ? 'bg-white/90 dark:bg-slate-900/80 border-primary/40 shadow-lg shadow-primary/5'
                    : 'bg-white/50 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 flex justify-between items-center text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {faq.q}
                    </span>
                  </div>

                  {/* Rotating Chevron Icon */}
                  <div
                    className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                      isOpen
                        ? 'bg-primary text-white rotate-180'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    <FaChevronDown className="text-xs" />
                  </div>
                </button>

                {/* Animated Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/60 mt-1 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;