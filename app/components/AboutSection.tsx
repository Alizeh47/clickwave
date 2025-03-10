'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 bg-dark-green/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-64 h-64 bg-dark-green/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/images/article1.jpg"
                alt="Portrait"
                fill
                className="object-cover"
                priority
              />
              {/* Animated overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-dark-green/20 to-transparent"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Decorative grid */}
              <motion.div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(26,71,42,0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(26,71,42,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                }}
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <motion.h2 
                className="text-4xl font-pinyon-script text-dark-green"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hi I'm Sophie
              </motion.h2>
              <motion.h3 
                className="text-2xl font-im-fell-great-primer text-dark-green/90 uppercase tracking-wider"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                THE HEART AND SOUL BEHIND THIS SPACE
              </motion.h3>
            </div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="font-bad-script text-lg text-dark-green/80 leading-relaxed">
                With a background in Communication and Psychology, I'm passionate about helping creatives like you unlock their full potential.
              </p>
              <p className="font-bad-script text-lg text-dark-green/80 leading-relaxed">
                My mission is to help you break through creative blocks and build an authentic brand that truly reflects who you are.
              </p>
            </motion.div>

            <motion.div 
              className="bg-dark-green/5 p-8 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <h4 className="text-2xl font-niconne text-dark-green mb-4">
                What drives me most?
              </h4>
              <p className="font-newsreader text-xl text-dark-green/90 italic leading-relaxed">
                The belief in the power of <span className="font-im-fell-great-primer">community</span> and the transformative potential of <span className="font-im-fell-great-primer">genuine human connection</span>.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="space-y-2">
                <p className="font-niconne text-2xl text-dark-green">
                  To inspire, educate, and empower
                </p>
                <p className="font-newsreader text-lg text-dark-green/80">
                  you to embark on your own journey of self-discovery and holistic healing.
                </p>
              </div>
              <p className="font-newsreader text-lg text-dark-green/80">
                Through my writing and community updates, I share insights to help you connect more meaningfully with yourself and others.
              </p>
              <p className="font-im-fell-great-primer text-lg text-dark-green/90 mt-8">
                WITH WARMTH AND GRATITUDE,
                <br />
                <span className="font-pinyon-script text-2xl">Sophie xx</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 