import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";

type ActiveTabs = "home" | "services" | "process" | "projects";

const activeTabs = {
    "home": "Bosh sahifa",
    "services": "Xizmatlar",
    "process": "Jarayon",
    "projects": "Loyihalar",
};

export default function Menu() {
    const [isActive, setIsActive] = useState<ActiveTabs | null>(null);
    const [position, setPosition] = useState({
        positionLeft: 0,
        width: 0,
    })

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
                                setIsActive={setIsActive}
                                isActive={isActive === tab}
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
    }, [position])
    return (
        <div className="absolute top-0 left-0 z-0 bg-[#333] rounded-full h-full cursor"></div>
    )
}

type TabItemsProps = {
    tab: ActiveTabs | null;
    setPosition: React.Dispatch<React.SetStateAction<CursorProps>>;
    position: CursorProps;
    setIsActive: React.Dispatch<React.SetStateAction<ActiveTabs | null>>
    isActive: boolean;
}

const TabItems = ({ tab, setPosition, position, setIsActive, isActive }: TabItemsProps) => {
    const getTabClass = (currentTab: ActiveTabs) => {
        return `py-3 px-2 rounded-[35px] flex items-center justify-between gap-1 cursor-pointer transition-colors duration-300 ${isActive ? "text-white" : "text-black"
            }`;
    };

    const handleTabChange = (tab: ActiveTabs | null) => {
        if (tab) {
            setIsActive(tab);
        };
    };

    const ref = useRef<HTMLLIElement | null>(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref.current) return;
                const { width } = ref.current.getBoundingClientRect();
                setPosition({
                    width,
                    positionLeft: ref.current.offsetLeft,
                })
            }}

            onMouseLeave={() => {
                setPosition({
                    width: 0,
                    positionLeft: 0,
                })
            }}
            className={getTabClass("home")} onClick={() => handleTabChange(tab)}>
            <span className="font-bold text-[15px]">{activeTabs[tab ? tab : "home"]}</span>
        </li>
    )
}