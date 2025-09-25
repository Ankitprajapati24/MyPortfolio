import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code } from 'lucide-react';

// Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  category: string;
}

// Sample projects data
const projects: Project[] = [
  {
    id: 7,
    title: "SAHARA- The Social Welfare Society Website",
    description: "This is the official website of Sahara society. It is a social welfare society of the IIT Madras BS Degree Program. It's mission is to extend assistance to those in need by providing opportunities to those willing to lend a hand. In doing so, we address the needs of both the underprivileged individuals and the students pursuing their BS Degree at IIT Madras.",
    image: "imges/saharimg.png",
    technologies: [ "HTML","CSS","javascript","Tailwind CSS","Flask", "MySQL"],
    demoUrl: "https://backendpilot.onrender.com/",
    githubUrl: "https://github.com/aayush598/BackendPilot.git",
    category: "Web",
  },
  {
    id: 6,
    title: "Backend Poilet",
    description: "I-powered agent capable of generating complete backend code based on user-provided inputs. The agent must accept a natural language description of the project, user-specified backend tech stack (initially supporting only Flask), the operating system (Windows, Linux/Ubuntu, or macOS), and the desired folder path for project setup",
    image: "/imges/image.png",
    technologies: [ "Tailwind CSS","Flask", "MySQL","CGROQ queries, custom backend APIs","Render"],
    demoUrl: "https://backendpilot.onrender.com/",
    githubUrl: "https://github.com/aayush598/BackendPilot.git",
    category: "Web",
  },
  {
    id: 1,
    title: "SignEcho -Real-Time Sign Language Translator to Speech",
    description: "Captures hand gestures via smartphone camera or Webcam and converts them into real-time speech and text to aid the deaf and mute community.With 97.6 % Accuracy",
    image: "/imges/img2.jpeg",
    technologies: [ "Python","OpenCV", "MediaPipe","CNN/LSTM"],
    demoUrl: "https://friendly-beignet-24aabc.netlify.app/",
    githubUrl: "https://github.com/Ankitprajapati24/SignEcho",
    category: "AI",
  },
  {
    id: 2,
    title: "College Election platform",
    description: " a secure, user-friendly digital election management system for transparent student body elections. Implemented role-based access, real-time voting analytics, and admin dashboards.",
    image: "/imges/img3.png",
    technologies: ["React", "Node.js", "MySQL", "Firebase"],
    demoUrl: "https://ewsc-chi.vercel.app/",
    githubUrl: "https://github.com/Ankitprajapati24/College-Election-Platform.git",
    category: "Web",
  },
  {
    id: 3,
    title: "Saathi-Medicine Dispenser App",
    description: "An  AI-integrated smart medicine dispenser, enabling real-time health monitoring, automated reminders, and caregiver alerts for elderly safety Implemented IOT integration for real-time health tracking and emergency detection, improving elderly care.",
    image: "/imges/img5.png",
    technologies: ["C++", "ESP32", "MQTT", "Flutter","Firebase"],
    demoUrl: "https://saathi.flutterflow.app/",
    githubUrl: "https://github.com/Ankitprajapati24/Saathi-Medicine-Dispenser-App.git",
    category: "IoT",
    
  },
  {
    id: 4,
    title: "Watch Tower: AI-Powered Security System for the Institute",
    description: "A  license plate recognition system using computer vision and OCR for automated vehicle, Full-stack solution,integration of Python-based OCR pipeline 95% Accuracy",
    image: "/imges/img6.jpg",
    technologies: [ "React.js", "Next.js", "JavaScript", "Python", "Open CV", "OCR"],
    demoUrl: "https://colab.research.google.com/drive/1I5jV6qwSMCu3N1rFhje7H3uC7sAwGAhv?usp=sharing",
    githubUrl: "https://github.com/Ankitprajapati24/Watch-Tower-Security-System-for-the-Institute-.git",
    category: "AI/OCR",
  },
  {
    id: 5,
    title: "Jarvis - Voice-Controlled Assistant Desktop Application",
    description: "A Python-based desktop assistant application to perform tasks via voice commands.",
    image: "/imges/img7.png",
    technologies: ["Python", "Speech Recognition", "Wikipedia API"],
    demoUrl: "#",
    githubUrl: "#",
    category: "AI",
  }
  
];

// Categories for filtering
const categories = ["All", "AI", "Web", "IoT" ];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="section-title"
          >
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="section-subtitle"
          >
            Here are some of my latest projects showcasing my skills and interests.
          </motion.p>

          {/* Category filters */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white dark:bg-gray-800 rounded-full text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white dark:bg-gray-800 rounded-full text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <span className="text-xs font-medium bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-300 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map(tech => (
                    <span key={tech} className="inline-flex items-center text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full">
                      <Code className="w-3 h-3 mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;