import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { NameInput } from "./components/NameInput";
import { BirthDateInput } from "./components/BirthDateInput";
import { CitySelect } from "./components/CitySelect";
import { ComorbidityCheckboxes } from "./components/ComorbidityCheckboxes";
import { MedicationCheckboxes } from "./components/MedicationCheckboxes";
import type { AssessmentStepProps } from "../AssessmentWizard";
import type { FormErrors } from "../types";

const BasicInfoStep = ({ onNext, setFormData, formData }: AssessmentStepProps) => {
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    birthDate: "",
    city: "",
  });

  const validateForm = () => {
    const newErrors = {
      name: "",
      birthDate: "",
      city: "",
    };
    let isValid = true;

    if (!formData.basicInfo.name) {
      newErrors.name = "Nome é obrigatório";
      isValid = false;
    }

    if (!formData.basicInfo.birthDate) {
      newErrors.birthDate = "Data de nascimento é obrigatória";
      isValid = false;
    }

    if (!formData.basicInfo.city) {
      newErrors.city = "Cidade é obrigatória";
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

  const handleMedicationChange = (medication: string) => {
    const updatedMedications = formData.basicInfo.medications?.includes(medication)
      ? formData.basicInfo.medications.filter((m: string) => m !== medication)
      : [...(formData.basicInfo.medications || []), medication];

    setFormData({
      basicInfo: {
        ...formData.basicInfo,
        medications: updatedMedications,
      },
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-4">
        <NameInput
          value={formData.basicInfo.name}
          onChange={(value) =>
            setFormData({
              basicInfo: { ...formData.basicInfo, name: value },
            })
          }
          error={errors.name}
        />

        <BirthDateInput
          value={formData.basicInfo.birthDate}
          onChange={(date) =>
            setFormData({
              basicInfo: { ...formData.basicInfo, birthDate: date },
            })
          }
          error={errors.birthDate}
        />

        <CitySelect
          value={formData.basicInfo.city}
          onChange={(value) =>
            setFormData({
              basicInfo: { ...formData.basicInfo, city: value },
            })
          }
          error={errors.city}
        />

        <ComorbidityCheckboxes
          selectedComorbidities={formData.basicInfo.comorbidities}
          onChange={handleComorbidityChange}
        />

        <MedicationCheckboxes
          selectedMedications={formData.basicInfo.medications || []}
          onChange={handleMedicationChange}
        />
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
