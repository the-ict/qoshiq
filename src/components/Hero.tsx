import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen text-[#1A1A1A] font-sans px-6 md:px-12 py-8">
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          <h1 className="text-7xl md:text-9xl font-semibold leading-[0.9] tracking-tight mb-8">
            We design first <br />
            <span className="flex items-center gap-4">
              <span className="inline-block">
                <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                  <path d="M2 38C2 38 15 2 40 2C65 2 78 38 78 38" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M70 25L78 38L65 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              class SaaS <span className="bg-[#D3C9C2] rounded-full p-2">✳</span>
            </span>
          </h1>
        </div>

        <div className="lg:col-span-4 pt-4">
          <p className="text-xs font-bold uppercase tracking-widest leading-relaxed mb-8 max-w-[280px]">
            <span className="text-gray-400">UWWA</span> IS A DESIGN STUDIO FOCUSING SOLELY ON SAAS PRODUCTS. WE HELP BUSINESS ACHIEVES GOALS THROUGH DESIGN.
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-bold border-b border-black pb-1 hover:gap-4 transition-all">
            → Explore works
          </a>
        </div>
      </main>

      <div className="mt-12">
        <img src="/assets/hero.png" alt="" className='rounded-[10px]' />
      </div>
    </div>
  );
};

export default HeroSection;