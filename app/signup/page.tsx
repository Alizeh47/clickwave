'use client';

import { MotionDiv } from '@/components/MotionWrapper';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import Image from 'next/image';

export default function SignUp() {
  return (
    <MainLayout>
      <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl newspaper-texture">
            <div className="grid md:grid-cols-2">
              {/* Form Section */}
              <div className="p-8 md:p-12">
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl font-niconne mb-2 text-dark-green">Create your account</h2>
                  <p className="text-dark-green/80 font-newsreader mb-8">
                    Start your 7-day free trial. No credit card required.
                  </p>

                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-dark-green font-franklin mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-dark-green/20 focus:outline-none focus:border-dark-green font-newsreader"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-dark-green font-franklin mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-dark-green/20 focus:outline-none focus:border-dark-green font-newsreader"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-dark-green font-franklin mb-2">Password</label>
                      <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-3 rounded-lg border border-dark-green/20 focus:outline-none focus:border-dark-green font-newsreader"
                        placeholder="Create a password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-8 py-3 bg-dark-green text-white rounded-lg hover:bg-dark-green/90 transition-colors font-franklin"
                    >
                      Create Account
                    </button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-dark-green/80 font-newsreader">
                      Already have an account?{' '}
                      <Link href="/login" className="text-dark-green hover:text-dark-green/80 font-franklin">
                        Log in
                      </Link>
                    </p>
                  </div>
                </MotionDiv>
              </div>

              {/* Image Section */}
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-dark-green/10">
                  <Image
                    src="/images/article2.jpg"
                    alt="Sign Up"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-dark-green/40 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="text-white text-center">
                      <h3 className="text-3xl font-niconne mb-4">Join our creative community</h3>
                      <p className="font-newsreader">
                        Get access to powerful design tools and connect with designers worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 