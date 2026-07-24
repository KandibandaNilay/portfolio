import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'Power BI', level: 95 },
  { name: 'DAX', level: 90 },
  { name: 'Power Query', level: 85 },
  { name: 'SQL', level: 80 },
  { name: 'Excel Advanced', level: 85 },
  { name: 'Data Modeling', level: 80 },
  { name: 'ETL', level: 75 },
  { name: 'Data Visualization', level: 90 },
  { name: 'Reporting Automation', level: 80 },
  { name: 'Financial Analysis', level: 75 },
  { name: 'Business Analysis', level: 80 },
  { name: 'KPI Design', level: 85 },
];

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="skills" className="py-20 bg-lightbg/50 dark:bg-darkbg/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="section-title gradient-text">Skills</h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              className="space-y-1"
            >
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;