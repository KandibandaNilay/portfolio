import { motion } from 'framer-motion';

// Categorized for better structure and readability
const skillCategories = [
  {
    category: 'Core BI & Analytics',
    skills: [
      { name: 'Power BI', level: 95 },
      { name: 'DAX', level: 90 },
      { name: 'Power Query', level: 85 },
      { name: 'Data Visualization', level: 90 },
    ],
  },
  {
    category: 'Data & Engineering',
    skills: [
      { name: 'SQL', level: 80 },
      { name: 'Data Modeling', level: 80 },
      { name: 'ETL Pipelines', level: 75 },
      { name: 'Excel Advanced', level: 85 },
    ],
  },
  {
    category: 'Business & Strategy',
    skills: [
      { name: 'KPI Design', level: 85 },
      { name: 'Reporting Automation', level: 80 },
      { name: 'Financial Analysis', level: 75 },
      { name: 'Business Analysis', level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-lightbg/50 dark:bg-darkbg/50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Proficiency</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            Proven hands-on mastery across modern Business Intelligence platforms and data transformation tools.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: groupIdx * 0.15 }}
              className="glass-card p-6 md:p-8 rounded-2xl border border-gray-200/60 dark:border-gray-800 shadow-md hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {group.category}
                  </h3>
                </div>

                {/* Skills Progress Bars */}
                <div className="space-y-5">
                  {group.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm font-semibold">
                        <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: groupIdx * 0.1 + skillIdx * 0.1,
                            ease: 'easeOut',
                          }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                      </div>
                    </div>
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

export default Skills;