import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string[];
  type: 'education' | 'experience' | 'achievement';
}

const timelineItems: TimelineItem[] = [

 
  {
    id: 1,
    title: "AI Engineer - Open Source Contributor",
    organization: "Klover.AI",
    period: "Jan 2025 - April 2025",
    description: [
      "Developed multi-agent AI systems for Artificial General Decision-Making (AGD) and optimized AI models.",
      "Researched and improved AI decision-making algorithms for scalability and interoperability",
      "Contributed to the development of AI models and open-source frameworks while ensuring compliance."
    ],
    type: 'experience'
  },
  {
    id: 2,
    title: "Hackathon Winner",
    organization: "IIST Indore",
    period: "2025",
    description: [
      "Winner of Apratim Srajan Kunj 2025 IIST Indore Hackathon (30-hour),"
    ],
    type: 'achievement'
  },
  {
    id: 3,
    title: "Bachelor of Science in Data Science",
    organization: "Indian Institute of Technology, Madras",
    period: "2023 - 2027",
    description: [
      "Data Science, Artificial Intelligence and Machine Learning",
      "It's An IIT Madras Degree Program in Data Science and Applications"
      
    ],
    type: 'education'
  },
  
  {
    id: 4,
    title: "Bachelor of Technology in Computer Science Enginnering ",
    organization: "Indore Institute of Science and Technology, Indore",
    period: "2023-2027",
    description: [
      "Major in Computer Science",
    ],
    type: 'education'
  },
 
  
  
];

const ResumeSection: React.FC = () => {
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

  const getIconForType = (type: 'education' | 'experience' | 'achievement') => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-primary-500" />;
      case 'experience':
        return <Briefcase className="w-5 h-5 text-secondary-500" />;
      case 'achievement':
        return <Award className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            My <span className="text-primary-600 dark:text-primary-400">Resume</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="section-subtitle"
          >
            A timeline of my professional experience and education.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
            <a 
              href="/Ankit_Prajapati_resume.pdf" 
              download 
              className="btn-primary flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="timeline">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  custom={index}
                  className="timeline-item"
                >
                  <div className="timeline-dot flex items-center justify-center">
                    {getIconForType(item.type)}
                  </div>
                  <div className="timeline-content hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <span 
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          item.type === 'education' 
                            ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300' 
                            : item.type === 'experience'
                              ? 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-300'
                              : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                      {item.organization}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {item.period}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
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

export default ResumeSection;