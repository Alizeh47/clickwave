'use client';

import { MotionDiv } from '@/components/MotionWrapper';
import MainLayout from '../components/layout/MainLayout';
import Image from 'next/image';

interface JobCardProps {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  delay?: number;
}

const JobCard = ({ title, department, location, type, description, delay = 0 }: JobCardProps) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-white rounded-lg p-6 newspaper-texture"
  >
    <div className="flex flex-wrap items-start justify-between mb-4">
      <div>
        <h3 className="text-xl font-niconne mb-2 text-dark-green">{title}</h3>
        <p className="text-dark-green/80 font-newsreader">{department}</p>
      </div>
      <div className="text-right">
        <span className="inline-block px-3 py-1 bg-dark-green/5 rounded-full text-dark-green text-sm font-franklin mb-2">
          {location}
        </span>
        <p className="text-dark-green/60 font-franklin text-sm">{type}</p>
      </div>
    </div>
    <p className="text-dark-green/80 font-newsreader mb-4">{description}</p>
    <button className="text-dark-green font-franklin text-sm flex items-center hover:text-dark-green/80 transition-colors">
      View Position
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </MotionDiv>
);

const openPositions = [
  {
    title: "Senior Product Designer",
    department: "Design",
    location: "San Francisco",
    type: "Full-time",
    description: "We're looking for an experienced product designer to help shape the future of our design tools."
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our engineering team to build beautiful and performant user interfaces."
  },
  {
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "London",
    type: "Full-time",
    description: "Drive product adoption through compelling storytelling and strategic marketing initiatives."
  },
  {
    title: "Customer Success Manager",
    department: "Customer Support",
    location: "Tokyo",
    type: "Full-time",
    description: "Help our customers succeed by providing exceptional support and guidance."
  }
];

const benefits = [
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    )
  },
  {
    title: "Learning & Growth",
    description: "Professional development budget and learning resources",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    )
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working hours and generous time off",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Team Events",
    description: "Regular team building and social activities",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    )
  }
];

export default function Careers() {
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
            Careers
          </span>
          <h1 className="text-4xl md:text-6xl font-niconne mb-6 leading-tight text-dark-green">
            Join Our Creative Team
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-newsreader text-dark-green">
            Help us shape the future of design and creativity. We're always looking for talented individuals to join our team.
          </p>
        </MotionDiv>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-niconne mb-6 text-dark-green">Our Culture</h2>
            <div className="space-y-4 text-dark-green/80 font-newsreader">
              <p>
                At Design Journal, we believe in fostering a culture of creativity, collaboration, and continuous learning.
              </p>
              <p>
                Our team is made up of passionate individuals who are dedicated to making design more accessible and enjoyable for everyone.
              </p>
              <p>
                We value diversity, encourage innovation, and celebrate the unique perspectives that each team member brings to the table.
              </p>
            </div>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/article3.jpg"
                alt="Our Culture"
                fill
                className="object-cover"
              />
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
            Benefits & Perks
          </h2>
          <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
            We offer competitive benefits to support our team members' well-being and growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <MotionDiv
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 newspaper-texture text-center"
            >
              <div className="w-12 h-12 rounded-full bg-dark-green text-white flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-niconne mb-2 text-dark-green">{benefit.title}</h3>
              <p className="text-dark-green/80 font-newsreader">{benefit.description}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
            Open Positions
          </h2>
          <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
            Find your next opportunity to make an impact.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {openPositions.map((position, index) => (
            <JobCard
              key={position.title}
              {...position}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-dark-green/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
              Application Process
            </h2>
            <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
              Our hiring process is designed to be transparent and efficient.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-dark-green text-white flex items-center justify-center mx-auto mb-4 font-niconne text-2xl">1</div>
              <h3 className="font-niconne text-xl mb-2 text-dark-green">Apply</h3>
              <p className="text-dark-green/80 font-newsreader">Submit your application and portfolio</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-dark-green text-white flex items-center justify-center mx-auto mb-4 font-niconne text-2xl">2</div>
              <h3 className="font-niconne text-xl mb-2 text-dark-green">Initial Call</h3>
              <p className="text-dark-green/80 font-newsreader">Chat with our recruiting team</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-dark-green text-white flex items-center justify-center mx-auto mb-4 font-niconne text-2xl">3</div>
              <h3 className="font-niconne text-xl mb-2 text-dark-green">Interview</h3>
              <p className="text-dark-green/80 font-newsreader">Meet the team and showcase your skills</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-dark-green text-white flex items-center justify-center mx-auto mb-4 font-niconne text-2xl">4</div>
              <h3 className="font-niconne text-xl mb-2 text-dark-green">Offer</h3>
              <p className="text-dark-green/80 font-newsreader">Join our creative team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg p-8 md:p-12 newspaper-texture text-center">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
            Don't See a Perfect Fit?
          </h2>
          <p className="text-dark-green font-newsreader mb-8 max-w-2xl mx-auto">
            We're always interested in meeting talented individuals. Send us your resume and let us know how you can contribute to our team.
          </p>
          <button className="px-8 py-3 bg-dark-green text-white rounded-full hover:bg-dark-green/90 transition-colors font-franklin">
            Send Open Application
          </button>
        </div>
      </section>
    </MainLayout>
  );
} 