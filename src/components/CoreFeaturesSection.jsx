import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaLightbulb, FaBrain, FaChartLine, FaUsers } from 'react-icons/fa';

export default function CoreFeaturesSection() {
  const features = [
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "AI Interviewer",
      description: "Practice with an AI interviewer that adapts to your skill level. Get real-time feedback on your code, communication, and problem-solving approach.",
      color: "text-[#60a5fa]",
      bgColor: "bg-[#033a16]",
      borderColor: "border-[#2563ebcc]"
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Smart Playground",
      description: "Code in multiple languages with syntax highlighting, real-time compilation, and AI-powered hints to guide you through complex problems.",
      color: "text-[#79c0ff]",
      bgColor: "bg-[#051d4d]",
      borderColor: "border-[#1158c7]"
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Smart Feedback",
      description: "Get detailed explanations of your code, suggestions for optimization, and learn best practices through interactive AI guidance.",
      color: "text-[#f778ba]",
      bgColor: "bg-[#3c1432]",
      borderColor: "border-[#db61a2]"
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: "Adaptive Learning",
      description: "Our AI system learns from your performance and adapts questions and feedback to match your skill level and learning pace.",
      color: "text-[#f1e05a]",
      bgColor: "bg-[#3a3000]",
      borderColor: "border-[#d9b600]"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Progress Tracking",
      description: "Monitor your improvement over time with detailed analytics, performance metrics, and personalized recommendations.",
      color: "text-[#ff9b50]",
      bgColor: "bg-[#3d2300]",
      borderColor: "border-[#e16f24]"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Community Learning",
      description: "Join a community of learners, share solutions, and learn from others through collaborative coding sessions and discussions.",
      color: "text-[#b180ff]",
      bgColor: "bg-[#271052]",
      borderColor: "border-[#8957e5]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="features" className="py-24 bg-[#0d1117]">
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
            Features
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Everything you need to ace your coding interviews
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Our platform provides all the tools and features to prepare you for success
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className={`h-full p-6 rounded-md bg-[#161b22] border ${feature.borderColor} hover:border-opacity-100 border-opacity-40 transition-all duration-300`}>
                <div className={`flex items-center justify-center w-12 h-12 rounded-md ${feature.bgColor} mb-6`}>
                  <div className={`${feature.color}`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#58a6ff] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
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
            href="/features"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#2563ebcc] border border-transparent rounded-md shadow-sm hover:bg-[#60a5fa99] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563ebcc]"
          >
            View all features
          </a>
        </motion.div>
      </div>
    </section>
  );
}