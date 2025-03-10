'use client';

import { MotionDiv } from '@/components/MotionWrapper';
import MainLayout from '../components/layout/MainLayout';
import Image from 'next/image';

interface BlogPostProps {
  title: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  delay?: number;
}

const BlogPost = ({ title, excerpt, author, category, date, readTime, image, featured = false, delay = 0 }: BlogPostProps) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={`group bg-white rounded-lg overflow-hidden newspaper-texture ${
      featured ? 'md:col-span-2 md:grid md:grid-cols-2 md:gap-8' : ''
    }`}
  >
    <div className={`relative ${featured ? 'h-full min-h-[300px]' : 'h-48'}`}>
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
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-dark-green font-franklin">{author.name}</p>
          <p className="text-dark-green/60 text-sm font-franklin">{author.role}</p>
        </div>
      </div>
      <h3 className={`font-niconne mb-2 text-dark-green ${featured ? 'text-2xl' : 'text-xl'}`}>{title}</h3>
      <p className="text-dark-green/80 font-newsreader mb-4">{excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="text-dark-green/60 font-franklin text-sm">{date}</span>
        <span className="text-dark-green/60 font-franklin text-sm">{readTime} read</span>
      </div>
    </div>
  </MotionDiv>
);

const blogPosts = [
  {
    title: "The Future of Design: AI and Human Creativity",
    excerpt: "Explore how artificial intelligence is transforming the design industry and empowering human creativity in new ways.",
    author: {
      name: "Sarah Johnson",
      role: "Design Director",
      avatar: "/images/article1.jpg"
    },
    category: "Design Trends",
    date: "March 15, 2024",
    readTime: "5 min",
    image: "/images/featured-design.jpg",
    featured: true
  },
  {
    title: "Creating Effective Design Systems",
    excerpt: "Learn the key principles and best practices for building and maintaining design systems that scale.",
    author: {
      name: "Michael Chen",
      role: "Product Designer",
      avatar: "/images/member2.jpg"
    },
    category: "Design Systems",
    date: "March 10, 2024",
    readTime: "8 min",
    image: "/images/article3.jpg"
  },
  {
    title: "Typography in Digital Design",
    excerpt: "A comprehensive guide to choosing and pairing fonts for digital products and websites.",
    author: {
      name: "Emily Rodriguez",
      role: "UI Designer",
      avatar: "/images/article7.jpg"
    },
    category: "Typography",
    date: "March 5, 2024",
    readTime: "6 min",
    image: "/images/article4.jpg"
  },
  {
    title: "Designing for Accessibility",
    excerpt: "Essential guidelines and practices for creating inclusive digital experiences.",
    author: {
      name: "David Kim",
      role: "UX Designer",
      avatar: "/images/member6.jpg"
    },
    category: "Accessibility",
    date: "March 1, 2024",
    readTime: "7 min",
    image: "/images/article5.jpg"
  },
  {
    title: "Color Theory in UI Design",
    excerpt: "Understanding color psychology and creating effective color palettes for user interfaces.",
    author: {
      name: "Sarah Johnson",
      role: "Design Director",
      avatar: "/images/image.jpg"
    },
    category: "UI Design",
    date: "February 25, 2024",
    readTime: "6 min",
    image: "/images/article6.jpg"
  }
];

const categories = [
  "All",
  "Design Trends",
  "UI Design",
  "UX Design",
  "Typography",
  "Design Systems",
  "Accessibility",
  "Case Studies"
];

export default function Blog() {
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
            Blog
          </span>
          <h1 className="text-4xl md:text-6xl font-niconne mb-6 leading-tight text-dark-green">
            Design Insights & Stories
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-newsreader text-dark-green">
            Explore the latest articles, tutorials, and insights from our design experts.
          </p>
        </MotionDiv>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-dark-green/20 focus:outline-none focus:border-dark-green font-newsreader"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-green/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
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

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={post.title}
              {...post}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-dark-green/5 rounded-3xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-dark-green font-newsreader mb-8">
              Get the latest design insights and stories delivered straight to your inbox.
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
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 