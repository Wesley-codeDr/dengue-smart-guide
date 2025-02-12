
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { AssessmentStepProps } from "../AssessmentWizard";

const symptoms = [
  { id: "fever", label: "Febre" },
  { id: "headache", label: "Dor de cabeça" },
  { id: "muscularPain", label: "Dores musculares" },
  { id: "skinRash", label: "Manchas na pele" },
  { id: "jointPain", label: "Dor nas articulações" },
  { id: "eyePain", label: "Dor atrás dos olhos" },
  { id: "fatigue", label: "Fadiga" },
  { id: "lossOfTaste", label: "Perda do paladar" },
];

const SymptomsStep = ({
  onNext,
  onBack,
  setFormData,
  formData,
}: AssessmentStepProps) => {
  const handleSymptomChange = (symptom: string) => {
    setFormData({
      symptoms: {
        ...formData.symptoms,
        [symptom]: !formData.symptoms[symptom],
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label>Selecione os sintomas que você está sentindo:</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {symptoms.map((symptom) => (
            <div key={symptom.id} className="flex items-center space-x-2">
              <Checkbox
                id={symptom.id}
                checked={formData.symptoms[symptom.id]}
                onCheckedChange={() => handleSymptomChange(symptom.id)}
              />
              <label
                htmlFor={symptom.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {symptom.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
        <Button onClick={onNext}>
          Próximo
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SymptomsStep;
