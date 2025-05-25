import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import CoreFeaturesSection from './components/CoreFeaturesSection';
import DemoSection from './components/DemoSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQsSection from './components/FAQsSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import './github-theme.css';

export default function LandingPage() {
  // Enable dark mode by default for GitHub-like appearance
  useEffect(() => {
    document.documentElement.classList.add('dark');
    // Set the background color for the entire page
    document.body.style.backgroundColor = '#0d1117';
  }, []);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden bg-[#0d1117] text-white">
      <HeroSection />
      <CoreFeaturesSection />
      <HowItWorksSection />
      <DemoSection />

      {/* GitHub-style divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-800"></div>
        </div>
      </div>
      
      <TestimonialsSection />
      {/* <TeamSection /> */}
      <FAQsSection />
      
      {/* Final CTA Section - GitHub style */}
      <section className="py-24 bg-[#161b22] border-t border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-[#388bfd26] text-[#58a6ff] mb-4"
          >
            Ready to get started?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to ace your next coding interview?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-10"
          >
            Join thousands of developers who are already improving their skills with Mitra AI.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/signup"
              className="bg-[#2563ebcc] text-white font-medium px-8 py-3 rounded-md hover:bg-[#60a5fa99] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563ebcc] focus:ring-offset-2 focus:ring-offset-[#161b22]"
            >
              Sign up for free
            </a>
            <a
              href="/demo"
              className="bg-[#21262d] text-white font-medium px-8 py-3 rounded-md border border-gray-700 hover:bg-[#30363d] hover:border-gray-600 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-[#161b22]"
            >
              Watch Demo
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}