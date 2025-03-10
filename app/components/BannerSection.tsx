'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const BannerSection = () => {
  return (
    <section className="py-16 bg-[#334835] relative overflow-hidden">
      {/* Classic geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        {/* Floral corners */}
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 border-[1px] border-white"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 border-[1px] border-white"
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Decorative circles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute border border-white rounded-full"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              delay: i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Art deco inspired lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-full w-[1px] bg-white/20"
            style={{
              left: `${(i + 1) * 12.5}%`,
            }}
            animate={{
              scaleY: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-white/30 rounded-tl-3xl" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-white/30 rounded-tr-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-white/30 rounded-bl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-white/30 rounded-br-3xl" />

      {/* Classic diamond patterns */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`diamond-${i}`}
            className="absolute border border-white transform -rotate-45"
            style={{
              width: '60px',
              height: '60px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [-45, -225, -45],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Quote Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-niconne text-white/90 uppercase tracking-wider mb-4">
            WHAT DRIVES ME MOST
          </h3>
          <p className="text-2xl font-newsreader text-white leading-relaxed">
            The belief in the power of <span className="font-[var(--font-im-fell-great-primer)] italic">community</span> and the transformative potential of <span className="font-[var(--font-im-fell-great-primer)] italic">genuine human connection</span>.
          </p>
        </div>

        {/* Bottom Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="font-niconne text-2xl text-white mb-2">
                To inspire, educate, and
              </p>
              <p className="font-newsreader text-xl text-white/90">
                empower you to embark on your own journey of self-discovery and holistic healing.
              </p>
            </div>
            <p className="font-newsreader text-lg text-white/80">
              Through my writing, social media, and community updates, we share
              stories and tips to help you connect more meaningfully with yourself and others.
            </p>
            <div className="mt-8">
              <p className="font-[var(--font-im-fell-great-primer)] text-white/90">
                WITH WARMTH AND GRATITUDE,
              </p>
              <p className="font-[var(--font-pinyon-script)] text-2xl text-white">
                Sophie xx
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* Outer decorative border */}
              <div 
                className="absolute inset-0 -m-2 rounded-[70%/50%] border-4 border-[#B8B5A8] opacity-40"
              />
              {/* Image container */}
              <div 
                className="relative w-[340px] h-[480px] overflow-hidden rounded-[70%/50%] border-[12px] border-white bg-white"
                style={{
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Image
                  src="/images/article4.jpg"
                  alt="Nature connection"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection; 