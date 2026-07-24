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
    <section id="about" className="py-24 bg-lightbg/50 dark:bg-darkbg/50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-10"
        >
          {/* Section Header */}
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Overview</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text">About Me</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Main Text Content */}
            <div className="lg:col-span-7 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
              {/* Main Text Content */}
<div className="lg:col-span-7 space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
  {/* Main Text Content */}
<div className="lg:col-span-7 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
  {/* Main Text Content */}
<div className="lg:col-span-7 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
  <p>
    As a specialized <strong className="text-gray-900 dark:text-white font-semibold">Power BI & BI Solutions Consultant</strong>, I help organizations convert raw, multi-source data into reliable KPI dashboards and executive reporting frameworks.
  </p>
  <p>
    Backed by more than <strong className="text-gray-900 dark:text-white font-semibold">8 years of experience</strong> across ERP consulting and enterprise analytics, I combine deep technical precision with business acumen to solve complex reporting challenges.
  </p>
  <p>
    I specialize in building robust data models, optimizing DAX performance, and structuring end-to-end ETL pipelines using <strong className="text-gray-900 dark:text-white font-semibold">Power BI, Power Query, SQL, and Excel Automation</strong>.
  </p>
  <p>
    My goal is simple: reduce manual reporting overhead, enforce data integrity, and empower leadership teams with real-time, actionable insights.
  </p>
</div>
</div>
</div>
              
              {/* Highlight Box */}
              <div className="p-4 rounded-xl bg-primary/10 border-l-4 border-primary mt-2">
                <p className="font-semibold text-primary dark:text-primary-light text-base md:text-lg">
                  My focus isn't simply creating dashboards. I solve business problems through analytics.
                </p>
              </div>

              {/* Skills Tags */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="glass-card text-center p-6 rounded-2xl border border-gray-200/60 dark:border-gray-800 shadow-md hover:border-primary/40 transition-colors flex flex-col justify-center"
                >
                  <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                    <StatNumber value={stat.value} />
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
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