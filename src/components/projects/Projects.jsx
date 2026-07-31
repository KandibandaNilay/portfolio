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
    title: 'Spacezant Pricing & Tax Engine',
    desc: 'Backend Java service built with Spring Boot to process e-commerce cart logic, calculate regional GST, and execute complex pricing rules.',
    tech: ['Java', 'Spring Boot', 'REST API'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=center',
    link: '#',
  },
  {
    title: 'Automated Coupon Management',
    desc: 'Engineered an approval workflow system filtering active, inactive, and rejected promotional coupons for a retail catalog.',
    tech: ['Spring Boot', 'JPA', 'SQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
    link: '#',
  },
  {
    title: 'Self-Service BI Solution',
    desc: 'Interactive dashboards, role-based reporting, training users, reducing manual reporting.',
    tech: ['Power BI', 'DAX', 'Power Query'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop&crop=center&sat=-100',
    link: '#',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    // Removed duplicate py-20 padding and background to fit cleanly inside your outer glass-card
    <section id="projects" className="relative overflow-hidden pt-4 pb-2">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Title – Upgraded with gradient styling */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            My Work
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl bg-white/5 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 shadow-lg hover:border-primary/50 transition-all duration-300 overflow-hidden group flex flex-col"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay – Upgraded to a deeper, richer gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary text-white rounded-full shadow-lg shadow-primary/40 hover:scale-110 hover:bg-secondary transition-all duration-300"
                    aria-label={`View ${project.title}`}
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed flex-grow">
                  {project.desc}
                </p>
                
                {/* Tech Stack Tags – Styled with secondary theme color */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-secondary/10 text-secondary border border-secondary/20 text-xs rounded-md font-semibold shadow-sm"
                    >
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