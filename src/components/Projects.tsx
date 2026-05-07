import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const projectsData = [
    {
        id: 1,
        title: "AKBW",
        subtitle: "Interaktiv taxtada ishlash vositalari",
        description: "Biz loyihaga innovativ dizayn orqali sanoatni taravul qilishda yordam berdik. Bu odamlarning haqiqiy ehtiyojlarini chuqur o'rganish natijasida imkon topdi.",
        details: "Toppon Smart Meetings-ning tadqiqoti va dizaynida faol ishtirok etdi - bu loyihalarda ishlash tajribasini yangi darajaga ko'tarish uchun mo'ljallangan yechim.",
        image: "/assets/projects/akbw.png",
        logo: "/assets/akbw.png",
        color: "#e2e4eb"
    },
    {
        id: 2,
        title: "FINTECH SOLUTIONS",
        subtitle: "Raqamli banking platformasi",
        description: "Murakkab moliyaviy jarayonlarni soddalashtiruvchi va foydalanuvchilar uchun qulay interfeys yaratdik.",
        details: "Xavfsizlik va tezkorlikni birinchi o'ringa qo'ygan holda, bank tizimlari uchun zamonaviy frontend va backend yechimlarini taqdim etdik.",
        image: "/assets/projects/akbw.png",
        logo: "/assets/akbw.png",
        color: "#f0f2f5"
    },
    {
        id: 3,
        title: "ECOMMERCE HUB",
        subtitle: "Onlayn savdo ekotizimi",
        description: "Biznesingizni kengaytirish uchun mo'ljallangan, masshtablanuvchi va optimallashtirilgan do'kon tizimi.",
        details: "To'lov tizimlari va logistika bilan integratsiya qilingan, foydalanuvchi konversiyasini oshiruvchi platforma ishlab chiqdik.",
        image: "/assets/projects/akbw.png",
        logo: "/assets/akbw.png",
        color: "#e8e6e1"
    },
    {
        id: 4,
        title: "LOGISTIC PRO",
        subtitle: "Yuk tashishni boshqarish tizimi",
        description: "Logistika zanjirini to'liq nazorat qilish va avtomatlashtirish imkonini beruvchi CRM platformasi.",
        details: "Real vaqt rejimida kuzatish, marshrutlarni optimallashtirish va hisobotlarni avtomatik shakllantirish funksiyalarini joriy qildik.",
        image: "/assets/projects/akbw.png",
        logo: "/assets/akbw.png",
        color: "#dce0e5"
    }
];

export default function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(projectsRef.current, {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: projectsRef.current,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    }, []);

    const slideToProject = (index: number) => {
        const validIndex = Math.max(0, Math.min(index, projectsData.length - 1));
        setCurrentSlide(validIndex);

        if (carouselRef.current) {
            gsap.to(carouselRef.current, {
                xPercent: -validIndex * (100 / projectsData.length),
                duration: 0.8,
                ease: "expo.out"
            });
        }
    };

    const nextSlide = () => {
        slideToProject(currentSlide + 1);
    };

    const prevSlide = () => {
        slideToProject(currentSlide - 1);
    };

    return (
        <section className="w-full py-20 px-4 md:px-10 overflow-hidden" id="works" ref={projectsRef}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
                <div className="md:col-span-2">
                    <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
                        / Ishlarimiz /
                    </span>
                </div>

                <div className="md:col-span-5">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight flex items-start">
                        Eng oxirgi loyihalarimiz
                        <span className="text-xl ml-2 mt-1 font-medium opacity-40">{projectsData.length}</span>
                    </h2>
                </div>

                <div className="md:col-span-5">
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg">
                        Bizning loyihalar portfoliysini o'rganing - bu yerda biz innovativ IT
                        yechimlar bilan bizneslarni raqamlashtirdik. Har bir loyiha biz uchun yangi imkoniyat.
                    </p>
                </div>
            </div>

            <div className="relative group">
                <div className="overflow-visible">
                    <div
                        ref={carouselRef}
                        className="flex transition-none"
                        style={{ width: `${projectsData.length * 100}%` }}
                    >
                        {projectsData.map((project, idx) => (
                            <div
                                key={project.id}
                                className="w-full px-2 md:px-4"
                                style={{ width: `${100 / projectsData.length}%` }}
                            >
                                <div
                                    className="rounded-[3rem] p-8 md:p-20 flex flex-col transition-all duration-700"
                                    style={{
                                        backgroundColor: project.color,
                                        minHeight: '650px',
                                        opacity: currentSlide === idx ? 1 : 0.4,
                                        scale: currentSlide === idx ? 1 : 0.95,
                                        transform: currentSlide === idx ? 'translateY(0)' : 'translateY(20px)'
                                    }}
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full">
                                        <div className="lg:col-span-4 flex flex-col justify-between">
                                            <div className="space-y-6">
                                                <span className="text-gray-500 text-sm font-semibold uppercase tracking-widest block">Loyiha {idx + 1}</span>
                                                <div>
                                                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter mb-2">{project.title}</h3>
                                                    <p className="text-gray-600 text-base md:text-lg font-medium">({project.subtitle})</p>
                                                </div>
                                            </div>

                                            <div className="mt-12 lg:mt-0">
                                                <div className="inline-flex bg-white/50 backdrop-blur-md rounded-2xl p-6 items-center justify-center shadow-sm border border-white/20 hover:scale-105 transition-transform cursor-pointer">
                                                    <img src={project.logo} alt={project.title} className="w-12 h-12 rounded-full object-cover" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-8 flex flex-col gap-10">
                                            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                                                <div className="max-w-xl space-y-6">
                                                    <p className="text-gray-900 text-xl md:text-2xl font-semibold leading-tight">
                                                        {project.description}
                                                    </p>
                                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed opacity-80">
                                                        {project.details}
                                                    </p>
                                                </div>

                                                <button className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-black hover:scale-105 transition-all shadow-xl shrink-0">
                                                    <span className="text-sm font-bold uppercase tracking-wider">Loyihani ko'rish</span>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="relative mt-auto">
                                                <div className="bg-white/40 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-2xl p-2 md:p-4 group/img">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-auto rounded-[1.5rem] transform transition-transform duration-700 group-hover/img:scale-[1.02]"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between mt-12 px-4 max-w-4xl mx-auto">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-lg border border-gray-100 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all group z-10"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                            <path d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="flex items-center gap-4">
                        {projectsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => slideToProject(index)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSlide
                                    ? 'w-12 bg-[#1a1a1a]'
                                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === projectsData.length - 1}
                        className="w-14 h-14 rounded-full flex items-center justify-center bg-[#1a1a1a] text-white shadow-xl hover:bg-black disabled:opacity-30 disabled:cursor-not-allowed transition-all group z-10"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="text-center mt-8 font-mono text-sm tracking-widest text-gray-400">
                    <span className="text-[#1a1a1a] font-bold">0{currentSlide + 1}</span> / 0{projectsData.length}
                </div>
            </div>
        </section>
    );
}
