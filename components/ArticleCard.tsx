'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MotionArticle } from './MotionWrapper';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  tags: readonly string[];
  href: string;
  delay?: number;
}

export default function ArticleCard({ title, excerpt, image, tags, href, delay = 0 }: ArticleCardProps) {
  return (
    <MotionArticle
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-lg overflow-hidden newspaper-texture"
    >
      <Link href={href} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-dark-green/10" />
          <div className="decorative-corner decorative-corner-tr" />
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-dark-green/5 text-dark-green rounded-full font-franklin"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="font-old-standard text-xl mb-2 text-dark-green group-hover:text-dark-green/80 transition-colors">
            {title}
          </h3>
          
          <p className="text-dark-green/80 text-sm line-clamp-2 font-newsreader">
            {excerpt}
          </p>
        </div>
      </Link>
    </MotionArticle>
  );
} 