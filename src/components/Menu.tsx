import { useGSAP } from "@gsap/react";
import { useState } from "react";
import gsap from "gsap";

type ActiveTabs = "home" | "services" | "process" | "projects";

const activeTabs = {
    "home": "Bosh sahifa",
    "services": "Xizmatlar",
    "process": "Jarayon",
    "projects": "Loyihalar",
};

export default function Menu() {
    const [isActive, setIsActive] = useState<ActiveTabs>("home");
    const [position, setPosition] = useState({
        positionLeft: 0,
        width: 0,
    })

    const getTabClass = (tab: ActiveTabs) => {
        const isTabActive = isActive === tab;
        return `py-3 px-2 rounded-[35px] flex items-center justify-between gap-1 cursor-pointer ${isTabActive ? "bg-black text-white" : "text-black"
            }`;
    };

    return (
        <div className="flex items-center my-3 fixed bottom-0 h-[80px] w-screen left-0 right-0 justify-center text-white z-[100]">
            <div className="max-w-[50%] max-md:max-w-full">
                <ul className="w-full py-3 px-2 transition-all rounded-[35px] bg-gray-200 cursor-pointer flex items-center gap-3 text-xs font-bold relative">
                    <Cursor position={position} />
                    {
                        Object.keys(activeTabs).map((tab, index) => (
                            <TabItems
                                key={index}
                                tab={tab as ActiveTabs}
                                setPosition={setPosition}
                                position={position}
                                getTabClass={getTabClass}
                                setIsActive={setIsActive}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
};


type CursorProps = {
    positionLeft: number;
    width: number;
}

const Cursor = ({ position }: {
    position: CursorProps
}) => {
    useGSAP(() => {
        gsap.to(".cursor", {
            left: position.positionLeft,
            width: position.width,
            duration: 0.3,
            ease: "power3.out"
        })
    })
    return (
        <div className="bg-[#333]/30 cursor-pointer absolute">
        </div>
    )
}

type TabItemsProps = {
    tab: ActiveTabs;
    setPosition: React.Dispatch<React.SetStateAction<CursorProps>>;
    position: CursorProps;
    getTabClass: (tab: ActiveTabs) => string;
    setIsActive: React.Dispatch<React.SetStateAction<ActiveTabs>>
}
const TabItems = ({ tab, setPosition, position, getTabClass, setIsActive }: TabItemsProps) => {
    const handleTabChange = (tab: ActiveTabs) => {
        setIsActive(tab);
    };
    return (
        <li className={getTabClass("home")} onClick={() => handleTabChange(tab)}>
            <span>{activeTabs[tab]}</span>
        </li>
    )
}