'use client';

import { MotionDiv } from '@/components/MotionWrapper';
import MainLayout from '../components/layout/MainLayout';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay?: number;
}

const TeamMember = ({ name, role, image, delay = 0 }: TeamMemberProps) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="text-center"
  >
    <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
      />
    </div>
    <h3 className="text-xl font-niconne mb-1 text-dark-green">{name}</h3>
    <p className="text-dark-green/80 font-newsreader">{role}</p>
  </MotionDiv>
);

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/images/article6.jpg"
  },
  {
    name: "Michael Chen",
    role: "Head of Design",
    image: "/images/member2.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "Chief Technology Officer",
    image: "/images/article1.jpg"
  },
  {
    name: "David Kim",
    role: "Head of Product",
    image: "/images/member6.jpg"
  }
];

const officeLocations = [
  {
    city: "San Francisco",
    address: "123 Design Street, CA 94105",
    image: "/images/blur2.jpg"
  },
  {
    city: "London",
    address: "456 Creative Lane, EC2A 4BQ",
    image: "/images/blur1.jpg"
  },
  {
    city: "Tokyo",
    address: "789 Innovation Road, 150-0002",
    image: "/images/blur3.jpg"
  }
];

export default function About() {
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
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-niconne mb-6 leading-tight text-dark-green">
            Crafting Digital Experiences
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-newsreader text-dark-green">
            We're on a mission to empower creators and teams to bring their visions to life through innovative design tools.
          </p>
        </MotionDiv>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/article2.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-niconne mb-6 text-dark-green">Our Story</h2>
            <div className="space-y-4 text-dark-green/80 font-newsreader">
              <p>
                Founded in 2020, Design Journal began with a simple vision: to make professional design tools accessible to everyone.
              </p>
              <p>
                What started as a small team of passionate designers and developers has grown into a global community of creators, all united by the desire to bring beautiful designs to life.
              </p>
              <p>
                Today, we're proud to serve millions of users worldwide, from individual designers to enterprise teams, helping them collaborate and create seamlessly.
              </p>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-dark-green/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
              Mission & Values
            </h2>
            <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
              Our core values guide everything we do, from product development to customer support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-dark-green text-white flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="font-niconne text-xl mb-2 text-dark-green">Innovation</h3>
              <p className="text-dark-green/80 font-newsreader">
                We constantly push boundaries to create better design experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-dark-green text-white flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="font-niconne text-xl mb-2 text-dark-green">Community</h3>
              <p className="text-dark-green/80 font-newsreader">
                We believe in the power of collaboration and shared creativity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-dark-green text-white flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-niconne text-xl mb-2 text-dark-green">Trust</h3>
              <p className="text-dark-green/80 font-newsreader">
                We build reliable tools that creators can depend on daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
            Meet Our Team
          </h2>
          <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
            The passionate people behind Design Journal.
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

      {/* Office Locations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
            Our Offices
          </h2>
          <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
            Find us around the globe.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {officeLocations.map((office, index) => (
            <MotionDiv
              key={office.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden newspaper-texture"
            >
              <div className="relative h-48">
                <Image
                  src={office.image}
                  alt={office.city}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-niconne mb-2 text-dark-green">{office.city}</h3>
                <p className="text-dark-green/80 font-newsreader">{office.address}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg p-8 md:p-12 newspaper-texture text-center">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
            Join Our Journey
          </h2>
          <p className="text-dark-green font-newsreader mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team and help shape the future of design.
          </p>
          <button className="px-8 py-3 bg-dark-green text-white rounded-full hover:bg-dark-green/90 transition-colors font-franklin">
            View Open Positions
          </button>
        </div>
      </section>
    </MainLayout>
  );
} 