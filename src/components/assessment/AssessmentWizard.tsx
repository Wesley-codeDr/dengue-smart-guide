
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import BasicInfoStep from "./steps/BasicInfoStep";
import SymptomsStep from "./steps/SymptomsStep";
import WarningSignsStep from "./steps/WarningSignsStep";
import ResultStep from "./steps/ResultStep";

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
      comorbidities: [],
    },
    symptoms: {
      fever: false,
      headache: false,
      muscularPain: false,
      skinRash: false,
    },
    warningSigns: {
      persistentVomiting: false,
      abdominalPain: false,
      bleeding: false,
      lethargy: false,
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
    },
    {
      component: SymptomsStep,
      title: "Sintomas",
    },
    {
      component: WarningSignsStep,
      title: "Sinais de Alarme",
    },
    {
      component: ResultStep,
      title: "Resultado",
    },
  ];

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex items-center ${
                  index !== steps.length - 1 ? "flex-1" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index <= currentStep
                      ? "bg-primary-dark text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {index + 1}
                </div>
                {index !== steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 ${
                      index < currentStep ? "bg-primary-dark" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            {steps[currentStep].title}
          </h2>
        </div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-6">
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
