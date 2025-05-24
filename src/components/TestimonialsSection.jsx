import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar, FaMicrosoft } from 'react-icons/fa';
import { SiGoogle, SiAmazon } from 'react-icons/si';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Mitra AI transformed my interview preparation. The AI interviewer provided feedback that was incredibly similar to real interviews, and the coding playground helped me practice efficiently.",
      author: "Sarah Chen",
      role: "Software Engineer at Google",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      companyIcon: <SiGoogle className="w-5 h-5 text-[#4285F4]" />,
      stars: 5
    },
    {
      quote: "As a bootcamp graduate, I was struggling with technical interviews. Mitra AI's personalized feedback and realistic interview scenarios helped me land my dream job at a top tech company.",
      author: "Michael Rodriguez",
      role: "Full Stack Developer at Amazon",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      companyIcon: <SiAmazon className="w-5 h-5 text-[#FF9900]" />,
      stars: 5
    },
    {
      quote: "The AI interviewer's ability to adapt to different skill levels and provide detailed feedback on both technical and behavioral aspects is remarkable. It's like having a personal interview coach.",
      author: "Priya Patel",
      role: "Senior Developer at Microsoft",      image: "https://randomuser.me/api/portraits/women/65.jpg",
      companyIcon: <FaMicrosoft className="w-5 h-5 text-[#58a6ff]" />,
      stars: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Join thousands of developers who have improved their interview skills
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">          <div className="absolute -left-4 -top-4 text-[#58a6ff] opacity-20">
            <FaQuoteLeft className="w-16 h-16" />
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-[#161b22] rounded-lg p-8 md:p-10 shadow-lg border border-gray-800"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].author}
                        className="w-24 h-24 rounded-full border-2 border-gray-700 shadow-lg"
                      />                <div className="absolute -bottom-2 -right-2 bg-[#0d1117] p-1 rounded-full border border-[#58a6ff30]">
                        {testimonials[currentIndex].companyIcon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow text-center md:text-left">                    <div className="flex items-center mb-4 justify-center md:justify-start">
                      {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-[#58a6ff]" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl font-medium text-white mb-6">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-white">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-gray-400">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-md bg-[#21262d] border border-gray-700 text-gray-400 hover:text-white hover:bg-[#30363d] hover:border-gray-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-[#58a6ff]'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-md bg-[#21262d] border border-gray-700 text-gray-400 hover:text-white hover:bg-[#30363d] hover:border-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}