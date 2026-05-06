export default function Projects() {
    return (
        <section className="w-full">
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
        </section>
    )
}
