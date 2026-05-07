const ContactSection = () => {
  return (
    <section className="bg-[#222222] mt-10 text-white py-20 px-8 md:px-16 lg:px-24 rounded-[40px] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="relative mb-20">
          <h2 className="text-6xl md:text-8xl font-medium leading-[0.9] max-w-2xl">
            Birgalikda Proyektni Boshlaylik
          </h2>

          <div className="absolute top-0 right-0 hidden lg:block">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
              <path
                d="M350 10 C 350 80, 50 80, 50 120 C 50 160, 350 160, 350 200 L 350 240 L 330 220 M 350 240 L 370 220"
                stroke="#d1bfa7"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col justify-between">
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
              Biz bepul konsultatsiya beramiz. Mijozlarni faollashtirish,
              onboarding dizayni, mahsulot murakkabligini kamaytirish
              yoki o'sish tajribalarida maslahat oling.
            </p>

            <div className="mt-12 space-y-2">
              <span className="text-xs uppercase tracking-widest text-gray-500">Biz bilan Aloqa</span>
              <p className="text-xl font-medium">toppon@gmail.com</p>
              <p className="text-xl font-medium">+998 90 157 71 61</p>
            </div>
          </div>

          <form className="space-y-10">
            <div className="border-b border-gray-700 pb-2">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                Ism va Familiya
              </label>
              <input
                type="text"
                className="bg-transparent w-full outline-none py-2 text-white placeholder-gray-800"
              />
            </div>

            <div className="border-b border-gray-700 pb-2">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                Elektron Pochta
              </label>
              <input
                type="email"
                className="bg-transparent w-full outline-none py-2 text-white placeholder-gray-800"
              />
            </div>

            <div className="border-b border-gray-700 pb-2">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                Proyekt Haqida
              </label>
              <textarea
                rows={1}
                className="bg-transparent w-full outline-none py-2 text-white placeholder-gray-800 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-white text-black px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-200 transition-all font-medium group"
            >
              <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
              Xabar Yuborish
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;