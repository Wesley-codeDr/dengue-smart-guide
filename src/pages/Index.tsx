
import Header from "@/components/Header";
import ModernHero from "@/components/ModernHero";
import Features from "@/components/Features";
import AssessmentCard from "@/components/AssessmentCard";
import HospitalsList from "@/components/HospitalsList";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["hero", "features", "assessment", "hospitals"];
  const navigate = useNavigate();

  // Atualiza o indicador ativo com base na posição do scroll
  const handleScroll = () => {
    if (!containerRef.current) return;

    const scrollLeft = containerRef.current.scrollLeft;
    const width = containerRef.current.clientWidth;
    const newActiveSection = Math.floor((scrollLeft + width / 2) / width);
    
    setActiveSection(newActiveSection);
  };

  // Função para navegar para uma seção específica
  const navigateToSection = (index: number) => {
    if (!containerRef.current) return;
    
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollTo({
      left: width * index,
      behavior: 'smooth'
    });
  };

  // Handler para iniciar avaliação
  const handleStartAssessment = () => {
    // Aqui você pode navegar para a rota de avaliação
    console.log("Iniciando avaliação...");
    // Por exemplo: navigate("/assessment");
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div 
        ref={containerRef}
        className="horizontal-scroll-container"
      >
        {/* Seção Hero */}
        <section id="hero" className="horizontal-section">
          <ModernHero />
        </section>
        
        {/* Seção Features */}
        <section id="features" className="horizontal-section">
          <Features />
        </section>
        
        {/* Seção Assessment */}
        <section id="assessment" className="horizontal-section">
          <AssessmentCard 
            title="Avaliação de Saúde"
            description="Faça uma avaliação rápida dos seus sintomas e descubra recomendações personalizadas para o seu caso."
            onStart={handleStartAssessment}
          />
        </section>
        
        {/* Seção Hospitals */}
        <section id="hospitals" className="horizontal-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              Hospitais Parceiros
            </h2>
            <HospitalsList />
          </div>
        </section>
      </div>

      {/* Indicadores de navegação */}
      <div className="scroll-indicator">
        {sections.map((section, index) => (
          <div
            key={section}
            className={`scroll-indicator-dot ${index === activeSection ? 'active' : ''}`}
            onClick={() => navigateToSection(index)}
            aria-label={`Ir para seção ${section}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
