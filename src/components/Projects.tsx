import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';

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
        // first last slide should disappear, so we are going to make this animation first.
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
        <section className="w-full py-20 px-4 md:px-10 overflow-hidden" id="works">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
                <div className="md:col-span-2">
                    <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase works-line">
                        / Ishlarimiz /
                    </span>
                </div>

                <div className="md:col-span-5">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight flex items-start works-headline">
                        Eng oxirgi loyihalarimiz
                        <span className="text-xl ml-2 mt-1 font-medium opacity-40">{projectsData.length}</span>
                    </h2>
                </div>

                <div className="md:col-span-5">
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg works-subtitle">
                        Bizning loyihalar portfoliysini o'rganing - bu yerda biz innovativ IT
                        yechimlar bilan bizneslarni raqamlashtirdik. Har bir loyiha biz uchun yangi imkoniyat.
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between gap-10 max-lg:flex-col">
                <div className='max-lg:w-full w-[60%] flex items-center gap-10 p-10 rounded bg-white/80'>
                    <img src="/assets/projects/akbw.png" alt="" className='h-[400px] w-[60%] project-img p-5 rounded bg-gray-100' />
                    <div className='flex flex-col gap-5 items-start'>
                        <h3 className='project-name py-2 px-5 bg-yellow-900 rounded text-white'>{projectsData[currentSlide].title}</h3>
                        <p className='project-description'>{projectsData[currentSlide].description}</p>

                        <Link to={projectsData[currentSlide].link} className='cursor-pointer py-3 px-10 project-live-button bg-white rounded-full text-black border-2 text-xs font-bold hover:bg-black hover:text-white hover:border-white hover:border-2 transition-all'>Jonli ko'ring</Link>
                    </div>
                </div>
                <div className='w-[40%] max-lg:w-full max-lg:flex max-lg:items-center max-lg:justify-center grid grid-cols-4 gap-5'>
                    {
                        projectsData.map(i => (
                            <div className='p-5 rounded-lg cursor-pointer' key={i.id} onClick={() => onSlideClick(i.id)}>
                                <img src={i.image} alt="Project image" className='h-[80px]' />
                                <h3 className='mt-3 text-xs'>{i.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
