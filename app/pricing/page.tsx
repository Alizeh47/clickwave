'use client';

import { MotionDiv } from '@/components/MotionWrapper';
import MainLayout from '../components/layout/MainLayout';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

const PricingTier = ({ name, price, description, features, isPopular = false, delay = 0 }: PricingTierProps) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={`relative bg-white rounded-lg p-8 newspaper-texture ${isPopular ? 'ring-2 ring-dark-green' : ''}`}
  >
    {isPopular && (
      <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-dark-green text-white px-4 py-1 rounded-full text-sm font-franklin">
        Most Popular
      </span>
    )}
    <div className="text-center mb-8">
      <h3 className="text-2xl font-niconne mb-2 text-dark-green">{name}</h3>
      <div className="mb-3">
        <span className="text-4xl font-newsreader text-dark-green">{price}</span>
        {price !== 'Custom' && <span className="text-dark-green/60 font-newsreader">/month</span>}
      </div>
      <p className="text-dark-green/80 font-newsreader">{description}</p>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg className="w-5 h-5 text-dark-green mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-dark-green/80 font-newsreader">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-lg font-franklin transition-colors ${
      isPopular 
        ? 'bg-dark-green text-white hover:bg-dark-green/90' 
        : 'bg-dark-green/5 text-dark-green hover:bg-dark-green/10'
    }`}>
      Get Started
    </button>
  </MotionDiv>
);

const pricingTiers = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 3 projects",
      "Basic design tools",
      "2GB storage",
      "Email support",
      "Community access"
    ]
  },
  {
    name: "Professional",
    price: "$49",
    description: "Ideal for professional designers and teams",
    features: [
      "Unlimited projects",
      "Advanced design tools",
      "20GB storage",
      "Priority email support",
      "Team collaboration",
      "Custom templates",
      "Analytics dashboard"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs",
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "24/7 phone support",
      "Custom integrations",
      "Dedicated success manager",
      "Advanced security",
      "Custom branding"
    ]
  }
];

const comparisons = [
  {
    feature: "Number of Projects",
    starter: "3",
    professional: "Unlimited",
    enterprise: "Unlimited"
  },
  {
    feature: "Storage Space",
    starter: "2GB",
    professional: "20GB",
    enterprise: "Unlimited"
  },
  {
    feature: "Team Members",
    starter: "1",
    professional: "Up to 10",
    enterprise: "Unlimited"
  },
  {
    feature: "Custom Templates",
    starter: "✕",
    professional: "✓",
    enterprise: "✓"
  },
  {
    feature: "API Access",
    starter: "✕",
    professional: "✓",
    enterprise: "✓"
  },
  {
    feature: "Analytics Dashboard",
    starter: "✕",
    professional: "✓",
    enterprise: "✓"
  },
  {
    feature: "Priority Support",
    starter: "✕",
    professional: "✓",
    enterprise: "✓"
  },
  {
    feature: "Custom Branding",
    starter: "✕",
    professional: "✕",
    enterprise: "✓"
  }
];

export default function Pricing() {
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
            Pricing
          </span>
          <h1 className="text-4xl md:text-6xl font-niconne mb-6 leading-tight text-dark-green">
            Choose the Perfect Plan for Your Needs
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-newsreader text-dark-green">
            Simple, transparent pricing that grows with you. Try any plan free for 30 days.
          </p>
        </MotionDiv>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={tier.name}
              {...tier}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
            Compare Features
          </h2>
          <p className="text-dark-green font-newsreader max-w-2xl mx-auto">
            Find the plan that best suits your needs with our detailed feature comparison.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-green/10">
                <th className="py-4 px-6 text-left font-niconne text-xl text-dark-green">Feature</th>
                <th className="py-4 px-6 text-center font-niconne text-xl text-dark-green">Starter</th>
                <th className="py-4 px-6 text-center font-niconne text-xl text-dark-green">Professional</th>
                <th className="py-4 px-6 text-center font-niconne text-xl text-dark-green">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr key={item.feature} className={index % 2 === 0 ? 'bg-dark-green/5' : ''}>
                  <td className="py-4 px-6 font-newsreader text-dark-green">{item.feature}</td>
                  <td className="py-4 px-6 text-center font-newsreader text-dark-green">{item.starter}</td>
                  <td className="py-4 px-6 text-center font-newsreader text-dark-green">{item.professional}</td>
                  <td className="py-4 px-6 text-center font-newsreader text-dark-green">{item.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-dark-green/5 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
              Need a Custom Solution?
            </h2>
            <p className="text-dark-green font-newsreader mb-8">
              Our enterprise plan is tailored to your organization's specific needs. Get in touch with our sales team to learn more.
            </p>
            <button className="px-8 py-3 bg-dark-green text-white rounded-full hover:bg-dark-green/90 transition-colors font-franklin">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-niconne mb-4 text-dark-green">
            Frequently Asked Questions
          </h2>
          <p className="text-dark-green font-newsreader">
            Find answers to common questions about our pricing and features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 newspaper-texture">
            <h3 className="font-niconne text-xl mb-3 text-dark-green">Can I change plans later?</h3>
            <p className="text-dark-green font-newsreader">
              Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 newspaper-texture">
            <h3 className="font-niconne text-xl mb-3 text-dark-green">What payment methods do you accept?</h3>
            <p className="text-dark-green font-newsreader">
              We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 newspaper-texture">
            <h3 className="font-niconne text-xl mb-3 text-dark-green">Do you offer refunds?</h3>
            <p className="text-dark-green font-newsreader">
              Yes, we offer a 30-day money-back guarantee for all plans. No questions asked.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 newspaper-texture">
            <h3 className="font-niconne text-xl mb-3 text-dark-green">Do you offer discounts?</h3>
            <p className="text-dark-green font-newsreader">
              We offer special discounts for educational institutions and non-profit organizations.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 