import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const stats = [
    { label: 'Years Experience', value: 8 },
    { label: 'Dashboards Built', value: 50 },
    { label: 'Clients', value: 30 },
    { label: 'Projects', value: 45 },
  ];

  return (
    <section id="about" className="py-20 bg-lightbg/50 dark:bg-darkbg/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                I am a freelance Power BI and Business Intelligence consultant specializing in dashboard development, KPI reporting, data transformation, and management reporting.
              </p>
              <p>
                I help businesses turn raw, scattered data into clear, reliable, and actionable insights that support better decision-making.
              </p>
              <p>
                With over 8 years of experience across ERP consulting, digital transformation, and Business Intelligence, I combine strong technical expertise with practical business understanding.
              </p>
              <p>
                I work with Power BI, DAX, Power Query, SQL, Excel, ETL, and Data Modeling to build scalable reporting solutions that reduce manual work, improve data quality, and provide actionable insights.
              </p>
              <p className="font-semibold text-primary">
                My focus isn't simply creating dashboards. I solve business problems through analytics.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;