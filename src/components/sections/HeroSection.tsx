import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, FileCode, BookOpen } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 pb-0 bg-gradient-to-br from-background-light to-blue-50 dark:from-background-dark dark:to-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          {/* Code Pattern Background - only visible as a subtle texture */}
          <div className="grid grid-cols-12 gap-4 p-4 h-full text-xs">
            {Array.from({ length: 40 }).map((_, i) => (
              <div 
                key={i} 
                className="col-span-4 sm:col-span-3 md:col-span-2 lg:col-span-1 text-gray-800 dark:text-gray-200 overflow-hidden"
                style={{ fontFamily: 'monospace' }}
              >
                {`function algo${i}() {`}<br/>
                {`  const data = [];`}<br/>
                {`  for (let i = 0; i < n; i++) {`}<br/>
                {`    if (i % 2 === 0) {`}<br/>
                {`      data.push(i * 2);`}<br/>
                {`    }`}<br/>
                {`  }`}<br/>
                {`  return data;`}<br/>
                {`}`}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-300 text-sm font-medium">
              Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-400 dark:to-secondary-300"
          >
            Ankit Prajapati
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-8 h-16"
          >
            <Typewriter
              options={{
                strings: [
                  'Computer Science Student',
                  'Developer',
                  'AI Enthusiast',
                  'Problem Solver'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-12"
          >
            I build innovative solutions to complex problems using modern technologies.
            Currently focused on AI, web development, and computer vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#projects" className="btn-primary flex items-center justify-center gap-2">
              <FileCode className="w-5 h-5" />
              View Projects
            </a>
            <a href="https://github.com/Ankitprajapati24" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center justify-center gap-2">
              <Github className="w-5 h-5" />
              GitHub Profile
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <a
            href="#about"
            className="animate-bounce bg-white dark:bg-gray-800 p-2 rounded-full shadow-md flex items-center justify-center"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          </a>
          <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;