export default function Navbar() {
    return (
        <nav className="flex justify-between items-center mb-20 py-5">
            <div className="text-2xl font-bold tracking-tighter">uwwa</div>
            <div className="flex items-center gap-8 text-sm font-medium">
                <a href="#" className="hover:opacity-70 transition">Book a call</a>
                <button className="bg-[#1A1A1A] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition">
                    <span>Let's connect</span>
                    <span className="text-lg">→</span>
                </button>
            </div>
        </nav>
    )
}
