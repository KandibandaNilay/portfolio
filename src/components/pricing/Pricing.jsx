import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck } from 'react-icons/fa';

const services = [
  {
    name: 'Starter',
    desc: 'For small businesses needing basic dashboards.',
    features: ['1 Dashboard', 'Up to 3 data sources', 'Basic DAX', 'Email support'],
  },
  {
    name: 'Professional',
    desc: 'For growing teams with complex reporting needs.',
    features: [
      '5 Dashboards',
      'Unlimited data sources',
      'Advanced DAX & Power Query',
      'Priority support',
      'Training session',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    desc: 'For large organizations requiring full BI solutions.',
    features: [
      'Unlimited dashboards',
      'Custom ETL',
      'Role-based security',
      '24/7 support',
      'On-site training',
    ],
  },
];

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="section-title gradient-text text-center text-3xl font-bold mb-12">
          Services & Packages
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`glass-card relative flex flex-col p-6 rounded-2xl ${
                service.popular ? 'border-2 border-primary shadow-xl' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm min-h-[40px]">
                {service.desc}
              </p>

              <ul className="mt-6 space-y-3 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-primary shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full py-2.5 bg-primary text-white rounded-full font-semibold hover:shadow-lg transition-all">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;