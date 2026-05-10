import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const projectsData = [
    {
        id: 0,
        title: "AKBW",
        subtitle: "Interaktiv taxtada ishlash vositalari",
        description: "Biz loyihaga innovativ dizayn orqali sanoatni taravul qilishda yordam berdik. Bu odamlarning haqiqiy ehtiyojlarini chuqur o'rganish natijasida imkon topdi.",
        details: "Toppon Smart Meetings-ning tadqiqoti va dizaynida faol ishtirok etdi - bu loyihalarda ishlash tajribasini yangi darajaga ko'tarish uchun mo'ljallangan yechim.",
        image: "/assets/projects/akbw.png",
        logo: "/assets/akbw.png",
        color: "#e2e4eb",
        link: "akbw.uz"
    },
    {
        id: 1,
        title: "FINTECH SOLUTIONS",
        subtitle: "Raqamli banking platformasi",
        description: "Murakkab moliyaviy jarayonlarni soddalashtiruvchi va foydalanuvchilar uchun qulay interfeys yaratdik.",
        details: "Xavfsizlik va tezkorlikni birinchi o'ringa qo'ygan holda, bank tizimlari uchun zamonaviy frontend va backend yechimlarini taqdim etdik.",
        image: "/assets/projects/akbw.png",
        logo: "/assets/akbw.png",
        color: "#f0f2f5",
        link: "akbw.uz"
    },
    {
        id: 2,
        title: "ECOMMERCE HUB",
        subtitle: "Onlayn savdo ekotizimi",
        description: "Biznesingizni kengaytirish uchun mo'ljallangan, masshtablanuvchi va optimallashtirilgan do'kon tizimi.",
        details: "To'lov tizimlari va logistika bilan integratsiya qilingan, foydalanuvchi konversiyasini oshiruvchi platforma ishlab chiqdik.",
        image: "/assets/projects/akbw.png",
        logo: "/assets/akbw.png",
        color: "#e8e6e1",
        link: "akbw.uz"
    },
];

