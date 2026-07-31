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
    // Removed duplicate py-24 padding to fit inside the Home.jsx glass-card
    <section id="experience" className="relative overflow-hidden pt-4 pb-2">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Over 8 years of hands-on expertise in BI, ERP consulting, and data transformations.
          </p>
        </div>

        {/* Timeline Container – Upgraded with a tinted primary border */}
        <div className="relative border-l-2 border-primary/30 pl-6 sm:pl-10 ml-4 sm:ml-6 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="relative group"
            >
              {/* Timeline Icon Node – Upgraded to a glowing gradient */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-xs shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 border-2 border-white dark:border-darkbg">
                <FaBriefcase />
              </div>

              {/* Experience Card – Upgraded with glass effects and primary hover state */}
              <div className="p-6 md:p-8 rounded-2xl bg-white/5 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 shadow-lg hover:border-primary/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1.5">
                      <FaMapMarkerAlt className="text-secondary" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Period Badge – Styled as a premium theme pill */}
                  <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap self-start sm:self-auto shadow-sm">
                    {exp.period}
                  </span>
                </div>

                {/* Duties List – Check icons upgraded to secondary theme color */}
                <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  {exp.duties.map((duty, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="text-secondary/80 text-xs mt-1 shrink-0 group-hover:text-secondary transition-colors" />
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