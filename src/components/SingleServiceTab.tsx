import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react'

export interface IServices {
    id: number;
    name: string;
    description: string;
}

interface SingleServiceTabProps {
    service: IServices;
    index: number;
}

export default function SingleServiceTab({ service, index }: SingleServiceTabProps) {
    const [open, setIsOpen] = useState<boolean>(false);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const indicatorRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (open) {
            gsap.to(descriptionRef.current, {
                opacity: 1,
                height: "auto",
                marginTop: 24,
                duration: 0.7,
                ease: "expo.out"
            });
            gsap.to(indicatorRef.current, {
                rotation: 45,
                backgroundColor: "#1a1a1a",
                color: "#ffffff",
                duration: 0.5,
                ease: "power3.out"
            });
        } else {
            gsap.to(descriptionRef.current, {
                opacity: 0,
                height: 0,
                marginTop: 0,
                duration: 0.5,
                ease: "expo.inOut"
            });
            gsap.to(indicatorRef.current, {
                rotation: 0,
                backgroundColor: "transparent",
                color: "#9ca3af",
                duration: 0.5,
                ease: "power3.inOut"
            });
        }
    }, [open]);

    const handleMouseEnter = () => {

    };

    const handleMouseLeave = () => {
        gsap.to(bgRef.current, {
            opacity: 0,
            scale: 0.98,
            duration: 0.4,
            ease: "power2.inOut"
        });
    };

    return (
        <div
            ref={containerRef}
            onClick={() => setIsOpen(!open)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative grid grid-cols-12 items-center py-10 md:py-16 cursor-pointer border-b border-gray-100 transition-all duration-500"
        >
            {/* Hover Background Reveal */}
            <div
                ref={bgRef}
                className="absolute inset-0 bg-white shadow-xl rounded-2xl opacity-0 scale-[0.98] z-0 pointer-events-none transition-transform"
            />

            <div className="relative z-10 col-span-2 md:col-span-1 font-mono text-sm text-gray-400 pl-4">
                {index < 10 ? `0${index}` : index}
            </div>

            <div className="relative z-10 col-span-8 md:col-span-10 flex flex-col">
                <span className={`text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-700 ${open ? 'text-black' : 'text-gray-300 group-hover:text-black'}`}>
                    {service.name}
                </span>
                <div ref={descriptionRef} className="opacity-0 overflow-hidden h-0 pr-6 md:pr-20">
                    <p className="text-gray-600 text-lg md:text-2xl leading-relaxed font-medium">
                        {service.description}
                    </p>
                </div>
            </div>

            <div className="relative z-10 col-span-2 md:col-span-1 flex justify-end pr-4">
                <div
                    ref={indicatorRef}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-500 group-hover:border-black"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
