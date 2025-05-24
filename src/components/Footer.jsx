import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaDiscord, FaTwitter, FaRobot } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Demo', href: '/demo' },
      { name: 'Roadmap', href: '/roadmap' },
      { name: 'Changelog', href: '/changelog' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Community', href: '/community' },
      { name: 'Help', href: '/help' },
      { name: 'Contact', href: '/contact' }
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' }
    ],
    connect: [
      { name: 'GitHub', href: 'https://github.com', icon: <FaGithub className="w-5 h-5" /> },
      { name: 'Discord', href: 'https://discord.com', icon: <FaDiscord className="w-5 h-5" /> },
      { name: 'Twitter', href: 'https://twitter.com', icon: <FaTwitter className="w-5 h-5" /> },
    ],
  };

  return (
    <footer className="bg-[#0d1117] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12"
        >
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <FaRobot className="w-6 h-6 text-[#60a5fa]" />
              <h3 className="text-white text-xl font-bold">Mitra AI</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Your AI-powered companion for mastering coding interviews and real-world programming challenges.
            </p>
            <div className="flex items-center space-x-4">
              {footerLinks.connect.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Mitra AI. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a>
            <a href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
            <span className="text-gray-600">Made with ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}