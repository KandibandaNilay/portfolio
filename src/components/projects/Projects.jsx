import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Executive KPI Dashboard',
    desc: 'Interactive Power BI dashboard for executives to monitor KPIs with drill-down capabilities and real-time business insights.',
    tech: ['Power BI', 'DAX', 'Power Query'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center',
    link: '#',
  },
  {
    title: 'Financial Reporting Dashboard',
    desc: 'Revenue analysis, cost analysis, profitability, variance analysis, Budget vs Actual.',
    tech: ['Power BI', 'DAX', 'SQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
    link: '#',
  },
  {
    title: 'Multi-Source Reporting Model',
    desc: 'Combined data from multiple systems using ETL, Power Query, SQL, and Power BI.',
    tech: ['Power BI', 'Power Query', 'SQL'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop&crop=center',
    link: '#',
  },
  {
    title: 'Self-Service BI Solution',
    desc: 'Interactive dashboards, role-based reporting, training users, reducing manual reporting.',
    tech: ['Power BI', 'DAX', 'Power Query'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center&sat=-100',
    link: '#',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="py-20 bg-lightbg/50 dark:bg-darkbg/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="section-title gradient-text">Portfolio Projects</h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex space-x-4 text-white">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;