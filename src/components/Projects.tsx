export default function Projects() {
    return (
        <section className="w-full" id="works">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                <div className="md:col-span-2">
                    <span className="text-xs font-medium tracking-widest text-gray-500 uppercase">
                        / Ishlarimiz /
                    </span>
                </div>

                <div className="md:col-span-5">
                    <h2 className="text-4xl md:text-5xl font-semibold text-[#333] tracking-tight flex items-start">
                        Eng oxirgi loyihalarimiz
                        <span className="text-lg ml-1 mt-1 font-normal opacity-70">3</span>
                    </h2>
                </div>

                <div className="md:col-span-5">
                    <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                        Bizning loyihalar portfoliysini o'rganing - bu yerda biz innovativ IT
                        yechimlar bilan bizneslarni raqamlashtirdik. Web saytlardan mobil
                        ilovalarigacha, CRM sistemalaridan e-commerce platformasigacha.
                        Biz har bir loyihani zamonaviy texnologiya, mukammal dizayn va
                        foydalanuvchi tajribasini prioritet qilib takomillashtiradik.
                    </p>
                </div>
            </div>

            <section className="bg-[#e2e4eb] rounded-[40px] p-20 mt-20 font-sans">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    <div className="md:col-span-4 flex flex-col justify-between min-h-[400px]">
                        <div className="space-y-1">
                            <span className="text-gray-500 text-sm block mb-8">Yangi loyiha</span>
                            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-tight">MIRO</h2>
                            <p className="text-gray-500 text-sm">(Interaktiv taxtada ishlash vositalari)</p>
                        </div>

                        <div className="bg-white rounded-2xl p-12 flex items-center justify-center shadow-sm max-w-[280px]">
                            <img src="/assets/akbw.png" alt="Akbw logo" className="w-10 h-10 rounded-full" />
                        </div>
                    </div>

                    <div className="md:col-span-8 flex flex-col gap-12">

                        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                            <div className="max-w-xl space-y-6">
                                <p className="text-gray-800 text-lg font-medium leading-snug">
                                    Biz Miro-ga innovativ dizayn orqali sanoatni taravul qilishda yordam berdik.
                                    Bu odamlarning haqiqiy ehtiyojlarini chuqur o'rganish natijasida imkon topdi.
                                </p>
                                <p className="text-gray-700 text-md leading-relaxed">
                                    Toppon Smart Meetings-ning tadqiqoti va dizaynida faol ishtirok etdi - bu Miro-da
                                    loyihalarda ishlash tajribasini yangi darajaga ko'tarish uchun mo'ljallangan yechim.
                                    Bu eng ko'p foydalanilayotgan xususiyat bo'lib, ko'plab yangi mijozlarni jalb qiladi
                                    va kompaniyaning o'sha yildagi eng muhim stavkasi edi.
                                </p>
                            </div>

                            <button className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-black transition-colors shrink-0">
                                <span className="text-sm font-medium">Jonli ko'ring</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                                </svg>
                            </button>
                        </div>

                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm p-4">
                            <img
                                src="/assets/projects/akbw.png"
                                alt="Miro Roadmap Feature"
                                className="w-full h-auto rounded-xl"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </section>
    )
}
