import { useGSAP } from "@gsap/react";
import axios from "axios";
import gsap from "gsap";
import { useState } from "react";


const ContactSection = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("+998");
  const [about, setAbout] = useState<string>("");
  useGSAP(() => {
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top, bottom",
        end: "top, top",
        scrub: false,
      }
    });

    contactTimeline.from(".contact-hero-title", {
      yPercent: 100,
      opacity: 0,
    })

    contactTimeline.from(".contact-hero-subtitle", {
      yPercent: 100,
      opacity: 0,
    });
  }, []);

  const onSubmitContacts = async () => {
    try {
      const response = await axios.post("https://api.akbw.uz/api/contact", {
        name: name,
        phone,
        about
      });

      if (response.data) {
        alert("Sizning ma'lumotlaringiz muvaffaqiyatli yuborildi!")
      } else {
        alert("Sizning ma'lumotlaringiz muvaffaqiyatli yuborilmadi!")
      }
    } catch (error) {
      console.log("Sending Contact Info Error: ", error);
      throw new Error("Sending Contact Info Error", {
        cause: error,
      })
    }
  }
  return (
    <section className="bg-[#222222] mt-10 text-white py-20 px-8 md:px-16 lg:px-24 rounded-[40px] overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto">

        <div className="relative mb-20">
          <h2 className="text-6xl md:text-8xl font-medium leading-[0.9] max-w-2xl contact-hero-title">
            Birgalikda Loyihani Boshlaylik
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
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed contact-hero-subtitle">
              Biz bepulga konsultatsiyani taminlaymiz, avtomatlashtirish, startup, mobile ilova, web dastur, erp va crm haqida malumot oling
            </p>

            <div className="mt-12 space-y-2">
              <span className="text-xs uppercase tracking-widest text-gray-500 contact-hero-subtitle">Biz bilan Aloqa</span>
              <p className="text-xl font-medium contact-hero-subtitle">toppon@gmail.com</p>
              <p className="text-xl font-medium contact-hero-subtitle">+998 90 157 71 61</p>
            </div>
          </div>

          <form className="space-y-10" onSubmit={(e) => e.preventDefault}>
            <div className="border-b border-gray-700 pb-2">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                Ism va Familiya
              </label>
              <input
                type="text"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent w-full outline-none py-2 text-white placeholder-gray-800"
              />
            </div>

            <div className="border-b border-gray-700 pb-2">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                Telefon raqamingiz
              </label>
              <input
                type="text"
                defaultValue={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-transparent w-full outline-none py-2 text-white placeholder-gray-800"
              />
            </div>

            <div className="border-b border-gray-700 pb-2">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                Loyiha Haqida
              </label>
              <textarea
                rows={1}
                defaultValue={about}
                onChange={(e) => setAbout(e.target.value)}
                className="bg-transparent w-full outline-none py-2 text-white placeholder-gray-800 resize-none"
              />
            </div>

            <button
              type="submit"
              onClick={onSubmitContacts}
              className="bg-white max-md:w-full text-black px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-200 transition-all font-medium group"
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