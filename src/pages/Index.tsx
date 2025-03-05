
import { useState } from "react";
import AssessmentWizard from "@/components/assessment/AssessmentWizard";
import Header from "@/components/homepage/Header";
import Hero from "@/components/homepage/Hero";
import Features from "@/components/homepage/Features";
import TeleconsultaCard from "@/components/homepage/TeleconsultaCard";
import AboutSection from "@/components/homepage/AboutSection";
import ContactSection from "@/components/homepage/ContactSection";
import Footer from "@/components/homepage/Footer";

const logo = "/lovable-uploads/d3aeafc9-4401-4dc6-808f-08b9288b0356.png";

const Index = () => {
  const [showAssessment, setShowAssessment] = useState<boolean>(false);

  const handleLogoClick = () => {
    setShowAssessment(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTeleconsultaClick = () => {
    window.open('https://phs.telemedicina.drtis.com.br', '_blank', 'noopener,noreferrer');
  };

  const handleStartAssessment = () => {
    setShowAssessment(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <Header 
        handleLogoClick={handleLogoClick} 
        scrollToSection={scrollToSection} 
        logo={logo} 
      />

      {!showAssessment ? (
        <main>
          <Hero onStartAssessment={handleStartAssessment} />
          <Features />
          <TeleconsultaCard logo={logo} handleTeleconsultaClick={handleTeleconsultaClick} />
          <AboutSection logo={logo} />
          <ContactSection />
        </main>
      ) : (
        <AssessmentWizard />
      )}

      <Footer logo={logo} />
    </div>
  );
};

export default Index;
