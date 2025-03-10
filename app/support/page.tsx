'use client';

import { MotionDiv } from '@/components/MotionWrapper';
import MainLayout from '../components/layout/MainLayout';
import Image from 'next/image';

interface SupportOptionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  action: string;
  delay?: number;
}

const SupportOption = ({ title, description, icon, action, delay = 0 }: SupportOptionProps) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-white rounded-lg p-6 newspaper-texture"
  >
    <div className="w-12 h-12 rounded-full bg-dark-green text-white flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-niconne mb-2 text-dark-green">{title}</h3>
    <p className="text-dark-green/80 font-newsreader mb-4">{description}</p>
    <button className="w-full px-6 py-3 bg-dark-green text-white rounded-full hover:bg-dark-green/90 transition-colors font-franklin">
      {action}
    </button>
  </MotionDiv>
);

const supportOptions = [
  {
    title: "Submit a Ticket",
    description: "Create a support ticket and we'll respond within 24 hours",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    action: "Create Ticket"
  },
  {
    title: "Live Chat",
    description: "Chat with our support team in real-time for immediate assistance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    action: "Start Chat"
  },
  {
    title: "Knowledge Base",
    description: "Browse our comprehensive documentation and tutorials",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    action: "View Docs"
  },
  {
    title: "Community Forum",
    description: "Connect with other users and share solutions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    action: "Join Community"
  }
];

const supportTopics = [
  {
    title: "Account Issues",
    count: 45,
    image: "/images/article2.jpg"
  },
  {
    title: "Billing & Payments",
    count: 32,
    image: "/images/article3.jpg"
  },
  {
    title: "Technical Support",
    count: 67,
    image: "/images/article4.jpg"
  },
  {
    title: "Feature Requests",
    count: 28,
    image: "/images/article5.jpg"
  }
];

export default function Support() {
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
            Support
          </span>
          <h1 className="text-4xl md:text-6xl font-niconne mb-6 leading-tight text-dark-green">
            We're Here to Help
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-newsreader text-dark-green">
            Choose your preferred way to get support. Our team is ready to assist you.
          </p>
        </MotionDiv>
      </section>

      {/* Support Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportOptions.map((option, index) => (
            <SupportOption
              key={option.title}
              {...option}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Support Topics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
            Browse by Topic
          </h2>
          <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
            Find solutions by exploring our most common support categories.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportTopics.map((topic, index) => (
            <MotionDiv
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-lg overflow-hidden newspaper-texture"
            >
              <div className="relative h-48">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-dark-green/20 group-hover:bg-dark-green/30 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-niconne mb-2 text-dark-green">{topic.title}</h3>
                <p className="text-dark-green/60 font-franklin text-sm">{topic.count} articles</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Submit Ticket Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg p-8 md:p-12 newspaper-texture">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-niconne mb-6 text-dark-green text-center">
              Submit a Support Ticket
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-dark-green font-franklin mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-dark-green/20 focus:outline-none focus:border-dark-green font-newsreader"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-dark-green font-franklin mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-dark-green/20 focus:outline-none focus:border-dark-green font-newsreader"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="topic" className="block text-dark-green font-franklin mb-2">Topic</label>
                <select
                  id="topic"
                  className="w-full px-4 py-3 rounded-lg border border-dark-green/20 focus:outline-none focus:border-dark-green font-newsreader"
                >
                  <option value="">Select a topic</option>
                  <option value="account">Account Issues</option>
                  <option value="billing">Billing & Payments</option>
                  <option value="technical">Technical Support</option>
                  <option value="feature">Feature Requests</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-dark-green font-franklin mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-dark-green/20 focus:outline-none focus:border-dark-green font-newsreader resize-none"
                  placeholder="Describe your issue in detail"
                ></textarea>
              </div>
              <div>
                <label htmlFor="attachments" className="block text-dark-green font-franklin mb-2">Attachments</label>
                <div className="border-2 border-dashed border-dark-green/20 rounded-lg p-6 text-center">
                  <p className="text-dark-green/80 font-newsreader mb-2">
                    Drag and drop files here or
                  </p>
                  <button type="button" className="text-dark-green font-franklin hover:text-dark-green/80 transition-colors">
                    Browse Files
                  </button>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-dark-green text-white rounded-full hover:bg-dark-green/90 transition-colors font-franklin"
                >
                  Submit Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-dark-green/5 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
              Support Hours
            </h2>
            <p className="text-dark-green font-newsreader mb-8">
              Our support team is available during the following hours:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-niconne text-xl mb-2 text-dark-green">Americas</h3>
                <p className="text-dark-green/80 font-newsreader">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM EST
                </p>
              </div>
              <div>
                <h3 className="font-niconne text-xl mb-2 text-dark-green">Europe</h3>
                <p className="text-dark-green/80 font-newsreader">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM CET
                </p>
              </div>
              <div>
                <h3 className="font-niconne text-xl mb-2 text-dark-green">Asia Pacific</h3>
                <p className="text-dark-green/80 font-newsreader">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM JST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 