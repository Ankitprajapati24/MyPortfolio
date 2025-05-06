import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally would send the form data to a server here
    console.log('Form submitted:', formData);
    
    // Simulate a successful form submission
    setFormStatus({
      message: 'Thank you! Your message has been sent successfully.',
      isError: false,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Clear the status message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

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
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
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
            Get In <span className="text-primary-600 dark:text-primary-400">Touch</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="section-subtitle"
          >
            Have a project in mind or want to chat? Feel free to reach out!
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-12">
            {/* Contact info and socials */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</p>
                      <a href="mailto:ankitp2412@gmial.com" className="text-lg text-primary-600 dark:text-primary-400 hover:underline">
                        ankitp2412@gmial.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone</p>
                      <a href="tel:+917389028024" className="text-lg text-gray-900 dark:text-white">
                        +917389028024
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Location</p>
                      <p className="text-lg text-gray-900 dark:text-white">
                        Indore, Madhya Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  Connect With Me
                </h3>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Ankitprajapati24" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/Ankit-prajapati04" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://x.com/ankitp2412" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-3"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send Me a Message
                </h3>
                
                {formStatus && (
                  <div 
                    className={`p-4 rounded-md mb-6 ${
                      formStatus.isError 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' 
                        : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="input"
                      required
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;