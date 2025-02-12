
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import type { AssessmentStepProps } from "../AssessmentWizard";

const BasicInfoStep = ({ onNext, setFormData, formData }: AssessmentStepProps) => {
  const [errors, setErrors] = useState({
    name: "",
    age: "",
  });

  const comorbidities = [
    { id: "diabetes", label: "Diabetes" },
    { id: "hypertension", label: "Hipertensão" },
    { id: "heart", label: "Doença Cardíaca" },
    { id: "respiratory", label: "Doença Respiratória" },
  ];

  const validateForm = () => {
    const newErrors = {
      name: "",
      age: "",
    };
    let isValid = true;

    if (!formData.basicInfo.name) {
      newErrors.name = "Nome é obrigatório";
      isValid = false;
    }

    if (!formData.basicInfo.age || formData.basicInfo.age < 0) {
      newErrors.age = "Idade válida é obrigatória";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const handleComorbidityChange = (comorbidity: string) => {
    const updatedComorbidities = formData.basicInfo.comorbidities.includes(
      comorbidity
    )
      ? formData.basicInfo.comorbidities.filter((c: string) => c !== comorbidity)
      : [...formData.basicInfo.comorbidities, comorbidity];

    setFormData({
      basicInfo: {
        ...formData.basicInfo,
        comorbidities: updatedComorbidities,
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Nome Completo</Label>
          <Input
            id="name"
            value={formData.basicInfo.name}
            onChange={(e) =>
              setFormData({
                basicInfo: { ...formData.basicInfo, name: e.target.value },
              })
            }
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <Label htmlFor="age">Idade</Label>
          <Input
            id="age"
            type="number"
            value={formData.basicInfo.age}
            onChange={(e) =>
              setFormData({
                basicInfo: { ...formData.basicInfo, age: e.target.value },
              })
            }
            className={errors.age ? "border-red-500" : ""}
          />
          {errors.age && <p className="text-sm text-red-500 mt-1">{errors.age}</p>}
        </div>

        <div className="space-y-2">
          <Label>Comorbidades (selecione todas que se aplicam)</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comorbidities.map((comorbidity) => (
              <div key={comorbidity.id} className="flex items-center space-x-2">
                <Checkbox
                  id={comorbidity.id}
                  checked={formData.basicInfo.comorbidities.includes(
                    comorbidity.id
                  )}
                  onCheckedChange={() =>
                    handleComorbidityChange(comorbidity.id)
                  }
                />
                <label
                  htmlFor={comorbidity.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {comorbidity.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleNext} className="w-full md:w-auto">
          Próximo
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default BasicInfoStep;
