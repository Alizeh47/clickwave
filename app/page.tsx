'use client';

import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import { MotionDiv } from '@/components/MotionWrapper';

const articles = [
  {
    title: 'A Continually Unfolding History - Hillview by Made by Hand',
    excerpt: 'A design building discusses the hillside of hillview, a historic chic feature former sheep farm on Tasmania\'s Bruny Island...',
    image: '/images/article1.jpg',
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
    <main className="min-h-screen bg-grid-pattern">
      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 w-24 h-24 bg-dark-green/10 blur-3xl" />
      <div className="fixed bottom-0 left-0 w-24 h-24 bg-dark-green/10 blur-3xl" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-3xl md:text-4xl font-niconne text-dark-green px-3 py-2 hover:text-dark-green/80 transition-colors">Design Journal</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-600 hover:text-dark-green font-noticia">Features</Link>
              <Link href="#" className="text-gray-600 hover:text-dark-green font-noticia">Pricing</Link>
              <Link href="#" className="text-gray-600 hover:text-dark-green font-noticia">Company</Link>
              <Link href="#" className="text-gray-600 hover:text-dark-green font-noticia">Resources</Link>
            </div>
          </div>
        </div>
      </nav>

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
              <p className="mb-6 font-newsreader text-dark-green/80">
                Exploring the intersection of design, motivation, and client relationships in the modern digital landscape.
              </p>
              <div className="flex items-center space-x-4 font-franklin text-dark-green/70">
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
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-[#00160E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top section with CTA */}
          <div className="mb-20 text-center">
            <h2 className="font-niconne text-4xl md:text-5xl mb-6">Let's get started on something great</h2>
            <button className="px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-[#00160E] transition-colors font-newsreader text-lg">
              Start your 7-day free trial
            </button>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            {/* Product Column */}
            <div className="space-y-6">
              <h3 className="font-niconne text-xl">Product</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">Overview</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">Features</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">Solutions</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">Tutorials</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-6">
              <h3 className="font-niconne text-xl">Company</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">About us</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">Careers</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">Press</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">Contact</Link></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-6">
              <h3 className="font-niconne text-xl">Resources</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">Blog</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">Newsletter</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">Help centre</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">Support</Link></li>
              </ul>
            </div>

            {/* Social & Legal Column */}
            <div className="space-y-6">
              <h3 className="font-niconne text-xl">Connect</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">Twitter</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">LinkedIn</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">GitHub</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">Dribbble</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom section with logo and copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <span className="text-2xl font-niconne">Design Journal</span>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <div className="flex items-center space-x-6 font-newsreader text-white/60">
              <Link href="#" className="hover:text-white">Terms</Link>
              <Link href="#" className="hover:text-white">Privacy</Link>
              <Link href="#" className="hover:text-white">Cookies</Link>
              <span>© 2024 Design Journal</span>
            </div>
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0">
          <div className="relative w-20 h-20">
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-white/20"></div>
            <div className="absolute top-0 left-0 w-10 h-10 bg-white/20"></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
