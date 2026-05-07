import { Dot } from "lucide-react";
import { useState } from "react";

type ActiveTabs = "home" | "services" | "process" | "projects";

export default function Menu() {
    const [isActive, setIsActive] = useState<ActiveTabs>("home");

    const handleTabChange = (tab: ActiveTabs) => {
        setIsActive(tab);
    };

    const getTabClass = (tab: ActiveTabs) => {
        const isTabActive = isActive === tab;
        return `py-2 px-2 rounded-[35px] flex items-center justify-between gap-1 cursor-pointer ${isTabActive ? "bg-black text-white" : "text-black"
            }`;
    };

    return (
        <div className="flex items-center my-3 fixed bottom-0 h-[80px] w-screen left-0 right-0 justify-center text-white z-[100]">
            <div className="max-w-[50%] max-md:max-w-full">
                <ul className="w-full py-2 px-2 transition-all rounded-[35px] bg-gray-200 cursor-pointer flex items-center gap-3 text-xs font-bold">
                    <li className={getTabClass("home")} onClick={() => handleTabChange("home")}>
                        <span>Bosh sahifa</span>
                    </li>
                    <div className="py-2 px-2 rounded-[35px] bg-white text-black flex items-center gap-3">
                        <li className={getTabClass("services")} onClick={() => handleTabChange("services")}>
                            <span>Xizmatlar</span>
                        </li>
                        <li className={getTabClass("process")} onClick={() => handleTabChange("process")}>
                            <span>Jarayon</span>
                        </li>
                        <li className={getTabClass("projects")} onClick={() => handleTabChange("projects")}>
                            <span>Loyihalar</span>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}
