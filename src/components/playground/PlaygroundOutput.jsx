import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';

export default function PlaygroundOutput({ output }) {
  const consoleRef = useRef(null);

  // Auto-scroll to the bottom when new output appears
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="h-full flex flex-col">
      <div className="bg-[#21262d] px-4 py-2 border-b border-gray-700 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaTerminal className="text-gray-400" />
          <div className="text-sm font-medium">Console Output</div>
        </div>
        {output.length > 0 && (
          <button 
            onClick={() => console.clear()}
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            Clear
          </button>
        )}
      </div>
      
      <div 
        ref={consoleRef}
        className="flex-grow p-4 font-mono text-sm overflow-y-auto bg-[#0d1117]" 
        style={{ minHeight: '200px' }}
      >
        {output.length === 0 ? (
          <div className="text-gray-500 italic flex items-center gap-2">
            <span>Run your code to see output here</span>
            <div className="console-cursor"></div>
          </div>
        ) : (
          <div className="space-y-2">
            {output.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`font-mono ${
                  item.type === 'error' 
                    ? 'text-red-400' 
                    : item.type === 'warn'
                    ? 'text-yellow-300'
                    : 'text-gray-300'
                }`}
              >
                {item.type === 'error' && '❌ '}
                {item.type === 'warn' && '⚠️ '}
                {item.type === 'log' && '> '}
                <span className={item.type === 'error' ? 'line-through text-red-200' : ''}>
                  {item.content}
                </span>
                {item.type === 'error' && (
                  <div className="pl-4 mt-1 text-xs text-red-300 border-l-2 border-red-800 ml-2">
                    {item.content.replace('Error:', '').trim()}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
