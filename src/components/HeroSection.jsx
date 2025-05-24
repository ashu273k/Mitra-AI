import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPlay, FaChevronDown } from 'react-icons/fa';
import { SiLeetcode, SiGithub, SiDiscord } from 'react-icons/si';

export default function HeroSection() {
  return (
    <header className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#0d1117] border-b border-gray-800">
      {/* Background stars pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[url('/stars.svg')] bg-center" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1117]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/mitra-logo.svg" alt="Mitra AI Logo" className="w-8 h-8" />
            <span className="ml-2 text-xl font-bold text-white">Mitra AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/login" className="text-gray-300 hover:text-white transition-colors">Sign in</a>
            <a href="/signup" className="bg-[#2563ebcc] text-white px-3 py-1.5 rounded-md hover:bg-[#60a5fa99] transition-colors">Sign up</a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        {/* Main Heading in GitHub style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Master coding interviews<br />
            <span className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#2563eb] bg-clip-text text-transparent">
              with AI-Powered Practice
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            Practice with an AI interviewer that adapts to your skill level and get instant feedback on your code, approach, and communication.
          </p>
        </motion.div>

        {/* CTA Buttons - GitHub style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#2563ebcc] rounded-md hover:bg-[#60a5fa99] transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2563ebcc] focus:ring-offset-2 focus:ring-offset-[#0d1117]"
          >
            Sign up for free
          </a>
          <a
            href="/playground"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#21262d] border border-gray-700 rounded-md hover:bg-[#30363d] hover:border-gray-600 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-[#0d1117]"
          >
            <FaCode className="w-5 h-5 mr-2" />
            Try the playground
          </a>
        </motion.div>

        {/* Stats counters - GitHub style */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-16 text-center"
        >
          <div className="p-4 rounded-md bg-[#161b22] border border-gray-800">
            <div className="text-3xl md:text-4xl font-bold text-white">300+</div>
            <div className="text-gray-400">Interview Questions</div>
          </div>
          <div className="p-4 rounded-md bg-[#161b22] border border-gray-800">
            <div className="text-3xl md:text-4xl font-bold text-white">10k+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="p-4 rounded-md bg-[#161b22] border border-gray-800">
            <div className="text-3xl md:text-4xl font-bold text-white">97%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
        </motion.div>

        {/* Integration Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-16"
        >
          <div className="text-sm text-gray-500 mr-4">Integrates with:</div>
          <div className="flex items-center gap-8">
            <SiLeetcode className="w-8 h-8 text-gray-400 hover:text-white transition-colors" />
            <SiGithub className="w-8 h-8 text-gray-400 hover:text-white transition-colors" />
            <SiDiscord className="w-8 h-8 text-gray-400 hover:text-white transition-colors" />
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.a
          href="#features"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Explore features</span>
          <FaChevronDown className="animate-bounce" />
        </motion.a>
      </div>
    </header>
  );
}