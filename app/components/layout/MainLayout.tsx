'use client';

import Link from 'next/link';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-grid-pattern">
      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 w-24 h-24 bg-dark-green/10 blur-3xl" />
      <div className="fixed bottom-0 left-0 w-24 h-24 bg-dark-green/10 blur-3xl" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-3xl md:text-4xl font-niconne text-dark-green px-3 py-2 hover:text-dark-green/80 transition-colors">Design Journal</Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-dark-green hover:text-dark-green/80 font-noticia">Home</Link>
              <Link href="/features" className="text-dark-green hover:text-dark-green/80 font-noticia">Features</Link>
              <Link href="/pricing" className="text-dark-green hover:text-dark-green/80 font-noticia">Pricing</Link>
              <Link href="/company" className="text-dark-green hover:text-dark-green/80 font-noticia">Company</Link>
              <Link href="/resources" className="text-dark-green hover:text-dark-green/80 font-noticia">Resources</Link>
              <Link 
                href="/signup" 
                className="px-4 py-2 bg-dark-green text-white rounded-full hover:bg-dark-green/90 transition-colors font-franklin"
              >
                Sign up
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-dark-green hover:text-dark-green/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[#00160E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top section with CTA */}
          <div className="mb-20 text-center">
            <h2 className="font-niconne text-4xl md:text-5xl mb-6">Let's get started on something great</h2>
            <button className="px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-[#00160E] transition-colors font-newsreader text-lg">
              Start your 7-day free trial
            </button>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            {/* Product Column */}
            <div className="space-y-6">
              <h3 className="font-niconne text-xl">Product</h3>
              <ul className="space-y-4">
                <li><Link href="/overview" className="text-white/80 hover:text-white font-newsreader">Overview</Link></li>
                <li><Link href="/features" className="text-white/80 hover:text-white font-newsreader">Features</Link></li>
                <li><Link href="/solutions" className="text-white/80 hover:text-white font-newsreader">Solutions</Link></li>
                <li><Link href="/tutorials" className="text-white/80 hover:text-white font-newsreader">Tutorials</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-6">
              <h3 className="font-niconne text-xl">Company</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-white/80 hover:text-white font-newsreader">About us</Link></li>
                <li><Link href="/careers" className="text-white/80 hover:text-white font-newsreader">Careers</Link></li>
                <li><Link href="/press" className="text-white/80 hover:text-white font-newsreader">Press</Link></li>
                <li><Link href="/contact" className="text-white/80 hover:text-white font-newsreader">Contact</Link></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-6">
              <h3 className="font-niconne text-xl">Resources</h3>
              <ul className="space-y-4">
                <li><Link href="/blog" className="text-white/80 hover:text-white font-newsreader">Blog</Link></li>
                <li><Link href="/newsletter" className="text-white/80 hover:text-white font-newsreader">Newsletter</Link></li>
                <li><Link href="/help" className="text-white/80 hover:text-white font-newsreader">Help centre</Link></li>
                <li><Link href="/support" className="text-white/80 hover:text-white font-newsreader">Support</Link></li>
              </ul>
            </div>

            {/* Social & Legal Column */}
            <div className="space-y-6">
              <h3 className="font-niconne text-xl">Connect</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">Twitter</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">LinkedIn</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">GitHub</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white font-newsreader">Dribbble</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom section with logo and copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <span className="text-2xl font-niconne">Design Journal</span>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <div className="flex items-center space-x-6 font-newsreader text-white/60">
              <Link href="#" className="hover:text-white">Terms</Link>
              <Link href="#" className="hover:text-white">Privacy</Link>
              <Link href="#" className="hover:text-white">Cookies</Link>
              <span>© 2024 Design Journal</span>
            </div>
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0">
          <div className="relative w-20 h-20">
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-white/20"></div>
            <div className="absolute top-0 left-0 w-10 h-10 bg-white/20"></div>
          </div>
        </div>
      </footer>
    </div>
  );
} 