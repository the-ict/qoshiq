import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react'

export interface IServices {
    id: number;
    name: string;
    description: string;
}


export default function SingleServiceTab({ service }: { service: IServices }) {
    const [open, setIsOpen] = useState<boolean>(false);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const indicatorRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (open) {
            gsap.to(descriptionRef.current, {
                opacity: 1,
                height: "auto",
                duration: 0.4,
                ease: "power2.out"
            });
            gsap.to(indicatorRef.current, {
                rotation: 45,
                duration: 0.4,
                ease: "power2.out"
            });
        } else {
            gsap.to(descriptionRef.current, {
                opacity: 0,
                height: 0,
                duration: 0.4,
                ease: "power2.in"
            });
            gsap.to(indicatorRef.current, {
                rotation: 0,
                duration: 0.4,
                ease: "power2.in"
            });
        }
    }, [open])
    return (
        <div onClick={() => setIsOpen(!open)} className="grid transition-all grid-cols-3 items-start justify-between cursor-pointer border-b-2  py-10 text-gray-400 hover:text-black" key={service.id}>
            <div>{service.id}</div>
            <div>({open ? "-" : "+"})</div>
            <div className={`flex ${open && 'flex-col items-start justify-between gap-3'}`}>
                <span>{service.name}</span>
                <div ref={descriptionRef} className="opacity-0 overflow-hidden" style={{ height: 0 }}>
                    <span>{service.description}</span>
                </div>
            </div>
        </div>
    )
}
