import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import BasicInfoStep from "./steps/BasicInfoStep";
import SymptomsStep from "./steps/SymptomsStep";
import WarningSignsStep from "./steps/WarningSignsStep";
import ResultStep from "./steps/ResultStep";
import TravelHistoryStep from "./steps/TravelHistoryStep";

export type AssessmentStepProps = {
  onNext: () => void;
  onBack: () => void;
  setFormData: (data: any) => void;
  formData: any;
};

const AssessmentWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    basicInfo: {
      name: "",
      age: "",
      city: "",
      comorbidities: [],
      medications: [],
      isPregnant: false,
    },
    symptoms: {
      fever: false,
      headache: false,
      eyePain: false,
      muscularPain: false,
      jointPain: false,
      nausea: false,
      skinRash: false,
      fatigue: false,
    },
    warningSigns: {
      persistentVomiting: false,
      abdominalPain: false,
      bleeding: false,
      lethargy: false,
      dizziness: false,
      coldSkin: false,
      difficultyBreathing: false,
      rapidBreathing: false,
    },
    travelHistory: {
      visitedAreas: [],
    },
  });

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const updateFormData = (newData: any) => {
    setFormData((prev: any) => ({ ...prev, ...newData }));
  };

  const steps = [
    {
      component: BasicInfoStep,
      title: "Dados Básicos",
      description: "Informações pessoais e condições existentes",
    },
    {
      component: SymptomsStep,
      title: "Sintomas",
      description: "Sintomas que você está apresentando",
    },
    {
      component: WarningSignsStep,
      title: "Sinais de Alarme",
      description: "Sinais que requerem atenção especial",
    },
    {
      component: TravelHistoryStep,
      title: "Histórico de Viagens",
      description: "Áreas visitadas recentemente",
    },
    {
      component: ResultStep,
      title: "Resultado",
      description: "Avaliação e recomendações",
    },
  ];

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex items-center ${
                  index !== steps.length - 1 ? "flex-1" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                    index <= currentStep
                      ? "bg-primary-dark border-primary-dark text-white"
                      : "bg-white border-gray-300 text-gray-500"
                  }`}
                >
                  {index + 1}
                </div>
                {index !== steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 transition-colors duration-300 ${
                      index < currentStep ? "bg-primary-dark" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
            {steps[currentStep].title}
          </h2>
          <p className="text-center text-gray-600">
            {steps[currentStep].description}
          </p>
        </div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CurrentStepComponent
              onNext={handleNext}
              onBack={handleBack}
              setFormData={updateFormData}
              formData={formData}
            />
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AssessmentWizard;
