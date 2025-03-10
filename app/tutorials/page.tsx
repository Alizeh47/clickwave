'use client';

import { MotionDiv } from '@/components/MotionWrapper';
import MainLayout from '../components/layout/MainLayout';
import Image from 'next/image';

interface TutorialCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  level: string;
  delay?: number;
}

const TutorialCard = ({ title, description, image, category, duration, level, delay = 0 }: TutorialCardProps) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="group bg-white rounded-lg overflow-hidden newspaper-texture"
  >
    <div className="relative h-48">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-dark-green text-white text-sm rounded-full font-franklin">
          {category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center space-x-4 mb-4">
        <span className="text-dark-green/60 font-franklin text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {duration}
        </span>
        <span className="text-dark-green/60 font-franklin text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          {level}
        </span>
      </div>
      <h3 className="text-xl font-niconne mb-2 text-dark-green">{title}</h3>
      <p className="text-dark-green/80 font-newsreader mb-4">{description}</p>
      <button className="text-dark-green font-franklin text-sm flex items-center group-hover:text-dark-green/80 transition-colors">
        Start Tutorial
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </MotionDiv>
);

const tutorials = [
  {
    title: "Getting Started with Design Journal",
    description: "Learn the basics of our platform and start creating beautiful designs in minutes.",
    image: "/images/article2.jpg",
    category: "Basics",
    duration: "30 min",
    level: "Beginner"
  },
  {
    title: "Advanced Design Techniques",
    description: "Master advanced design techniques and take your creations to the next level.",
    image: "/images/article3.jpg",
    category: "Advanced",
    duration: "1 hour",
    level: "Advanced"
  },
  {
    title: "Collaboration Best Practices",
    description: "Learn how to effectively collaborate with team members and clients on design projects.",
    image: "/images/article4.jpg",
    category: "Workflow",
    duration: "45 min",
    level: "Intermediate"
  },
  {
    title: "Design System Implementation",
    description: "Create and maintain a consistent design system across your organization.",
    image: "/images/article5.jpg",
    category: "Design Systems",
    duration: "1.5 hours",
    level: "Advanced"
  },
  {
    title: "Responsive Design Fundamentals",
    description: "Learn how to create designs that work beautifully across all devices.",
    image: "/images/article6.jpg",
    category: "Web Design",
    duration: "1 hour",
    level: "Intermediate"
  },
  {
    title: "Animation and Interaction",
    description: "Add life to your designs with beautiful animations and interactions.",
    image: "/images/article7.jpg",
    category: "Interactive",
    duration: "1 hour",
    level: "Intermediate"
  }
];

const categories = [
  "All",
  "Basics",
  "Advanced",
  "Workflow",
  "Design Systems",
  "Web Design",
  "Interactive"
];

export default function Tutorials() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-dark-green/5 text-lg mb-4 font-niconne text-dark-green">
            Tutorials
          </span>
          <h1 className="text-4xl md:text-6xl font-niconne mb-6 leading-tight text-dark-green">
            Learn and Master Design
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-newsreader text-dark-green">
            Explore our comprehensive collection of tutorials to enhance your design skills.
          </p>
        </MotionDiv>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-franklin text-sm transition-colors ${
                index === 0
                  ? 'bg-dark-green text-white'
                  : 'bg-dark-green/5 text-dark-green hover:bg-dark-green/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <TutorialCard
              key={tutorial.title}
              {...tutorial}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-dark-green/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
              Learning Paths
            </h2>
            <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
              Follow our curated learning paths to master specific design skills.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 newspaper-texture">
              <h3 className="font-niconne text-xl mb-3 text-dark-green">Beginner Path</h3>
              <p className="text-dark-green/80 font-newsreader mb-4">
                Start your design journey with fundamental concepts and tools.
              </p>
              <span className="text-dark-green/60 font-franklin text-sm">6 tutorials • 4 hours</span>
            </div>
            <div className="bg-white rounded-lg p-6 newspaper-texture">
              <h3 className="font-niconne text-xl mb-3 text-dark-green">Intermediate Path</h3>
              <p className="text-dark-green/80 font-newsreader mb-4">
                Enhance your skills with advanced techniques and workflows.
              </p>
              <span className="text-dark-green/60 font-franklin text-sm">8 tutorials • 6 hours</span>
            </div>
            <div className="bg-white rounded-lg p-6 newspaper-texture">
              <h3 className="font-niconne text-xl mb-3 text-dark-green">Expert Path</h3>
              <p className="text-dark-green/80 font-newsreader mb-4">
                Master complex design systems and enterprise workflows.
              </p>
              <span className="text-dark-green/60 font-franklin text-sm">10 tutorials • 8 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg p-8 md:p-12 newspaper-texture">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
              Stay Updated
            </h2>
            <p className="text-dark-green font-newsreader mb-8">
              Subscribe to receive new tutorials and design tips in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-dark-green/20 focus:outline-none focus:border-dark-green font-newsreader"
              />
              <button className="px-6 py-3 bg-dark-green text-white rounded-lg hover:bg-dark-green/90 transition-colors font-franklin">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 