'use client';

import { MotionDiv } from '@/components/MotionWrapper';
import MainLayout from '../components/layout/MainLayout';
import Image from 'next/image';

interface NewsletterCategoryProps {
  title: string;
  description: string;
  frequency: string;
  subscribers: string;
  image: string;
  delay?: number;
}

const NewsletterCategory = ({ title, description, frequency, subscribers, image, delay = 0 }: NewsletterCategoryProps) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-white rounded-lg overflow-hidden newspaper-texture"
  >
    <div className="relative h-48">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-niconne mb-2 text-dark-green">{title}</h3>
      <p className="text-dark-green/80 font-newsreader mb-4">{description}</p>
      <div className="flex items-center justify-between mb-6">
        <span className="text-dark-green/60 font-franklin text-sm">{frequency}</span>
        <span className="text-dark-green/60 font-franklin text-sm">{subscribers} subscribers</span>
      </div>
      <button className="w-full px-6 py-3 bg-dark-green text-white rounded-full hover:bg-dark-green/90 transition-colors font-franklin">
        Subscribe
      </button>
    </div>
  </MotionDiv>
);

const newsletterCategories = [
  {
    title: "Design Weekly",
    description: "Stay updated with the latest design trends, tools, and industry insights.",
    frequency: "Weekly",
    subscribers: "50K+",
    image: "/images/article2.jpg"
  },
  {
    title: "UX Insights",
    description: "Deep dives into user experience design principles and best practices.",
    frequency: "Bi-weekly",
    subscribers: "35K+",
    image: "/images/article3.jpg"
  },
  {
    title: "Design Systems",
    description: "Everything about creating and maintaining scalable design systems.",
    frequency: "Monthly",
    subscribers: "25K+",
    image: "/images/article4.jpg"
  }
];

const pastNewsletters = [
  {
    title: "The Rise of AI in Design",
    date: "March 15, 2024",
    category: "Design Weekly"
  },
  {
    title: "Creating User-Centered Experiences",
    date: "March 8, 2024",
    category: "UX Insights"
  },
  {
    title: "Design System Architecture",
    date: "March 1, 2024",
    category: "Design Systems"
  }
];

export default function Newsletter() {
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
            Newsletter
          </span>
          <h1 className="text-4xl md:text-6xl font-niconne mb-6 leading-tight text-dark-green">
            Stay Inspired & Informed
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-newsreader text-dark-green">
            Subscribe to our curated newsletters and get the latest design insights delivered to your inbox.
          </p>
        </MotionDiv>
      </section>

      {/* Quick Subscribe */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-dark-green/5 rounded-3xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
              Quick Subscribe
            </h2>
            <p className="text-dark-green font-newsreader mb-8">
              Get all our newsletters with one subscription. You can customize your preferences later.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-dark-green/20 focus:outline-none focus:border-dark-green font-newsreader"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-dark-green text-white rounded-lg hover:bg-dark-green/90 transition-colors font-franklin whitespace-nowrap"
              >
                Subscribe All
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
            Choose Your Interests
          </h2>
          <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
            Subscribe to specific newsletters that match your interests.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsletterCategories.map((category, index) => (
            <NewsletterCategory
              key={category.title}
              {...category}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Past Newsletters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg p-8 md:p-12 newspaper-texture">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
              Past Newsletters
            </h2>
            <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
              Browse through our recent newsletters to see what you've been missing.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {pastNewsletters.map((newsletter, index) => (
              <MotionDiv
                key={newsletter.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between py-4 border-b border-dark-green/10 last:border-0"
              >
                <div>
                  <h3 className="text-xl font-niconne mb-1 text-dark-green">{newsletter.title}</h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-dark-green/60 font-franklin text-sm">{newsletter.date}</span>
                    <span className="text-dark-green/60 font-franklin text-sm">{newsletter.category}</span>
                  </div>
                </div>
                <button className="text-dark-green font-franklin text-sm flex items-center hover:text-dark-green/80 transition-colors">
                  Read
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-full bg-dark-green text-white flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-niconne mb-2 text-dark-green">Early Access</h3>
            <p className="text-dark-green/80 font-newsreader">
              Be the first to know about new features and updates.
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-full bg-dark-green text-white flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <h3 className="text-xl font-niconne mb-2 text-dark-green">Exclusive Content</h3>
            <p className="text-dark-green/80 font-newsreader">
              Get access to subscriber-only content and resources.
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-full bg-dark-green text-white flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-niconne mb-2 text-dark-green">Customizable</h3>
            <p className="text-dark-green/80 font-newsreader">
              Choose your preferred topics and frequency.
            </p>
          </MotionDiv>
        </div>
      </section>
    </MainLayout>
  );
} 