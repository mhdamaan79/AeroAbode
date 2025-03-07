import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { PropertyCategories } from "./components/PropertyCategories";
import Footer from "./components/Footer";
import { VelocityText } from "./components/VelocityText";
import { CardsPlayground } from "./components/CardsPlayground";
import { PropertyCarousel } from "./components/PropertyCarousel";
import ComingSoon from "./components/ComingSoon";
import { Globe } from "./components/Globe";

function App() {
  return (
    <div className="w-screen h-screen bg-neutral-100">
      {/* navbar component */}
      <Navbar />

      {/* herosection component */}
      <HeroSection />

      {/* property carousel component */}
      <PropertyCarousel />

      {/* globe component */}
      <Globe />

      {/* property category component */}
      <PropertyCategories />

      {/* cards playground component */}
      <CardsPlayground />

      {/* velocity text component */}
      <VelocityText />

      {/* coming soon component */}
      <ComingSoon />

      {/* footer component */}
      <Footer />
    </div>
  );
}

export default App;
