'use client';

import { MotionDiv } from '@/components/MotionWrapper';
import MainLayout from '../components/layout/MainLayout';
import Image from 'next/image';

interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  link: string;
  delay?: number;
}

const ContactMethod = ({ icon, title, description, action, link, delay = 0 }: ContactMethodProps) => (
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
    <a
      href={link}
      className="text-dark-green font-franklin text-sm flex items-center hover:text-dark-green/80 transition-colors"
    >
      {action}
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </MotionDiv>
);

const contactMethods = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Email Support",
    description: "Get help from our support team via email",
    action: "Send Email",
    link: "mailto:support@designjournal.com"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    action: "Start Chat",
    link: "#"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
      </svg>
    ),
    title: "Documentation",
    description: "Browse our comprehensive documentation",
    action: "View Docs",
    link: "/docs"
  }
];

const faqs = [
  {
    question: "How do I reset my password?",
    answer: "You can reset your password by clicking the 'Forgot Password' link on the login page and following the instructions sent to your email."
  },
  {
    question: "How can I upgrade my plan?",
    answer: "To upgrade your plan, go to your account settings and click on 'Subscription'. From there, you can view and select available plans."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your billing period."
  }
];

export default function Contact() {
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
            Contact
          </span>
          <h1 className="text-4xl md:text-6xl font-niconne mb-6 leading-tight text-dark-green">
            Get in Touch
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-newsreader text-dark-green">
            Have questions? We're here to help. Choose your preferred way to reach us below.
          </p>
        </MotionDiv>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <ContactMethod
              key={method.title}
              {...method}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg p-8 md:p-12 newspaper-texture">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-niconne mb-6 text-dark-green text-center">
              Send Us a Message
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
                <label htmlFor="subject" className="block text-dark-green font-franklin mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-dark-green/20 focus:outline-none focus:border-dark-green font-newsreader"
                  placeholder="Message subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-dark-green font-franklin mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-dark-green/20 focus:outline-none focus:border-dark-green font-newsreader resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-dark-green text-white rounded-full hover:bg-dark-green/90 transition-colors font-franklin"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-dark-green/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
              Frequently Asked Questions
            </h2>
            <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
              Find quick answers to common questions.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <MotionDiv
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 newspaper-texture"
              >
                <h3 className="text-xl font-niconne mb-2 text-dark-green">{faq.question}</h3>
                <p className="text-dark-green/80 font-newsreader">{faq.answer}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
            Visit Our Offices
          </h2>
          <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
            Stop by one of our global offices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden newspaper-texture"
          >
            <div className="relative h-48">
              <Image
                src="/images/article2.jpg"
                alt="San Francisco Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-niconne mb-2 text-dark-green">San Francisco</h3>
              <p className="text-dark-green/80 font-newsreader">
                123 Design Street<br />
                San Francisco, CA 94105<br />
                United States
              </p>
            </div>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden newspaper-texture"
          >
            <div className="relative h-48">
              <Image
                src="/images/article3.jpg"
                alt="London Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-niconne mb-2 text-dark-green">London</h3>
              <p className="text-dark-green/80 font-newsreader">
                456 Creative Lane<br />
                London, EC2A 4BQ<br />
                United Kingdom
              </p>
            </div>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden newspaper-texture"
          >
            <div className="relative h-48">
              <Image
                src="/images/article4.jpg"
                alt="Tokyo Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-niconne mb-2 text-dark-green">Tokyo</h3>
              <p className="text-dark-green/80 font-newsreader">
                789 Innovation Road<br />
                Shibuya-ku, Tokyo 150-0002<br />
                Japan
              </p>
            </div>
          </MotionDiv>
        </div>
      </section>
    </MainLayout>
  );
} 