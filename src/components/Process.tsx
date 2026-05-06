import React, { useState } from 'react';

const HowItWorks: React.FC = () => {
    const [activeStep, setActiveStep] = useState(1);

    const imageProcess = ["/assets/step1.png", "/assets/step2.png", "/assets/step3.png"]

    const steps = [
        {
            id: 1,
            title: "Tahlil va Rejalash",
            description: "Biz sizning biznesi uchun to'liq IT yechimi ishlab chiqamiz. Fikrdan amalga oshirishgacha barcha bosqichda biz yoningizdamiz.",
            items: [
                "Sizning ehtiyojlarini to'liq tushunamiz",
                "Bazar tahlili va raqobat o'rganish",
                "Texnik spesifikatsiya tuzish",
                "Proyektaning xaritasi va vaqtni aniqlash",
                "Budget va resurslini planlash"
            ]
        },
        {
            id: 2,
            title: "Dizayn va Prototip",
            description: "Zamonaviy va foydalanuvchi-markaziy dizayn. Sizning vzyoningizni hayaliy amalga aylantirish.",
            items: [
                "UI/UX dizayn Figmada",
                "Foydalanuvchi interfeysi prototiplari",
                "Design sistemasi yaratish",
                "Sizning feedback asosida revision",
                "Tasdiq va mobilga moslash"
            ]
        },
        {
            id: 3,
            title: "Ishlab Chiqarish va Joylashtirish",
            description: "Kuchli, masshtablanuvchi va xavfsiz kod. Loyihani production-ga joylashtirish va qo'llab-quvvatlash.",
            items: [
                "Frontend va Backend ishlab chiqarish",
                "Database va API integratsiyi",
                "Xavfsizlik va performance testing",
                "Cloud platformasiga deployment",
                "24/7 qo'llab-quvvatlash va monitoring"
            ]
        }
    ];

    const currentStep = steps.find(s => s.id === activeStep) || steps[0];
    const progressPercentage = (activeStep / 3) * 100;

    return (
        <div className="min-h-screen text-[#1a1a1a] font-sans p-8 md:p-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <div>
                    <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">/ Jarayon /</span>
                    <h1 className="text-5xl md:text-6xl font-medium leading-tight">
                        Dasturlash orqali biznesingizni rivojlantiring
                        <span className="inline-block ml-4 align-middle">
                            <svg width="80" height="20" viewBox="0 0 100 20" fill="none">
                                <path d="M0 10 Q 25 0, 50 10 T 100 10" stroke="#d4a39e" strokeWidth="2" fill="none" />
                            </svg>
                        </span>
                    </h1>
                </div>
                <div className="flex flex-col justify-end">
                    <p className="text-gray-600 max-w-md leading-relaxed">
                        Toppon bilan o'z biznesingizni raqamlashtiring: Fikr, Ishlab chiqish, Takomillash.
                        Bizneslarga moslashtirilgan IT yechimlar - loyihani boshqarish,
                        web aplikatsiya, mobil ilova. O'z g'oyangizni haqiqatga aylantiring.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                    <h2 className="text-4xl font-medium">Loyihani yaratish jarayoni</h2>

                    <div className="w-full md:w-1/3">
                        <div className="flex justify-between text-[10px] uppercase tracking-tighter mb-2">
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setActiveStep(1)}
                                    className={`font-bold cursor-pointer transition-colors ${activeStep === 1 ? 'text-black' : 'text-gray-400'}`}
                                >
                                    Qadam /01/
                                </button>
                                <button
                                    onClick={() => setActiveStep(2)}
                                    className={`font-bold cursor-pointer transition-colors ${activeStep === 2 ? 'text-black' : 'text-gray-400'}`}
                                >
                                    Qadam /02/
                                </button>
                                <button
                                    onClick={() => setActiveStep(3)}
                                    className={`font-bold cursor-pointer transition-colors ${activeStep === 3 ? 'text-black' : 'text-gray-400'}`}
                                >
                                    Qadam /03/
                                </button>
                            </div>
                            <span className="font-bold">Progress <span className="text-xl">{Math.round(progressPercentage)}%</span></span>
                        </div>
                        <div className="h-4 bg-gray-200 rounded-full overflow-hidden relative">
                            <div
                                className="h-full bg-black rounded-full flex justify-end items-center pr-1 transition-all duration-300"
                                style={{ width: `${progressPercentage}%` }}
                            >
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 bg-[#e8e6e1] rounded-xl overflow-hidden min-h-[500px]">
                    <div className="p-12 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">{currentStep.title}</h3>
                            <p className="text-lg font-medium leading-snug mb-12 max-w-sm">
                                {currentStep.description}
                            </p>

                            <div className="space-y-4">
                                <p className="font-bold text-sm mb-6">Quyidagilarga ehtiyoj bo'lsa:</p>
                                <ul className="space-y-4 text-gray-600 text-sm">
                                    {currentStep.items.map((item, idx) => (
                                        <li key={idx}>• {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="h-full w-full">
                        <img src={imageProcess[currentStep.id - 1]} alt="" className='h-full w-full object-cover' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;