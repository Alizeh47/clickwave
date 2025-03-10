'use client';

import { MotionDiv } from '@/components/MotionWrapper';
import MainLayout from '../components/layout/MainLayout';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  delay?: number;
}

const TeamMember = ({ name, role, image, bio, delay = 0 }: TeamMemberProps) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-white rounded-lg overflow-hidden newspaper-texture"
  >
    <div className="relative h-64">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-niconne mb-1 text-dark-green">{name}</h3>
      <p className="text-dark-green/60 font-franklin text-sm mb-4">{role}</p>
      <p className="text-dark-green/80 font-newsreader">{bio}</p>
    </div>
  </MotionDiv>
);

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ValueCard = ({ icon, title, description, delay = 0 }: ValueCardProps) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-white rounded-lg p-6 newspaper-texture"
  >
    <div className="text-dark-green mb-4">{icon}</div>
    <h3 className="text-xl font-niconne mb-3 text-dark-green">{title}</h3>
    <p className="text-dark-green/80 font-newsreader">{description}</p>
  </MotionDiv>
);

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/images/article1.jpg",
    bio: "With over 15 years of experience in design and technology, Sarah leads our mission to empower creators worldwide."
  },
  {
    name: "Michael Chen",
    role: "Head of Design",
    image: "/images/member6.jpg",
    bio: "Michael brings his passion for beautiful, functional design to every project and mentors our growing design team."
  },
  {
    name: "Emily Rodriguez",
    role: "Product Director",
    image: "/images/article6.jpg",
    bio: "Emily ensures our products meet the highest standards of quality and user experience."
  },
  {
    name: "David Kim",
    role: "Technical Lead",
    image: "/images/member2.jpg",
    bio: "David architects our platform's infrastructure and leads our engineering initiatives."
  }
];

const values = [
  {
    title: "Innovation First",
    description: "We constantly push boundaries and explore new possibilities in design and technology.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    )
  },
  {
    title: "User-Centered",
    description: "Every decision we make starts with our users' needs and experiences in mind.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    )
  },
  {
    title: "Collaboration",
    description: "We believe great things happen when creative minds work together.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    )
  },
  {
    title: "Quality",
    description: "We maintain the highest standards in everything we create and deliver.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    )
  }
];

export default function Company() {
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
            Our Company
          </span>
          <h1 className="text-4xl md:text-6xl font-niconne mb-6 leading-tight text-dark-green">
            Empowering Creators Worldwide
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-newsreader text-dark-green">
            We're on a mission to make design accessible to everyone and build the future of creative tools.
          </p>
        </MotionDiv>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video">
            <Image
              src="/images/article2.jpg"
              alt="Our Mission"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-niconne mb-6 text-dark-green">Our Mission</h2>
            <p className="text-dark-green font-newsreader mb-6">
              We believe that great design should be accessible to everyone. Our mission is to empower creators with intuitive tools that bring their visions to life.
            </p>
            <p className="text-dark-green font-newsreader">
              Since our founding in 2020, we've helped thousands of designers, entrepreneurs, and creative professionals build stunning digital experiences that captivate and inspire.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">Our Values</h2>
          <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
            These core principles guide everything we do and help us deliver exceptional experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              {...value}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">Meet Our Team</h2>
          <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
            The passionate individuals behind our mission to empower creators worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.name}
              {...member}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>
    </MainLayout>
  );
} 