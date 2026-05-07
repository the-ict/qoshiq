import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Home from "./pages/Home";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function App() {
  useGSAP(() => {
    gsap.utils.toArray(".fade-down").forEach((element: any, index: number) => {
      gsap.fromTo(element, {
        y: 40,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 5,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
};