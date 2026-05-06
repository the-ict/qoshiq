import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen text-[#1A1A1A] font-sans py-8">
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <h1 className="text-7xl md:text-9xl font-semibold leading-[0.9] tracking-tight mb-8">
            Kam bu ko'p *
          </h1>
        </div>

        <div className="lg:col-span-5 pt-4">
          <p className="text-[16px] font-bold uppercase tracking-widest leading-relaxed mb-8 w-full">
            <span className="text-gray-400">toppon</span> - bu biznesingiz uchun it yechimlarini taklif etivchi kompaniya  biz bilan startup qiling, tizim quring, avtomatlashtiring, eng muhimi o'sing!
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-bold border-b hover:border-black pb-1 hover:gap-4 transition-all">
            → Ishlarimizni ko'ring
          </a>
        </div>
      </main>

      <div className="mt-12">
        <img src="/assets/hero.png" alt="" className='rounded-[10px]' />
      </div>

      <section className="min-h-[400px] grid grid-cols-2 w-full py-16 flex-col md:flex-row justify-between items-start font-sans text-[#1a1a1a]">
        <div className="flex items-start gap-12 grid-cols-5">
          <span className="text-xs font-medium tracking-widest text-gray-500 uppercase">
            / Studio /
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight max-w-md">
            Bepul maslahat oling!
          </h1>
        </div>

        <div className="flex flex-col gap-8 grid-cols-1">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Biz bepulga konsultatsiyani taminlaymiz, avtomatlashtirish, startup, mobile ilova, web dastur, erp va crm haqida malumot oling
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-[#ebebeb] px-6 py-4 rounded-full text-sm font-medium text-gray-700 max-w-[280px]">
              Biz savollaringizga qisqa telefonda javob beramiz
            </div>

            <button className="bg-[#828282] hover:bg-[#6e6e6e] transition-colors text-white px-8 py-4 rounded-full flex items-center gap-3 group">
              <span className="text-lg">Keling gaplashamiz</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;