import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How accurate is the AI interviewer?",
      answer: "Our AI interviewer is trained on thousands of real interview scenarios and provides feedback based on industry best practices. It evaluates your code, problem-solving approach, and communication skills with high accuracy. The system continuously learns and improves from user interactions to provide more accurate and relevant feedback."
    },
    {
      question: "Which programming languages are supported?",
      answer: "We support all major programming languages including Python, Java, JavaScript, C++, and more. Our playground provides syntax highlighting, real-time compilation, and intelligent code suggestions for each language. You can also import your existing code from GitHub or LeetCode to practice in your preferred language."
    },
    {
      question: "Can I use Mitra AI for behavioral questions?",
      answer: "Yes! Our AI interviewer can conduct both technical and behavioral interviews. The system is designed to evaluate not just your coding skills but also your communication abilities, problem-solving approach, and how you handle different interview scenarios. You can practice both technical and behavioral questions in a realistic interview environment."
    },
    {
      question: "Is there a free tier available?",
      answer: "Yes, we offer a free tier with basic features that allows you to start practicing immediately. The free tier includes access to our AI interviewer, basic coding playground features, and a limited number of practice questions. You can upgrade to our premium plans for additional features and unlimited access."
    },
    {
      question: "How does the AI feedback system work?",
      answer: "Our AI feedback system analyzes your code, problem-solving approach, and communication in real-time. It provides detailed feedback on code quality, efficiency, best practices, and suggests improvements. The system also tracks your progress over time and adapts to your skill level to provide personalized learning experiences."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-[#0d1117]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Support
          </motion.span>
          <motion.div className="flex items-center justify-center gap-3 mb-4">
            <FaQuestionCircle className="w-6 h-6 text-[#58a6ff]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Everything you need to know about our platform
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#161b22] rounded-md border border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:ring-offset-2 focus:ring-offset-[#0d1117]"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400"
                >
                  <FaChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-gray-800"
                  >
                    <div className="px-6 py-4 text-gray-400 bg-[#161b22] bg-opacity-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-white bg-[#21262d] border border-gray-700 hover:bg-[#30363d] hover:border-gray-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#58a6ff] focus:ring-offset-[#0d1117]"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}