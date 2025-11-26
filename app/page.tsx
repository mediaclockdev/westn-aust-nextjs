// app/page.tsx
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
         <StatsSection />
        <ServicesSection />
        <AboutSection />
        <CTASection /> 
      </main>
       <Footer /> 
    </>
  );
}
