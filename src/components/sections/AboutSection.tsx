import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Terminal, Book, Coffee, Code } from 'lucide-react';

const techStack = [
  'Python', 'C++', 'JavaScript', 'TypeScript', 'React', 
  'Node.js', 'OpenCV', 'SQL'
];

const AboutSection: React.FC = () => {
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
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center"
        >
          {/* Image Column */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-xl transform rotate-3 scale-105 opacity-20 dark:opacity-30"></div>
              <img
                src= "/imges/ankitme.png"
                alt="Ankit Prajapati"
                className="rounded-xl shadow-lg relative z-10 max-w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary-500 rounded-lg flex items-center justify-center text-white text-2xl transform rotate-3">
                <Code className="w-10 h-10" />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="text-primary-600 dark:text-primary-400">Me</span>
            </h2>

            <motion.p 
              variants={itemVariants}
              className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            >
              I'm a  Computer Science student at IIST Indore and BS in Data Science At IIT Madrash with a passion for solving complex problems through technology. My journey in tech began when I built my first website at 14, and I've been hooked ever since.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Currently, I'm focused on the intersection of AI and computer vision, working on projects that push the boundaries of what's possible. When I'm not coding, you'll find me participating in hackathons, contributing to open-source projects, or playing the Guitar.
            </motion.p>

            {/* Feature blocks */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              <motion.div 
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
              >
                <Terminal className="w-8 h-8 text-primary-500 mb-2" />
                <h3 className="font-bold mb-1">Problem Solver</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">I enjoy tackling complex challenges with elegant solutions.</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
              >
                <Book className="w-8 h-8 text-primary-500 mb-2" />
                <h3 className="font-bold mb-1">Continuous Learner</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Always exploring new technologies and methodologies.</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
              >
                <Coffee className="w-8 h-8 text-primary-500 mb-2" />
                <h3 className="font-bold mb-1">Collaborative</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">I thrive in team environments with diverse perspectives.</p>
              </motion.div>
            </motion.div>

            {/* Tech stack */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="tech-badge"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;