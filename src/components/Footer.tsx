const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full mt-10 pt-[40px] pb-[200px] max-md:pb-[100px]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">

        <div className="flex-shrink-0">
          <span className="text-2xl font-bold text-[#1a1a1a] tracking-tighter">
            toppon.
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-32 max-md:grid max-md:grid-cols-2">
          <nav className="flex flex-col gap-3">
            <a href="/" className="text-sm text-gray-800 hover:text-black transition-colors">Bosh sahifa</a>
            <a href="#services" className="text-sm text-gray-800 hover:text-black transition-colors">Xizmatlar</a>
            <a href="#process" className="text-sm text-gray-800 hover:text-black transition-colors">Jarayon</a>
            <a href="#works" className="text-sm text-gray-800 hover:text-black transition-colors">Loyihalar</a>
          </nav>

          <nav className="flex flex-col gap-3">
            <a href="#" className="text-sm text-gray-800 hover:text-black transition-colors">Instagram</a>
            <a href="#" className="text-sm text-gray-800 hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="text-sm text-gray-800 hover:text-black transition-colors">Twitter</a>
          </nav>
        </div>

        <button
          onClick={scrollToTop}
          className="bg-[#111111] text-white w-20 h-20 rounded-full flex items-center justify-center hover:scale-105 transition-transform shrink-0"
          aria-label="Scroll to top"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>

      </div>
    </footer>
  );
};

export default Footer;