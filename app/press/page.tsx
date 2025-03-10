'use client';

import { MotionDiv } from '@/components/MotionWrapper';
import MainLayout from '../components/layout/MainLayout';
import Image from 'next/image';

interface PressReleaseProps {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  delay?: number;
}

const PressRelease = ({ title, date, excerpt, category, delay = 0 }: PressReleaseProps) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-white rounded-lg p-6 newspaper-texture"
  >
    <div className="flex flex-wrap items-start justify-between mb-4">
      <span className="inline-block px-3 py-1 bg-dark-green/5 rounded-full text-dark-green text-sm font-franklin mb-2">
        {category}
      </span>
      <span className="text-dark-green/60 font-franklin text-sm">{date}</span>
    </div>
    <h3 className="text-xl font-niconne mb-3 text-dark-green">{title}</h3>
    <p className="text-dark-green/80 font-newsreader mb-4">{excerpt}</p>
    <button className="text-dark-green font-franklin text-sm flex items-center hover:text-dark-green/80 transition-colors">
      Read More
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </MotionDiv>
);

const pressReleases = [
  {
    title: "Design Journal Announces Major Platform Update",
    date: "March 15, 2024",
    excerpt: "Introducing new collaborative features and enhanced design tools to empower creative teams.",
    category: "Product Update"
  },
  {
    title: "Design Journal Reaches 10 Million Users Milestone",
    date: "March 1, 2024",
    excerpt: "Celebrating rapid growth and global adoption of our design platform.",
    category: "Company News"
  },
  {
    title: "Design Journal Expands European Operations",
    date: "February 15, 2024",
    excerpt: "Opening new office in London to better serve our growing European user base.",
    category: "Company News"
  }
];

const mediaCoverage = [
  {
    outlet: "TechCrunch",
    title: "Design Journal: Revolutionizing Digital Design",
    date: "March 10, 2024",
    image: "/images/article2.jpg"
  },
  {
    outlet: "Forbes",
    title: "The Future of Design Collaboration",
    date: "March 5, 2024",
    image: "/images/article3.jpg"
  },
  {
    outlet: "Design Weekly",
    title: "How Design Journal is Changing the Industry",
    date: "February 28, 2024",
    image: "/images/article4.jpg"
  }
];

const brandAssets = [
  {
    title: "Logo Package",
    description: "Official logos in various formats",
    format: "ZIP",
    size: "12MB"
  },
  {
    title: "Brand Guidelines",
    description: "Complete brand style guide",
    format: "PDF",
    size: "8MB"
  },
  {
    title: "Product Screenshots",
    description: "High-resolution product images",
    format: "ZIP",
    size: "25MB"
  }
];

export default function Press() {
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
            Press
          </span>
          <h1 className="text-4xl md:text-6xl font-niconne mb-6 leading-tight text-dark-green">
            Latest News & Updates
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-newsreader text-dark-green">
            Stay up to date with Design Journal's latest announcements, media coverage, and company news.
          </p>
        </MotionDiv>
      </section>

      {/* Press Releases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
            Press Releases
          </h2>
          <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
            Official announcements and updates from Design Journal.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {pressReleases.map((release, index) => (
            <PressRelease
              key={release.title}
              {...release}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
            Media Coverage
          </h2>
          <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
            Recent features and articles about Design Journal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaCoverage.map((article, index) => (
            <MotionDiv
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-lg overflow-hidden newspaper-texture"
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-dark-green/60 font-franklin text-sm">{article.outlet}</span>
                <h3 className="text-xl font-niconne my-2 text-dark-green">{article.title}</h3>
                <p className="text-dark-green/60 font-franklin text-sm">{article.date}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Brand Assets */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-dark-green/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
              Brand Assets
            </h2>
            <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
              Download official Design Journal logos, guidelines, and media resources.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandAssets.map((asset, index) => (
              <MotionDiv
                key={asset.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 newspaper-texture"
              >
                <h3 className="text-xl font-niconne mb-2 text-dark-green">{asset.title}</h3>
                <p className="text-dark-green/80 font-newsreader mb-4">{asset.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-dark-green/60 font-franklin text-sm">
                    {asset.format} • {asset.size}
                  </span>
                  <button className="text-dark-green hover:text-dark-green/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </button>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg p-8 md:p-12 newspaper-texture">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
              Media Contact
            </h2>
            <p className="text-dark-green font-newsreader mb-8">
              For press inquiries, please contact our media relations team.
            </p>
            <div className="space-y-2">
              <p className="text-dark-green font-newsreader">
                <strong className="font-franklin">Email:</strong> press@designjournal.com
              </p>
              <p className="text-dark-green font-newsreader">
                <strong className="font-franklin">Phone:</strong> +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 