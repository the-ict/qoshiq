const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full mt-10 pt-[40px] pb-[200px]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div className="flex-shrink-0">
          <span className="text-2xl font-bold text-[#1a1a1a] tracking-tighter">
            toppon.
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          <nav className="flex flex-col gap-3">
            <a href="#" className="text-sm text-gray-800 hover:text-black transition-colors">Home</a>
            <a href="#" className="text-sm text-gray-800 hover:text-black transition-colors">Services</a>
            <a href="#" className="text-sm text-gray-800 hover:text-black transition-colors">Process</a>
            <a href="#" className="text-sm text-gray-800 hover:text-black transition-colors">Case studies</a>
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