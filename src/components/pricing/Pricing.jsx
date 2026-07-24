import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck } from 'react-icons/fa';

const plans = [
  {
    name: 'Starter',
    price: '$500',
    desc: 'For small businesses needing basic dashboards.',
    features: ['1 Dashboard', 'Up to 3 data sources', 'Basic DAX', 'Email support'],
  },
  {
    name: 'Professional',
    price: '$1200',
    desc: 'For growing teams with complex reporting needs.',
    features: ['5 Dashboards', 'Unlimited data sources', 'Advanced DAX & Power Query', 'Priority support', 'Training session'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For large organizations requiring full BI solutions.',
    features: ['Unlimited dashboards', 'Custom ETL', 'Role-based security', '24/7 support', 'On-site training'],
  },
];

const Pricing = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="section-title gradient-text">Pricing</h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`glass-card relative ${plan.popular ? 'border-2 border-primary shadow-xl' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="text-4xl font-bold text-primary my-3">{plan.price}</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{plan.desc}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full py-2 bg-primary text-white rounded-full font-semibold hover:shadow-lg transition-all">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;