import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaCode, FaRobot } from 'react-icons/fa';

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState('interview');

  const codeExample = `// Example: Binary Search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    }
    
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

// AI Feedback:
// ✅ Good implementation of binary search
// 💡 Consider adding input validation
// 🔍 Time Complexity: O(log n)
// 📝 Space Complexity: O(1)`;

  return (
    <section id="demo" className="py-24 bg-[#161b22] border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Demo
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            See Mitra AI in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Experience our AI-powered interview simulator and coding playground
          </motion.p>
        </motion.div>

        {/* Demo Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md bg-[#0d1117] p-1">
            <button
              onClick={() => setActiveTab('interview')}
              className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-200 ${
                activeTab === 'interview'
                  ? 'bg-[#2563ebcc] text-white'
                  : 'text-gray-400 hover:text-white hover:bg-[#21262d]'
              }`}
            >
              <FaRobot className="w-5 h-5" />
              <span>AI Interview</span>
            </button>
            <button
              onClick={() => setActiveTab('playground')}
              className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-200 ${
                activeTab === 'playground'
                  ? 'bg-[#2563ebcc] text-white'
                  : 'text-gray-400 hover:text-white hover:bg-[#21262d]'
              }`}
            >
              <FaCode className="w-5 h-5" />
              <span>Code Playground</span>
            </button>
          </div>
        </div>

        {/* Demo Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* GitHub-style Code Editor Preview */}
          <div className="relative rounded-md overflow-hidden bg-[#0d1117] border border-gray-800">
            {/* Editor Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-sm text-gray-400 flex items-center">
                <span className="px-2 py-1 rounded-md bg-[#0d1117] border border-gray-800 text-xs font-mono">
                  {activeTab === 'interview' ? 'interview.js' : 'playground.js'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>JavaScript</span>
                <span>•</span>
                <span>UTF-8</span>
              </div>
            </div>

            {/* Editor Content - GitHub Code Style */}
            <div className="p-6">
              <pre className="text-sm font-mono overflow-x-auto">
                <code>
                  <div className="flex">
                    <div className="mr-4 text-right select-none text-gray-600">
                      {Array.from({ length: codeExample.split('\n').length }, (_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>
                    <div className="text-gray-300">
                      {codeExample.split('\n').map((line, i) => {
                        // Color comments in green
                        if (line.trim().startsWith('//')) {
                          return <div key={i} className="text-[#60a5fa]">{line}</div>;
                        }
                        // Highlight function declaration
                        if (line.includes('function')) {
                          return (
                            <div key={i}>
                              <span className="text-[#ff7b72]">function </span>
                              <span className="text-[#d2a8ff]">binarySearch</span>
                              <span className="text-gray-300">(arr, target) {line.split('(arr, target) ')[1] || ''}</span>
                            </div>
                          );
                        }
                        // Default text color
                        return <div key={i}>{line}</div>;
                      })}
                    </div>
                  </div>
                </code>
              </pre>
            </div>

            {/* AI Assistant Preview - GitHub Style */}
            {activeTab === 'interview' && (
              <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-[#21262d] rounded-md px-4 py-2 border border-gray-700 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-[#2563eb80] flex items-center justify-center">
                  <FaRobot className="w-4 h-4 text-[#60a5fa]" />
                </div>
                <div className="text-sm text-white">
                  AI Interviewer is analyzing your solution...
                </div>
              </div>
            )}
          </div>

          {/* Try It Button - GitHub Style */}
          <div className="mt-10 text-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={activeTab === 'interview' ? '/interview' : '/playground'}
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-[#2563ebcc] border border-transparent rounded-md hover:bg-[#60a5fa99] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563ebcc] focus:ring-offset-[#161b22] transition-all duration-200"
            >
              <FaPlay className="w-4 h-4" />
              Try it now
            </motion.a>
            <p className="mt-4 text-sm text-gray-500">
              No credit card required. Start for free.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;