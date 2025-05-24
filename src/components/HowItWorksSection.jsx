import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaCode, FaComments, FaChartLine } from 'react-icons/fa';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: "Choose a Question",
      description: "Select from our curated list of interview questions or import from LeetCode. Filter by difficulty, topic, or company-specific questions.",
      color: "text-[#79c0ff]"
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Start Coding",
      description: "Write your solution in our powerful code editor with real-time compilation, syntax highlighting, and intelligent code suggestions.",
      color: "text-[#60a5fa]"
    },
    {
      icon: <FaComments className="w-8 h-8" />,
      title: "Get Feedback",
      description: "Receive instant AI feedback on your code, approach, and communication. Our AI analyzes your solution and provides detailed insights.",
      color: "text-[#f778ba]"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Improve",
      description: "Learn from detailed explanations and optimize your solution. Track your progress over time and identify areas for improvement.",
      color: "text-[#f1e05a]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-[#161b22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-[#388bfd26] text-[#58a6ff] mb-4"
          >
            The Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Four simple steps to master your coding interview skills
          </motion.p>
        </motion.div>

        {/* Steps with GitHub-style timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 md:mb-24 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
              style={{ maxWidth: '100%', width: '100%' }}
            >
              <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                <div className="relative z-10 md:max-w-[85%] w-full ml-12 md:ml-0">
                  <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-6 shadow-lg">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center absolute -left-16 md:left-auto ${index % 2 === 0 ? 'md:-right-20' : 'md:-left-20'} top-6 bg-[#0d1117] border-4 border-[#161b22]`}>
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    
                    <div className={`w-12 h-12 rounded-md bg-[#0d1117] border border-gray-700 flex items-center justify-center mb-4 ${step.color}`}>
                      {step.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="/get-started"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#2563ebcc] border border-transparent rounded-md shadow-sm hover:bg-[#60a5fa99] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563ebcc] focus:ring-offset-[#161b22]"
          >
            Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}