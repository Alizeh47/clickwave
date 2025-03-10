'use client';

import { MotionDiv } from '@/components/MotionWrapper';
import MainLayout from '../components/layout/MainLayout';
import Image from 'next/image';

interface HighlightCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
}

const HighlightCard = ({ title, description, image, delay = 0 }: HighlightCardProps) => (
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
    </div>
    <div className="p-6">
      <h3 className="text-xl font-niconne mb-3 text-dark-green">{title}</h3>
      <p className="text-dark-green/80 font-newsreader">{description}</p>
    </div>
  </MotionDiv>
);

const highlights = [
  {
    title: "Beautiful Design Tools",
    description: "Create stunning designs with our intuitive and powerful design tools.",
    image: "/images/article2.jpg"
  },
  {
    title: "Seamless Collaboration",
    description: "Work together with your team in real-time on any project.",
    image: "/images/article3.jpg"
  },
  {
    title: "Powerful Integration",
    description: "Connect with your favorite tools and enhance your workflow.",
    image: "/images/article4.jpg"
  }
];

const stats = [
  { number: "10M+", label: "Active Users" },
  { number: "50K+", label: "Design Templates" },
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Support" }
];

export default function Overview() {
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
            Overview
          </span>
          <h1 className="text-4xl md:text-6xl font-niconne mb-6 leading-tight text-dark-green">
            Your Creative Journey Starts Here
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-newsreader text-dark-green">
            Discover how our platform empowers creators to bring their visions to life with powerful design tools and seamless collaboration.
          </p>
        </MotionDiv>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <MotionDiv
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-niconne mb-2 text-dark-green">{stat.number}</div>
              <div className="text-dark-green/80 font-newsreader">{stat.label}</div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Platform Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
            Platform Highlights
          </h2>
          <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
            Experience the power of our comprehensive design platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={highlight.title}
              {...highlight}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-dark-green/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
              How It Works
            </h2>
            <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
              Get started with our platform in three simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-dark-green text-white flex items-center justify-center mx-auto mb-4 font-niconne text-2xl">1</div>
              <h3 className="font-niconne text-xl mb-2 text-dark-green">Sign Up</h3>
              <p className="text-dark-green/80 font-newsreader">Create your account and choose a plan that fits your needs.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-dark-green text-white flex items-center justify-center mx-auto mb-4 font-niconne text-2xl">2</div>
              <h3 className="font-niconne text-xl mb-2 text-dark-green">Create</h3>
              <p className="text-dark-green/80 font-newsreader">Use our intuitive tools to bring your creative vision to life.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-dark-green text-white flex items-center justify-center mx-auto mb-4 font-niconne text-2xl">3</div>
              <h3 className="font-niconne text-xl mb-2 text-dark-green">Collaborate</h3>
              <p className="text-dark-green/80 font-newsreader">Share your work and collaborate with team members in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg p-8 md:p-12 newspaper-texture text-center">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
            Ready to Get Started?
          </h2>
          <p className="text-dark-green font-newsreader mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using our platform to bring their ideas to life.
          </p>
          <button className="px-8 py-3 bg-dark-green text-white rounded-full hover:bg-dark-green/90 transition-colors font-franklin">
            Start Free Trial
          </button>
        </div>
      </section>
    </MainLayout>
  );
} 