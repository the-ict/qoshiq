import React, { useState } from 'react'

export interface IServices {
    id: number;
    name: string;
    description: string;
}

export default function SingleServiceTab({ service }: { service: IServices }) {
    const [open, setIsOpen] = useState<boolean>(false);
    
    return (
        <div onClick={() => setIsOpen(!open)} className="grid transition-all grid-cols-3 items-start justify-between cursor-pointer border-b-2  py-10 text-gray-400 hover:text-black" key={service.id}>
            <div>{service.id}</div>
            <div>({open ? "-" : "+"})</div>
            <div className={`flex ${open && 'flex-col items-start justify-between gap-3'}`}>
                <span>{service.name}</span> <br />
                {open && (
                    <span>{service.description}</span>
                )}
            </div>
        </div>
    )
}
