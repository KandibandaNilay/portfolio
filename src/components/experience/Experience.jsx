import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

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
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Section Header – neutrals only */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            Over 8 years of hands-on expertise in BI, ERP consulting, and data transformations.
          </p>
        </div>

        {/* Timeline Container – neutral border */}
        <div className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-6 sm:pl-10 ml-4 sm:ml-6 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="relative group"
            >
              {/* Timeline Icon Node – neutral gray */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1 w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-700 text-white flex items-center justify-center text-xs shadow-md shadow-gray-500/30 group-hover:scale-110 transition-transform">
                <FaBriefcase />
              </div>

              {/* Experience Card – border and hover neutral */}
              <div className="glass-card p-6 md:p-8 rounded-2xl border border-gray-200/60 dark:border-gray-800 shadow-md hover:border-gray-400 dark:hover:border-gray-600 transition-all hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
                      <FaMapMarkerAlt className="text-gray-500 dark:text-gray-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Period Badge – neutral gray */}
                  <span className="inline-block px-3.5 py-1 text-xs font-semibold rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 whitespace-nowrap self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                {/* Duties List – check icon neutral */}
                <ul className="mt-4 space-y-2.5 text-sm text-gray-700 dark:text-gray-300">
                  {exp.duties.map((duty, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-gray-500 dark:text-gray-400 text-xs mt-1 shrink-0" />
                      <span className="leading-relaxed">{duty}</span>
                    </li>
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