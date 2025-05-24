import React from 'react';
import Ashu from "../assets/Ashu1.jpg"
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Aryan Bhendarkar",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      description: "Passionate about building scalable web applications and creating seamless user experiences.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Avishkar Chavan",
      role: "AI/ML Engineer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      description: "Expert in machine learning and natural language processing, focused on creating intelligent interview systems.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Aashu Kumar",
      role: "UI/UX Designer",
      image: Ashu,
      description: "Dedicated to crafting beautiful and intuitive interfaces that enhance user interaction.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
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
    <section id="team" className="py-24 bg-[#0d1117]">
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
            Our Team
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Meet the Developers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            The talented team behind Mitra AI
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#161b22] rounded-md p-6 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="relative mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto border-2 border-gray-800"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-1 text-white">
                {member.name}
              </h3>
              <p className="text-[#58a6ff] text-center font-medium mb-4">
                {member.role}
              </p>
              <p className="text-gray-400 text-center text-sm mb-6">
                {member.description}
              </p>
              
              {/* Social links */}
              <div className="flex justify-center space-x-4">
                <a href={member.github} className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href={member.linkedin} className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href={member.twitter} className="text-gray-400 hover:text-white transition-colors">
                  <FaTwitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}