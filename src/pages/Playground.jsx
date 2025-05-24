import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PlaygroundEditor from '../components/playground/PlaygroundEditor';
import PlaygroundOutput from '../components/playground/PlaygroundOutput';
import AssistantBot from '../components/playground/AssistantBot';
import { lintJavaScript, runJavaScript } from '../utils/codeLinter';
import '../components/playground/animations.css'; // Import animations

export default function Playground() {
  const [code, setCode] = useState('// Write your code here\nconsole.log("Hello, world!");\n');
  const [output, setOutput] = useState([]);
  const [botState, setBotState] = useState('greeting'); // greeting, thinking, confused, celebrating
  const [errorInfo, setErrorInfo] = useState(null);

  // Reset body background color to match the landing page
  useEffect(() => {
    document.body.style.backgroundColor = '#0d1117';
    
    // Show welcome message in output when component mounts
    setOutput([
      { type: 'log', content: '👋 Welcome to the coding playground!' },
      { type: 'log', content: 'Select a template or write your own JavaScript code' },
      { type: 'log', content: 'Click "Run Code" to see the result here' }
    ]);
  }, []);

  const handleCodeChange = (value) => {
    setCode(value);
    
    // Auto-lint as user types (with debounce in a real app)
    const lintResult = lintJavaScript(value);
    if (!lintResult.valid) {
      setErrorInfo(lintResult.error);
      setBotState('confused');
    } else {
      setErrorInfo(null);
      setBotState('thinking');
    }
  };

  const handleRunCode = () => {
    // Clear previous output
    setOutput([]);
    
    // Lint before running
    const lintResult = lintJavaScript(code);
    
    if (!lintResult.valid) {
      setErrorInfo(lintResult.error);
      setBotState('confused');
      setOutput([{
        type: 'error',
        content: `Error: ${lintResult.error.message}`
      }]);
      return;
    }
    
    // Run the code and capture output
    setBotState('thinking');
    try {
      const result = runJavaScript(code);
      setOutput(result.output);
      
      // Set bot state based on result
      if (result.error) {
        setBotState('confused');
      } else {
        setBotState('celebrating');
      }
    } catch (error) {
      setOutput([{
        type: 'error',
        content: `Runtime Error: ${error.message}`
      }]);
      setBotState('confused');
    }
  };
  
  const handleDownloadCode = () => {
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'playground-code.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex flex-col">
      {/* Navigation */}
      <nav className="bg-[#0d1117]/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <FaRobot className="w-8 h-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">Mitra AI</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Back to Home
            </Link>
            <a href="/signup" className="bg-[#2563ebcc] text-white px-3 py-1.5 rounded-md hover:bg-[#60a5fa99] transition-colors">
              Sign up
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-10 pb-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <FaCode className="text-[#60a5fa]" />
                <span>Coding Playground</span>
              </h1>
              <p className="text-gray-400 mt-1">
                Write, test, and get instant feedback on your code
              </p>
            </motion.div>
            <div className="flex items-center gap-3">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={handleRunCode}
                className="px-4 py-2 bg-[#2563ebcc] hover:bg-[#60a5fa99] text-white rounded-md font-medium flex items-center gap-2 transition-colors"
              >
                <span>Run Code</span>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}                onClick={handleDownloadCode}
                className="px-4 py-2 bg-[#30363d] hover:bg-[#444c56] text-white rounded-md font-medium flex items-center gap-2 transition-colors border border-gray-700"
              >
                <FaDownload className="w-3 h-3" />
                <span>Download</span>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow pb-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Editor section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 bg-[#161b22] border border-gray-800 rounded-lg overflow-hidden shadow-xl"
          >
            <PlaygroundEditor 
              code={code} 
              onChange={handleCodeChange} 
              onRun={handleRunCode}
              errorInfo={errorInfo}
            />
          </motion.div>

          {/* Output and Assistant section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Animated Assistant */}
            <div className="bg-[#161b22] border border-gray-800 rounded-lg overflow-hidden shadow-xl p-4 flex flex-col items-center">
              <AssistantBot state={botState} />
              <div className="mt-4 text-center">
                <h3 className="font-semibold">Coding Assistant</h3>
                <p className="text-sm text-gray-400">
                  {botState === 'greeting' && "Hi! I'm here to help you code. Let's get started!"}
                  {botState === 'thinking' && "Analyzing your code..."}
                  {botState === 'confused' && "Hmm, I think there might be an error in your code."}
                  {botState === 'celebrating' && "Great job! Your code runs successfully!"}
                </p>
              </div>
            </div>

            {/* Output Console */}
            <div className="bg-[#161b22] border border-gray-800 rounded-lg overflow-hidden shadow-xl flex-grow">
              <PlaygroundOutput output={output} />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0d1117] border-t border-gray-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © 2025 Mitra AI. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Help</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
