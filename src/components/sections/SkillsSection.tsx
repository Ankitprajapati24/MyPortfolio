import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, Layers, PenTool, Brain } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    icon: <Code className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 82 },
      { name: 'Java', level: 75 },
    ],
  },
  {
    name: 'Web Development',
    icon: <Layers className="w-6 h-6" />,
    color: 'from-purple-500 to-purple-600',
    skills: [
      { name: 'React', level: 90 },
      { name: 'HTML/CSS', level: 92 },
      { name: 'Node.js', level: 80 },
      { name: 'Angular', level: 75 },
      { name: 'Vue.js', level: 70 },
    ],
  },
  {
    name: 'Databases',
    icon: <Database className="w-6 h-6" />,
    color: 'from-green-500 to-green-600',
    skills: [
      { name: 'SQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'Firebase', level: 80 },
      { name: 'Redis', level: 72 },
    ],
  },
  {
    name: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-red-500 to-red-600',
    skills: [
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 82 },
      { name: 'OpenCV', level: 80 },
      { name: 'scikit-learn', level: 88 },
      { name: 'NLP', level: 75 },
    ],
  },
  {
    name: 'DevOps & Cloud',
    icon: <Server className="w-6 h-6" />,
    color: 'from-yellow-500 to-yellow-600',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 82 },
      { name: 'CI/CD', level: 80 },
      { name: 'Kubernetes', level: 75 },
      { name: 'Azure', level: 78 },
    ],
  },
  {
    name: 'Design & Tools',
    icon: <PenTool className="w-6 h-6" />,
    color: 'from-teal-500 to-teal-600',
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Git', level: 92 },
      { name: 'Jira', level: 88 },
      { name: 'Adobe XD', level: 75 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="section-title"
          >
            My <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="section-subtitle"
          >
            I've worked with a variety of technologies across different domains.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="card p-6"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <motion.div
                          className={`h-2.5 rounded-full bg-gradient-to-r ${category.color}`}
                          style={{ width: '0%' }}
                          animate={inView ? { width: `${skill.level}%` } : { width: '0%' }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut" 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;