import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRobot } from 'react-icons/fa';

// This is a fallback animation component that uses Framer Motion
// It will be used if the Rive animation file is not available
export default function FallbackAnimation({ state = 'greeting' }) {
  const [message, setMessage] = useState('');
  
  // Map states to animations and messages
  useEffect(() => {
    switch(state) {
      case 'greeting':
        setMessage('Hi there! I can help you with your code.');
        break;
      case 'thinking':
        setMessage('Hmm, let me analyze this...');
        break;
      case 'confused':
        setMessage('I think there might be an error.');
        break;
      case 'celebrating':
        setMessage('Great job! Your code runs perfectly!');
        break;
      default:
        setMessage('Ready to help!');
    }
  }, [state]);
  
  // Visual states for the robot
  const robotVariants = {
    greeting: { rotate: [0, 10, -10, 10, 0], scale: 1 },
    thinking: { x: [0, 3, -3, 3, 0], y: [0, -3, 0, -3, 0] },
    confused: { rotate: [-5, 5, -5, 0], scale: [1, 0.95, 1] },
    celebrating: { y: [0, -10, 0], scale: [1, 1.1, 1] },
  };

  // Circle background color based on state
  const getBgColor = () => {
    switch(state) {
      case 'greeting': return 'bg-blue-500';
      case 'thinking': return 'bg-purple-500';
      case 'confused': return 'bg-red-500';
      case 'celebrating': return 'bg-green-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`relative w-24 h-24 rounded-full flex items-center justify-center ${getBgColor()}`}>
        <motion.div
          animate={state}
          variants={robotVariants}
          transition={{ 
            repeat: state === 'thinking' ? Infinity : 0, 
            duration: state === 'thinking' ? 2 : 0.5,
            repeatType: 'loop'
          }}
          className="text-white"
        >
          <FaRobot className="w-12 h-12" />
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        key={message}
        className="mt-2 text-center text-sm"
      >
        {message}
      </motion.div>
    </div>
  );
}
