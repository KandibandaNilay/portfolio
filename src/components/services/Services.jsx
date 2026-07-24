import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaChartLine, FaChartBar, FaDatabase, FaCode, 
  FaTable, FaFileExcel, FaCogs, FaUsers, FaRobot, FaArrowRight 
} from 'react-icons/fa';

const servicesList = [
  { 
    icon: <FaChartLine />, 
    title: 'Power BI Dashboard Development',
    description: 'Custom, end-to-end Power BI report design built around key business metrics with intuitive drill-downs.'
  },
  { 
    icon: <FaChartBar />, 
    title: 'Executive & Management Reporting',
    description: 'High-level executive summaries and C-suite KPI tracking designed for fast, strategic decision-making.'
  },
  { 
    icon: <FaTable />, 
    title: 'Financial Reporting & P&L Dashboards',
    description: 'Automated P&L, balance sheet, and revenue variance analysis modeled cleanly for finance teams.'
  },
  { 
    icon: <FaDatabase />, 
    title: 'Data Modeling & ETL Pipelines',
    description: 'Star-schema data architecture, data warehouse connections, and automated data refresh pipeline setups.'
  },
  { 
    icon: <FaCode />, 
    title: 'DAX & Power Query Development',
    description: 'Complex calculation logic, measure optimization, and reliable data transformation scripts.'
  },
  { 
    icon: <FaFileExcel />, 
    title: 'Excel Automation & Integration',
    description: 'Connecting legacy Excel workflows to Power BI, reducing manual copy-paste routines.'
  },
  { 
    icon: <FaCogs />, 
    title: 'Dashboard Optimization',
    description: 'Performance tuning slow-loading DAX measures and heavy data models for instant visual rendering.'
  },
  { 
    icon: <FaRobot />, 
    title: 'Self-Service BI Setup',
    description: 'Creating standardized datasets, templates, and governance so teams can build their own reports safely.'
  },
  { 
    icon: <FaUsers />, 
    title: 'User Training & BI Support',
    description: 'Hands-on team training, documentation, and ongoing maintenance to drive BI adoption across your business.'
  },
];

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Capabilities & Solutions</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text">Services Offered</h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
            Delivering end-to-end data intelligence — from raw database extraction to executive dashboard delivery.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card p-7 rounded-2xl flex flex-col justify-between border border-gray-200/60 dark:border-gray-800 shadow-md hover:shadow-xl hover:border-primary/40 transition-all group"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary text-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="pt-6 mt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-xs font-semibold text-primary">
                <span>Tailored Analytics</span>
                <FaArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 rounded-3xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Have a custom BI requirement?</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Let's discuss how we can structure and automate your reporting pipeline.</p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-primary text-white font-semibold text-sm rounded-full shadow-md hover:bg-primary/90 transition-all whitespace-nowrap"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;