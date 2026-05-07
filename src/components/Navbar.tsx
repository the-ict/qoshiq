export default function Navbar() {
    return (
        <nav className="flex justify-between items-center mb-20 py-5 max-md:gap-10">
            <div className="text-2xl font-bold tracking-tighter cursor-pointer" onClick={() => window.location.reload()}>toppon.</div>
            <div className="w-[50%] items-center gap-8 text-sm font-medium flex justify-between max-md:w-full">
                <div className="h-5 w-10 bg-black rounded-full max-md:hidden">
                </div>
                <div className="flex items-center gap-3">
                    <a href="#" className="hover:opacity-70 transition max-md:text-xs">Qo'ng'iroqni bron qilish</a>
                    <button className="bg-[#1A1A1A] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition max-md:text-xs">
                        <span>Keling, gaplashamiz</span>
                        <span className="text-lg">→</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}
