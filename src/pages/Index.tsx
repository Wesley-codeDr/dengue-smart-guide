
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Features from "@/components/Features";
import AssessmentCard from "@/components/AssessmentCard";
import AssessmentWizard from "@/components/assessment/AssessmentWizard";

const Index = () => {
  const [showAssessment, setShowAssessment] = useState(false);

  const handleStartAssessment = () => {
    setShowAssessment(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-white to-primary/10"
    >
      <Header />
      
      <main className="container mx-auto px-4 py-4 md:py-8">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          {!showAssessment ? (
            <>
              <AssessmentCard
                title="Avalie seus Sintomas"
                description="Descubra se seus sintomas podem estar relacionados à dengue e receba orientações rápidas sobre os próximos passos a serem tomados."
                onStart={handleStartAssessment}
              />
              <Features />
            </>
          ) : (
            <AssessmentWizard />
          )}
        </div>
      </main>
      
      <footer className="bg-white py-6 md:py-8 mt-8 md:mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm md:text-base">
          <p>© 2024 Dengue Smart Guide. Todos os direitos reservados.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Index;