export default function Projects() {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    useGSAP(() => {
        const viewAnimTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#works",
                start: "top, bottom",
                end: "top, center",
            }
        });

        viewAnimTimeline.from(".works-line", {
            yPercent: 100,
            opacity: 0,
            ease: "circ.inOut"
        })

        viewAnimTimeline.from(".works-headline", {
            yPercent: 100,
            opacity: 0,
            ease: "circ.inOut"
        })

        viewAnimTimeline.from(".works-subtitle", {
            yPercent: 100,
            opacity: 0,
            ease: "circ.inOut"
        })
    }, [])


    useEffect(() => {
        if (projectsData[currentSlide].title.length === 0) return;
        gsap.to(".project-img", {
            scale: 1,
            opacity: 1,
            ease: "back.inOut",
        });

        gsap.to(".project-name", {
            opacity: 1,
            x: 0,
            ease: "back.in",
        });

        gsap.to(".project-description", {
            opacity: 1,
            x: 0,
            ease: "back.in",
        });

        gsap.to(".project-live-button", {
            opacity: 1,
            x: 0,
            ease: "back.in",
        });
    }, [currentSlide])

    const onSlideClick = (slideNumber: number) => {
        if (currentSlide === slideNumber) return;
        const sliderTimeline = gsap.timeline();

        sliderTimeline.to(".project-img", {
            scale: 0,
            opacity: 0,
            ease: "back.inOut",
            duration: 0.1
        });

        sliderTimeline.to(".project-name", {
            opacity: 0,
            x: -20,
            ease: "back.in",
            duration: 0.1,
        });

        sliderTimeline.to(".project-description", {
            opacity: 0,
            x: -20,
            ease: "back.in",
            duration: 0.1
        });

        sliderTimeline.to(".project-live-button", {
            opacity: 0,
            x: -20,
            ease: "back.in",
            duration: 0.1,
            onComplete: () => {
                setCurrentSlide(slideNumber);
            }
        });
    };

    return (
        <section className="w-full py-24 px-4 md:px-10 overflow-hidden" id="works">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-20">
                <div className="md:col-span-2">
                    <span className="text-xs font-bold tracking-[0.4em] text-gray-400 uppercase works-line">
                        / Ishlarimiz /
                    </span>
                </div>

                <div className="md:col-span-5">
                    <h2 className="text-5xl md:text-6xl max-lg:text-xs font-bold text-[#1a1a1a] tracking-tight flex items-start works-headline leading-none">
                        Eng oxirgi loyihalarimiz
                        <span className="text-xl ml-3 mt-2 font-medium opacity-20">{projectsData.length}</span>
                    </h2>
                </div>

                <div className="md:col-span-5">
                    <p className="text-gray-400 text-xs md:text-xl leading-relaxed max-lg:text-[10px] max-w-lg works-subtitle font-medium">
                        Bizning loyihalar portfoliysini o'rganing - bu yerda biz innovativ IT
                        yechimlar bilan bizneslarni raqamlashtirdik. Har bir loyiha biz uchun yangi imkoniyat.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12">
                <div className='w-full lg:w-[70%] flex flex-col md:flex-row items-center gap-12 p-10 rounded-[40px] bg-white/30 border border-black/5 shadow-2xl shadow-black/[0.03]'>
                    <div
                        className='w-full md:w-1/2 aspect-square md:aspect-auto md:h-[450px] rounded-[30px] flex items-center justify-center p-12 transition-colors duration-700'
                        style={{ backgroundColor: projectsData[currentSlide].color }}
                    >
                        <img
                            src={projectsData[currentSlide].image}
                            alt={projectsData[currentSlide].title}
                            className='w-full h-full object-contain project-img drop-shadow-2xl scale-90'
                        />
                    </div>

                    <div className='w-full md:w-1/2 flex flex-col gap-8 items-start'>
                        <div className='flex flex-col gap-3'>
                            <span className='project-subtitle text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase'>
                                {projectsData[currentSlide].subtitle}
                            </span>
                            <h3 className='project-name text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight'>
                                {projectsData[currentSlide].title}
                            </h3>
                        </div>

                        <p className='project-description text-gray-500 text-lg leading-relaxed font-medium'>
                            {projectsData[currentSlide].description}
                        </p>

                        <Link
                            to={projectsData[currentSlide].link}
                            className='cursor-pointer py-5 px-12 project-live-button bg-[#1a1a1a] rounded-full text-white text-sm font-bold hover:bg-black transition-all shadow-xl hover:shadow-black/20 flex items-center gap-3 group'
                        >
                            Jonli ko'ring
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className='w-full lg:w-[30%] flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0'>
                    {
                        projectsData.map((project, index) => (
                            <div
                                key={project.id}
                                className={`group flex-shrink-0 w-[240px] lg:w-full p-5 rounded-3xl cursor-pointer transition-all duration-500 border-2 ${currentSlide === index
                                    ? 'border-[#1a1a1a] bg-white shadow-xl shadow-black/5'
                                    : 'border-transparent bg-white/50 hover:bg-white/80'
                                    }`}
                                onClick={() => onSlideClick(index)}
                            >
                                <div className='flex items-center gap-5'>
                                    <div
                                        className='w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center p-3 transition-colors duration-500'
                                        style={{ backgroundColor: project.color }}
                                    >
                                        <img src={project.image} alt="" className='w-full h-full object-contain' />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <h4 className={`text-sm font-bold transition-colors ${currentSlide === index ? 'text-[#1a1a1a]' : 'text-gray-400 group-hover:text-gray-600'
                                            }`}>
                                            {project.title}
                                        </h4>
                                        <span className='text-[10px] text-gray-400 font-bold uppercase tracking-wider'>
                                            Project / 0{index + 1}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
