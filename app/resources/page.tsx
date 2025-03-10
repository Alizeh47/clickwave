'use client';

import { MotionDiv } from '@/components/MotionWrapper';
import ArticleCard from '@/components/ArticleCard';
import MainLayout from '../components/layout/MainLayout';

const tutorials = [
  {
    title: "Getting Started with Design Journal",
    excerpt: "Learn the basics of our platform and start creating beautiful designs in minutes.",
    image: "/images/article2.jpg",
    tags: ["Beginner", "Tutorial"],
    href: "#"
  },
  {
    title: "Advanced Design Techniques",
    excerpt: "Master advanced design techniques and take your creations to the next level.",
    image: "/images/article3.jpg",
    tags: ["Advanced", "Tutorial"],
    href: "#"
  },
  {
    title: "Collaboration Best Practices",
    excerpt: "Learn how to effectively collaborate with team members and clients on design projects.",
    image: "/images/article4.jpg",
    tags: ["Collaboration", "Guide"],
    href: "#"
  }
];

const documentation = [
  {
    title: "API Documentation",
    excerpt: "Complete reference for our API endpoints, authentication, and integration guides.",
    image: "/images/article5.jpg",
    tags: ["API", "Documentation"],
    href: "#"
  },
  {
    title: "Component Library",
    excerpt: "Explore our extensive library of pre-built components and design elements.",
    image: "/images/article6.jpg",
    tags: ["Components", "Reference"],
    href: "#"
  },
  {
    title: "Design System Guidelines",
    excerpt: "Learn about our design system principles, tokens, and implementation guides.",
    image: "/images/article7.jpg",
    tags: ["Design System", "Guidelines"],
    href: "#"
  }
];

interface ResourceCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  delay?: number;
}

const ResourceCategory = ({ title, description, icon, href, delay = 0 }: ResourceCategoryProps) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="group bg-white rounded-lg p-8 newspaper-texture hover:shadow-lg transition-shadow"
  >
    <a href={href} className="block">
      <div className="text-dark-green mb-4">{icon}</div>
      <h3 className="text-xl font-niconne mb-3 text-dark-green group-hover:text-dark-green/80 transition-colors">
        {title}
      </h3>
      <p className="text-dark-green/80 font-newsreader">{description}</p>
    </a>
  </MotionDiv>
);

const categories = [
  {
    title: "Documentation",
    description: "Comprehensive guides and API references for developers.",
    href: "#documentation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
  {
    title: "Tutorials",
    description: "Step-by-step guides to help you master our platform.",
    href: "#tutorials",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    )
  },
  {
    title: "Community",
    description: "Join our community of designers and get help from experts.",
    href: "#community",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    )
  },
  {
    title: "Templates",
    description: "Browse our collection of ready-to-use design templates.",
    href: "#templates",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    )
  }
];

export default function Resources() {
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
            Resources
          </span>
          <h1 className="text-4xl md:text-6xl font-niconne mb-6 leading-tight text-dark-green">
            Everything You Need to Succeed
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-newsreader text-dark-green">
            Explore our comprehensive collection of resources, tutorials, and documentation to help you make the most of our platform.
          </p>
        </MotionDiv>
      </section>

      {/* Resource Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <ResourceCategory
              key={category.title}
              {...category}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">Latest Tutorials</h2>
          <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
            Learn from our comprehensive tutorials and improve your design skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <ArticleCard
              key={tutorial.title}
              {...tutorial}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Documentation Section */}
      <section id="documentation" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">Documentation</h2>
          <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
            Explore our technical documentation and integration guides.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentation.map((doc, index) => (
            <ArticleCard
              key={doc.title}
              {...doc}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg p-8 md:p-12 newspaper-texture">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">Stay Updated</h2>
            <p className="text-dark-green font-newsreader mb-8">
              Subscribe to our newsletter to receive the latest tutorials, resources, and updates.
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