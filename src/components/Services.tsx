import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SingleServiceTab, { IServices } from "./SingleServiceTab"

const ServicesMockData: IServices[] = [
    {
        id: 1,
        name: "Landing Page",
        description: "Landing Page - bu bitta sahifadan iborat bo'lgan website bo'lib u asosan instagramda target yoqish uchun va malumotlarni analiz qilish uchun yoki kompaniya haqida qisqa ma'lumot berishda foydalaniladi. Tez yuklanadi va mobile optimized."
    },
    {
        id: 2,
        name: "Web Application",
        description: "Kompleks web ilova ishlab chiqarish - admin panel, CRM, ERP sistemalar. React, Next.js, Node.js kabi zamonaviy texnologiyalar bilan ishlaydi. Masshtablanuvchi va xavfsiz yechimlar."
    },
    {
        id: 3,
        name: "Mobile Application",
        description: "iOS va Android uchun native yoki cross-platform mobil ilovalar. React Native, Flutter bilan ishlaymiz. Offline rejim, push notification va boshqa kuchli xususiyatlar bilan ta'minlangan."
    },
    {
        id: 4,
        name: "UI/UX Design",
        description: "Zamonaviy va foydalanuvchi-markaziy dizayn. Figma, Adobe XD da prototyplar yaratamiz. A/B testing va user research orqali eng yaxshi natija olamiz."
    },
    {
        id: 5,
        name: "E-commerce Solution",
        description: "To'liq ishlab chiqilgan online do'kon - mahsulot katalogi, payment gateway, inventory management. Shopify, WooCommerce yoki custom yechim."
    },
    {
        id: 6,
        name: "API Development",
        description: "RESTful va GraphQL API yaratish. Istalgan dastur bilan integratsiya qilish mumkin. Tez, xavfsiz va to'g'ri dokumentatsiya bilan ta'minlangan."
    },
    {
        id: 7,
        name: "Cloud Solutions",
        description: "AWS, Google Cloud, Azure platformalarida hostingi qilish va saqlash. Automatic backup, scaling va high availability ta'minlanadi."
    },
    {
        id: 8,
        name: "SEO Optimization",
        description: "Google qidiruv natijalarida ustun turishni ta'minlash. Teksti optimizatsiya, backlink strategiyasi va technical SEO."
    },
]

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Advanced Header Reveal
        const headerElements = headerRef.current?.children;
        if (headerElements) {
            gsap.from(headerElements, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 85%",
                }
            });
        }

        // Staggered Items Reveal
        const items = gsap.utils.toArray(".service-item-reveal");
        gsap.from(items, {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });
    }, { scope: containerRef });

    return (
        <section className="py-24 md:py-10 px-4 md:px-10 overflow-hidden" ref={containerRef} id="services">
            <div className="flex flex-col lg:flex-row items-start mb-20 md:mb-32 gap-8 lg:gap-16" ref={headerRef}>
                <div>
                    <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block fade-down">
                    / Xizmatlar /
                    </span>
                    <h1 className="text-5xl md:text-6xl font-medium leading-tight fade-down">
                        Bizning Xizmatlarimiz <br />
                        <p className="mt-12 text-xl md:text-2xl text-gray-500 max-w-xl font-medium leading-relaxed">
                        Biz sizning biznesingiz uchun eng zamonaviy va innovatsion IT yechimlarni taqdim etamiz.
                    </p>
                    </h1>
                </div>
            </div>
            
            <div className="border-t border-gray-100">
                {
                    ServicesMockData.map((service, index) => (
                        <div key={service.id} className="service-item-reveal">
                            <SingleServiceTab service={service} index={index + 1} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
