
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { AssessmentStepProps } from "../AssessmentWizard";

const warningSigns = [
  { id: "persistentVomiting", label: "Vômitos persistentes" },
  { id: "abdominalPain", label: "Dor abdominal intensa" },
  { id: "bleeding", label: "Sangramento (gengivas, nariz, etc.)" },
  { id: "lethargy", label: "Sonolência ou irritabilidade" },
  { id: "coldSkin", label: "Extremidades frias ou azuladas" },
  { id: "difficultyBreathing", label: "Dificuldade para respirar" },
  { id: "rapidBreathing", label: "Respiração rápida" },
  { id: "severePain", label: "Dor muito forte" },
];

const WarningSignsStep = ({
  onNext,
  onBack,
  setFormData,
  formData,
}: AssessmentStepProps) => {
  const handleWarningSignChange = (sign: string) => {
    setFormData({
      warningSigns: {
        ...formData.warningSigns,
        [sign]: !formData.warningSigns[sign],
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-800 font-medium">
            Atenção: Se você apresentar qualquer um destes sinais, procure atendimento médico imediatamente.
          </p>
        </div>

        <Label>Você apresenta algum destes sinais de alarme?</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {warningSigns.map((sign) => (
            <div key={sign.id} className="flex items-center space-x-2">
              <Checkbox
                id={sign.id}
                checked={formData.warningSigns[sign.id]}
                onCheckedChange={() => handleWarningSignChange(sign.id)}
              />
              <label
                htmlFor={sign.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {sign.label}
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
          Ver Resultado
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default WarningSignsStep;
