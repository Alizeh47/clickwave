'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface TestimonialProps {
  image: string;
  quote: string;
  description: string;
  author: string;
  role: string;
}

const testimonialData: TestimonialProps[] = [
  {
    image: '/images/image.jpg',
    quote: "I love my new website and her eye for digital design is unreal.",
    description: "What I also love about Sarah is she has the heart of a teacher: never hesitates to explain how to do something and recommends ways to reduce overhead expenses if possible. I'm already discovering ways for us to work together again!",
    author: "HANHA P.",
    role: "WRITER AND SPEAKER"
  },
  {
    image: '/images/article3.jpg',
    quote: "The attention to detail and creative approach exceeded my expectations.",
    description: "Working with this team has been an absolute pleasure. They took the time to understand our brand's vision and transformed it into a stunning digital experience that perfectly captures our essence.",
    author: "MICHAEL R.",
    role: "CREATIVE DIRECTOR"
  },
  {
    image: '/images/article6.jpg',
    quote: "A game-changing collaboration that elevated our brand identity.",
    description: "The innovative solutions and strategic insights provided have completely transformed how we connect with our audience. The results speak for themselves - our engagement has increased tremendously.",
    author: "SOPHIA L.",
    role: "MARKETING MANAGER"
  },
  {
    image: '/images/article7.jpg',
    quote: "Exceptional design work that captures the essence of our vision.",
    description: "The team's ability to translate complex ideas into beautiful, functional designs is remarkable. Their collaborative approach and dedication to excellence made the entire process smooth and enjoyable.",
    author: "JAMES K.",
    role: "STARTUP FOUNDER"
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonialData.length - 1;
      if (newIndex >= testimonialData.length) newIndex = 0;
      return newIndex;
    });
  };

  return (
    <section className="relative w-full bg-[#f8f8f8] py-20 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0"
              >
                <Image
                  src={testimonialData[currentIndex].image}
                  alt="Testimonial"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-newsreader italic leading-tight">
              "{testimonialData[currentIndex].quote}"
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed font-sans">
              {testimonialData[currentIndex].description}
            </p>
            <div className="pt-4">
              <p className="font-franklin text-sm tracking-wider">
                - {testimonialData[currentIndex].author}, <span className="text-gray-600">{testimonialData[currentIndex].role}</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-gray-800 w-4' : 'bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors z-10"
          onClick={() => paginate(-1)}
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors z-10"
          onClick={() => paginate(1)}
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
} 