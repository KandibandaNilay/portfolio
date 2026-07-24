import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  { q: 'How long does it take to build a dashboard?', a: 'Typically 2-4 weeks depending on complexity and data availability.' },
  { q: 'Do you provide training?', a: 'Yes, I offer user training and self-service BI setup.' },
  { q: 'Can you work with my existing data sources?', a: 'Absolutely. I work with SQL, Excel, cloud services, and more.' },
  { q: 'What is your pricing model?', a: 'I offer project-based or hourly rates. Contact me for a custom quote.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="section-title gradient-text">Frequently Asked Questions</h2>
        <div ref={ref}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              className="border-b border-gray-200 dark:border-gray-700 last:border-0"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full py-4 flex justify-between items-center text-left font-medium hover:text-primary transition-colors"
              >
                <span>{faq.q}</span>
                <span>{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-gray-600 dark:text-gray-400">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;