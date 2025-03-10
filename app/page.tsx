'use client';

import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import { MotionDiv } from '@/components/MotionWrapper';
import AboutSection from './components/AboutSection';
import BannerSection from './components/BannerSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import MainLayout from './components/layout/MainLayout';

const articles = [
  {
    title: 'A Continually Unfolding History - Hillview by Made by Hand',
    excerpt: 'A design building discusses the hillside of hillview, a historic chic feature former sheep farm on Tasmania\'s Bruny Island...',
    image: '/images/article7.jpg',
    tags: ['Design', 'Architecture'],
    href: '#'
  },
  {
    title: 'Cognitive Dissonance Theory: Crash Course for UX Designers',
    excerpt: 'We like to think of ourselves as certain ways. We consider ourselves to be truthful, hard-working, health...',
    image: '/images/featured-design.jpg',
    tags: ['Design', 'Research', 'Psychology'],
    href: '#'
  },
  {
    title: 'How Remote Work Drastically Improved My Design Skills',
    excerpt: 'Remote working might not only be feasible but beneficial. Stanford University found that remote employees were 13...',
    image: '/images/article3.jpg',
    tags: ['Design', 'Remote'],
    href: '#'
  },
  {
    title: 'Improve Your UI Design Skills and Develop an Eye for Design',
    excerpt: 'The design industry is constantly evolving, but good design is timeless. Learn how to quickly develop an eye for UI...',
    image: '/images/article4.jpg',
    tags: ['Design', 'Tools', 'Research'],
    href: '#'
  },
  {
    title: 'Exclusive Interview with Designer, Jasmin Chew',
    excerpt: 'Jasmin Chew is a 23-year-old photographer and photo editor from Toronto, Ontario. She has worked with Spotify...',
    image: '/images/article5.jpg',
    tags: ['Design', 'Research', 'Interview'],
    href: '#'
  },
  {
    title: 'The Design Dilemma: Is Best UX Practice the Enemy of Creativity',
    excerpt: 'Frankie Sullivan explores the Design Dilemma - what happens when best practice UX design clashes with creative...',
    image: '/images/article6.jpg',
    tags: ['Design', 'Theory', 'Research'],
    href: '#'
  }
];

export default function Home() {
  return (
    <MainLayout>
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-dark-green/5 text-lg mb-4 font-niconne text-dark-green">
              Design Journal
            </span>
            <h1 className="text-4xl md:text-6xl font-niconne mb-6 leading-tight text-dark-green">
              The Untitled Design Journal &amp; Interviews
            </h1>
            <p className="max-w-2xl mx-auto text-lg font-newsreader text-dark-green">
              The Untitled UI Journal features carefully selected good works from designers from around the globe.
            </p>
          </MotionDiv>
        </section>

        {/* Featured Article */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-dark-green/5 rounded-2xl overflow-hidden newspaper-texture"
          >
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
                Happy Clients and Finding Work That Motivates
              </h2>
              <p className="mb-6 font-newsreader text-dark-green">
                Exploring the intersection of design, motivation, and client relationships in the modern digital landscape.
              </p>
              <div className="flex items-center space-x-4 font-franklin text-dark-green">
                <span className="text-sm">Written by Design Team</span>
                <span className="text-sm">April 2024</span>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden">
              <MotionDiv
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0"
              >
                <img
                  src="/images/article2.jpg"
                  alt="Design workspace"
                  className="w-full h-full object-cover"
                />
              </MotionDiv>
              {/* Animated grid overlay */}
              <MotionDiv
                initial={{ opacity: 0.15, backgroundPosition: "0% 0%" }}
                animate={{ 
                  opacity: [0.15, 0.3, 0.15],
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
                className="absolute inset-0 bg-grid-overlay"
                style={{
                  backgroundSize: '30px 30px',
                  backgroundImage: `
                    linear-gradient(to right, rgba(0,48,24,0.2) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0,48,24,0.2) 1px, transparent 1px)
                  `,
                }}
              />
              {/* Geometric Lines */}
              <MotionDiv
                initial={{ opacity: 0.1 }}
                animate={{ 
                  opacity: [0.1, 0.25, 0.1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, transparent 65%, rgba(0,48,24,0.2) 65.5%, transparent 66%),
                    linear-gradient(-45deg, transparent 65%, rgba(0,48,24,0.2) 65.5%, transparent 66%),
                    linear-gradient(135deg, transparent 65%, rgba(0,48,24,0.15) 65.5%, transparent 66%),
                    linear-gradient(-135deg, transparent 65%, rgba(0,48,24,0.15) 65.5%, transparent 66%)
                  `,
                  backgroundSize: '100px 100px',
                }}
              />
              {/* Diagonal Lines */}
              <MotionDiv
                initial={{ opacity: 0.15 }}
                animate={{ 
                  opacity: [0.15, 0.25, 0.15],
                  backgroundPosition: ["0% 0%", "100% 100%"]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(135deg, transparent 45%, rgba(0,48,24,0.15) 45%, rgba(0,48,24,0.15) 55%, transparent 55%),
                    linear-gradient(-135deg, transparent 45%, rgba(0,48,24,0.15) 45%, rgba(0,48,24,0.15) 55%, transparent 55%)
                  `,
                  backgroundSize: '60px 60px',
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-dark-green/15 via-transparent to-dark-green/25" />
              {/* Animated dots */}
              <MotionDiv
                initial={{ opacity: 0.1 }}
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0"
                style={{
                  backgroundImage: 'radial-gradient(circle at center, rgba(0,48,24,0.25) 1px, transparent 4px)',
                  backgroundSize: '40px 40px',
                }}
              />
            </div>
          </MotionDiv>
        </section>

        {/* Article Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard
                key={article.title}
                {...article}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Banner Section */}
        <BannerSection />

        {/* Testimonial Section */}
        <TestimonialSection />
      </div>
    </MainLayout>
  );
}
