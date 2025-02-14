import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Timer, ClipboardCheck, ArrowRight } from "lucide-react";
import AssessmentWizard from "@/components/assessment/AssessmentWizard";
const Index = () => {
  const [showAssessment, setShowAssessment] = useState(false);
  const features = [{
    icon: Timer,
    title: "Rápido e Fácil",
    description: "Complete a avaliação em menos de 5 minutos"
  }, {
    icon: ClipboardCheck,
    title: "Confiável",
    description: "Baseado nas diretrizes mais recentes de saúde"
  }, {
    icon: ArrowRight,
    title: "Orientação Clara",
    description: "Receba recomendações personalizadas imediatamente"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/3f76aede-e69f-45fb-95fd-fb3e2a81b56d.png" alt="Dengue Smart Triage Logo" className="h-10 w-10" />
            <span className="text-xl font-semibold text-[#00A5B8] my-0">Hospital Santa Ignês Paulínia</span>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                
              </li>
              <li>
                <a href="#contato" className="text-gray-600 hover:text-[#00A5B8]">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {!showAssessment ? <main>
          <section className="py-20 text-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-[#00A5B8] mb-6">
                Avaliação de Dengue Online
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                Descubra rapidamente se seus sintomas podem estar relacionados à dengue
                e receba orientações confiáveis para o próximo passo.
              </p>
              <div className="flex justify-center gap-4">
                <Button onClick={() => setShowAssessment(true)} size="lg" className="bg-[#00A5B8] hover:bg-[#008999] text-white px-8">
                  Iniciar Avaliação
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-[#FF9B71] text-[#FF9B71] hover:bg-[#FF9B71]/10">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map(feature => <Card key={feature.title} className="p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-t-[#00A5B8]">
                    <feature.icon className="h-12 w-12 text-[#00A5B8] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>)}
              </div>
            </div>
          </section>
        </main> : <AssessmentWizard />}

      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 WellWave Dengue | Todos os direitos reservados</p>
        </div>
      </footer>
    </div>;
};
export default Index;