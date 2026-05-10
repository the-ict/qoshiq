import { useRef, useState } from "react";
import { motion } from "framer-motion";

type ActiveTabs = "home" | "services" | "process" | "works";

const activeTabs = {
    "home": "Bosh sahifa",
    "services": "Xizmatlar",
    "process": "Jarayon",
    "works": "Loyihalar",
};

interface IPosition {
    width: number;
    left: number;
    opacity: number;
}

export default function Menu() {
    const [isActive, setIsActive] = useState<ActiveTabs | null>(null);
    const [position, setPosition] = useState<IPosition>({
        width: 0,
        left: 0,
        opacity: 0,
    });

    return (
        <div className="flex items-center my-3 fixed bottom-6 md:bottom-10 h-[60px] w-screen left-0 right-0 justify-center text-white z-[100]">
            <div className="bg-[#1a1818]/80 backdrop-blur-md border border-white/10 p-1.5 md:p-2 rounded-full max-w-[95vw] md:max-w-none overflow-x-auto no-scrollbar">
                <ul className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-semibold relative">
                    {
                        Object.keys(activeTabs).map((tab, index) => (
                            <TabItem
                                key={index}
                                tab={tab as ActiveTabs}
                                setPosition={setPosition}
                                setIsActive={setIsActive}
                                isActive={isActive === tab}
                            />
                        ))
                    }
                    <Cursor position={position} />
                </ul>
            </div>
        </div>
    )
};

interface ITabItemProps {
    tab: ActiveTabs;
    setPosition: (position: IPosition) => void;
    setIsActive: (tab: ActiveTabs) => void;
    isActive: boolean;
}

const TabItem = ({ tab, setPosition, setIsActive, isActive }: ITabItemProps) => {
    const ref = useRef<HTMLLIElement | null>(null);

    const handleTabChange = (tab: ActiveTabs) => {
        setIsActive(tab);
        
        if (ref.current) {
            const { width } = ref.current.getBoundingClientRect();
            setPosition({
                width,
                opacity: 1,
                left: ref.current.offsetLeft,
            });
        }

        const element = document.getElementById(tab);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.li
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onMouseEnter={() => {
                if (!ref.current) return;
                const { width } = ref.current.getBoundingClientRect();
                setPosition({
                    width,
                    opacity: 1,
                    left: ref.current.offsetLeft,
                })
            }}
            onMouseLeave={() => {
                setPosition({
                    width: 0,
                    left: 0,
                    opacity: 0,
                })
            }}
            className={`cursor-pointer z-10 px-3 md:px-6 py-1.5 md:py-2 rounded-full relative transition-colors duration-300 whitespace-nowrap ${isActive ? "text-white" : "text-white/70 hover:text-white"
                }`}
            onClick={() => handleTabChange(tab)}
        >
            {activeTabs[tab]}
        </motion.li>
    )
};

const Cursor = ({ position }: { position: IPosition }) => {
    return (
        <motion.li
            className="absolute z-0 bg-white/10 rounded-full h-full"
            animate={{
                width: position.width,
                left: position.left,
                opacity: position.opacity
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 30
            }}
        />
    )
};