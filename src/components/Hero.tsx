import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HeroSection: React.FC = () => {

  const timeline = gsap.timeline();

  useGSAP(() => {
    timeline.fromTo(".hero-title", {
      x: -40,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
    });

    timeline.fromTo(".hero-title-p", {
      y: -10,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
    })

    timeline.fromTo(".see-work-button", {
      x: -40,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
    });

    timeline.fromTo(".hero-img", {
      opacity: 0,
      scale: 0.9,
    }, {
      opacity: 1,
      scale: 1,
    });
  }, [])
  return (
    <div id="home" className="min-h-screen text-[#1A1A1A] font-sans py-8 max-md:text-[25px]">
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <h1 className="text-7xl md:text-9xl font-semibold leading-[0.9] tracking-tight mb-8 hero-title">
            Kam bu ko'p *
          </h1>
        </div>

        <div className="lg:col-span-5 pt-4">
          <p className="text-[16px] font-bold uppercase tracking-widest leading-relaxed mb-8 w-full hero-title-p">
            <span className="text-gray-400">toppon</span> - bu biznesingiz uchun it yechimlarini taklif etivchi kompaniya  biz bilan startup qiling, tizim quring, avtomatlashtiring, eng muhimi o'sing!
          </p>
          <a href="#works" className="see-work-button inline-flex items-center gap-2 text-sm font-bold border-b hover:border-black pb-1 hover:gap-4 transition-all">
            → Ishlarimizni ko'ring
          </a>
        </div>
      </main>

      <div className="mt-12">
        <img src="/assets/hero.png" alt="" className='rounded-[10px] hero-img w-full' />
      </div>

      <section className="min-h-[400px] grid grid-cols-2 w-full mt-12 flex-col md:flex-row justify-between items-start font-sans text-[#1a1a1a] max-md:grid-cols-1">
        <div className="flex items-start gap-12 grid-cols-5">
          <span className="text-xs font-medium tracking-widest text-gray-500 uppercase fade-down">
            / Studio /
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight max-w-md fade-down">
            Bepul maslahat oling!
          </h1>
        </div>

        <div className="flex flex-col gap-8 grid-cols-1">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed fade-down">
            Biz bepulga konsultatsiyani taminlaymiz, avtomatlashtirish, startup, mobile ilova, web dastur, erp va crm haqida malumot oling
          </p>

          <div className="flex flex-wrap items-center gap-4 max-md:w-full">
            <div className="bg-[#ebebeb] max-md:max-w-full px-6 py-4 rounded-full text-sm font-medium text-gray-700 max-w-[280px] fade-down">
              Biz savollaringizga qisqa telefonda javob beramiz
            </div>

            <button className="bg-[#828282] max-md:w-full hover:bg-[#6e6e6e] transition-colors text-white px-8 py-4 rounded-full flex items-center gap-3 group fade-down">
              <a href='#contact' className="text-lg">Keling gaplashamiz</a >
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