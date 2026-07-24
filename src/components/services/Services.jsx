import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaChartLine, FaChartBar, FaDatabase, FaCode, 
  FaTable, FaFileExcel, FaCogs, FaUsers, FaRobot 
} from 'react-icons/fa';

const servicesList = [
  { icon: <FaChartLine />, title: 'Power BI Dashboard Development' },
  { icon: <FaChartBar />, title: 'Executive & Management Reporting' },
  { icon: <FaChartLine />, title: 'KPI Dashboard Design' },
  { icon: <FaTable />, title: 'Financial Reporting & P&L Dashboard' },
  { icon: <FaDatabase />, title: 'Data Modeling & ETL Pipelines' },
  { icon: <FaCode />, title: 'DAX & Power Query Development' },
  { icon: <FaFileExcel />, title: 'Excel Automation' },
  { icon: <FaCogs />, title: 'Dashboard Optimization' },
  { icon: <FaRobot />, title: 'Self-Service BI Setup' },
  { icon: <FaUsers />, title: 'User Training & Business Analysis' },
];

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="section-title gradient-text">Services</h2>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-card flex flex-col items-center text-center p-6 hover:shadow-primary/10"
            >
              <div className="text-4xl text-primary mb-3">{service.icon}</div>
              <h3 className="text-sm font-semibold">{service.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;