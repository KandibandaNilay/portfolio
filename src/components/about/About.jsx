import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Counter component that smoothly animates numbers up when visible
const StatNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    const duration = 1200; // Animation speed in ms
    const incrementTime = Math.max(duration / end, 15);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}+</span>;
};

const About = () => {
  const stats = [
    { label: 'Years Experience', value: 8 },
    { label: 'Dashboards Built', value: 50 },
    { label: 'Clients', value: 30 },
    { label: 'Projects', value: 45 },
  ];

  const techStack = ['Power BI', 'DAX', 'Power Query', 'SQL', 'Excel', 'ETL', 'Data Modeling'];

  return (
    // Removed hardcoded background and padding so it fits perfectly inside your glass-card
    <section id="about" className="relative overflow-hidden pt-4 pb-2">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-10"
        >
          {/* Section Header */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Overview
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Main Text Content */}
            <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg">
              <p>
                As a specialized <strong className="text-primary font-semibold">Power BI & BI Solutions Consultant</strong>, I help organizations convert raw, multi-source data into reliable KPI dashboards and executive reporting frameworks.
              </p>
              <p>
                Backed by more than <strong className="text-primary font-semibold">8 years of experience</strong> across ERP consulting and enterprise analytics, I combine deep technical precision with business acumen to solve complex reporting challenges.
              </p>
              <p>
                I specialize in building robust data models, optimizing DAX performance, and structuring end-to-end ETL pipelines using <strong className="text-secondary font-semibold">Power BI, Power Query, SQL, and Excel Automation</strong>.
              </p>
              <p>
                My goal is simple: reduce manual reporting overhead, enforce data integrity, and empower leadership teams with real-time, actionable insights.
              </p>
              
              {/* Highlight Box – Upgraded to use your primary theme color */}
              <div className="p-5 rounded-xl bg-primary/10 border-l-4 border-primary mt-6 shadow-sm">
                <p className="font-semibold text-slate-900 dark:text-white text-base md:text-lg">
                  My focus isn't simply creating dashboards. I solve business problems through <span className="text-primary">analytics</span>.
                </p>
              </div>

              {/* Skills Tags – Upgraded to use your secondary theme color */}
              <div className="pt-4">
                <div className="flex flex-wrap gap-2.5">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 text-xs font-semibold rounded-md bg-secondary/10 text-secondary border border-secondary/20 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Cards – Upgraded to use glowing accent numbers */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6 pt-2">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="text-center p-6 rounded-2xl bg-white/5 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 shadow-lg hover:border-primary/50 transition-colors flex flex-col justify-center group"
                >
                  <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                    <StatNumber value={stat.value} />
                  </div>
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;