import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    const projects = [1, 2, 3, 4];

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
        const validIndex = Math.max(0, Math.min(index, projects.length - 1));
        setCurrentSlide(validIndex);

        gsap.to(carouselRef.current, {
            x: -validIndex * 100 + '%',
            duration: 0.8,
            ease: "power3.inOut"
        });
    };

    const nextSlide = () => {
        slideToProject(currentSlide + 1);
    };

    const prevSlide = () => {
        slideToProject(currentSlide - 1);
    };

    return (
        <section className="w-full" id="works" ref={projectsRef}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                    <span className="text-xs font-medium tracking-widest text-gray-500 uppercase fade-down">
                        / Ishlarimiz /
                    </span>
                </div>

                <div className="md:col-span-5">
                    <h2 className="text-4xl md:text-5xl font-semibold text-[#333] tracking-tight flex items-start fade-down">
                        Eng oxirgi loyihalarimiz
                        <span className="text-lg ml-1 mt-1 font-normal opacity-70">{projects.length}</span>
                    </h2>
                </div>

                <div className="md:col-span-5">
                    <p className="text-gray-500 text-lg leading-relaxed max-w-lg fade-down">
                        Bizning loyihalar portfoliysini o'rganing - bu yerda biz innovativ IT
                        yechimlar bilan bizneslarni raqamlashtirdik. Web saytlardan mobil
                        ilovalarigacha, CRM sistemalaridan e-commerce platformasigacha.
                        Biz har bir loyihani zamonaviy texnologiya, mukammal dizayn va
                        foydalanuvchi tajribasini prioritet qilib takomillashtiradik.
                    </p>
                </div>
            </div>

            <div className="relative mt-20 overflow-hidden">
                <div className="overflow-hidden rounded-[40px]">
                    <div
                        ref={carouselRef}
                        className="flex transition-none"
                        style={{ width: `${projects.length * 100}%` }}
                    >
                        {projects.map((i) => (
                            <div key={i} className="w-1/4" style={{ width: `${100 / projects.length}%` }}>
                                <section className="bg-[#e2e4eb] p-20 font-sans mx-2 rounded-[40px]" style={{ minHeight: '600px' }}>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                                        <div className="md:col-span-4 flex flex-col justify-between">
                                            <div className="space-y-1">
                                                <span className="text-gray-500 text-sm block mb-8">Yangi loyiha {i}</span>
                                                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-tight">PROJECT {i}</h2>
                                                <p className="text-gray-500 text-sm">(Interaktiv taxtada ishlash vositalari)</p>
                                            </div>

                                            <div className="bg-white rounded-2xl p-12 flex items-center justify-center shadow-sm">
                                                <img src="/assets/akbw.png" alt="Logo" className="w-10 h-10 rounded-full" />
                                            </div>
                                        </div>

                                        <div className="md:col-span-8 flex flex-col gap-12">

                                            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                                                <div className="max-w-xl space-y-6">
                                                    <p className="text-gray-800 text-lg font-medium leading-snug">
                                                        Biz loyihaga innovativ dizayn orqali sanoatni taravul qilishda yordam berdik.
                                                        Bu odamlarning haqiqiy ehtiyojlarini chuqur o'rganish natijasida imkon topdi.
                                                    </p>
                                                    <p className="text-gray-700 text-md leading-relaxed">
                                                        Toppon Smart Meetings-ning tadqiqoti va dizaynida faol ishtirok etdi - bu
                                                        loyihalarda ishlash tajribasini yangi darajaga ko'tarish uchun mo'ljallangan yechim.
                                                    </p>
                                                </div>

                                                <button className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-black transition-colors shrink-0">
                                                    <span className="text-sm font-medium">Jonli ko'ring</span>
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="bg-white rounded-3xl overflow-hidden shadow-sm p-4">
                                                <img
                                                    src="/assets/projects/akbw.png"
                                                    alt="Project"
                                                    className="w-full h-auto rounded-xl"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </section>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between mt-8 px-4">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className="p-3 rounded-full bg-[#f0f0f0] hover:bg-[#e0e0e0] disabled:opacity-50 disabled:cursor-not-allowed transition-all group"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                            <path d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="flex gap-2">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => slideToProject(index)}
                                className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-black' : 'w-2 bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === projects.length - 1}
                        className="p-3 rounded-full bg-[#f0f0f0] hover:bg-[#e0e0e0] disabled:opacity-50 disabled:cursor-not-allowed transition-all group"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="text-center mt-6 text-gray-600 text-sm">
                    {currentSlide + 1} / {projects.length}
                </div>
            </div>
        </section>
    )
}
