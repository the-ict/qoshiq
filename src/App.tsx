import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./pages/Home"

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
};