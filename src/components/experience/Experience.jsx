import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: 'Freelance Power BI Consultant',
    location: 'Paris, France',
    period: '2023 – Present',
    duties: [
      'Designed KPI dashboards and executive reporting',
      'Data transformation and modeling',
      'Self-service BI and dashboard optimization',
    ],
  },
  {
    title: 'Data Analyst Intern',
    location: 'Everst Tech Services, Hyderabad',
    period: 'Nov 2021 – Apr 2022',
    duties: [
      'Financial analysis and Excel reporting',
      'Reduced reporting time by 25%',
      'Data visualization and market analysis',
    ],
  },
  {
    title: 'Senior ERP Consultant & Team Lead',
    location: 'Radiant Technologies',
    period: 'Jan 2017 – Aug 2019',
    duties: [
      'ERP implementation and team leadership',
      'Management reporting',
      'Increased productivity by 40%',
      'Client support and business process improvements',
    ],
  },
  {
    title: 'ERP Consultant',
    location: 'Radiant Technologies',
    period: 'Jul 2015 – Dec 2016',
    duties: [
      'ERP Support and ATM Support',
      'Technical troubleshooting',
      'Data Analysis and system integration',
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="section-title gradient-text">Experience</h2>
        <div ref={ref} className="relative border-l-2 border-primary/40 pl-8 ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-11 top-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm">
                <FaBriefcase />
              </div>
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</p>
                <p className="text-sm text-primary font-semibold">{exp.period}</p>
                <ul className="mt-3 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  {exp.duties.map((duty, i) => (
                    <li key={i}>{duty}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;