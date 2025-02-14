
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, differenceInYears } from "date-fns";
import { ptBR } from "date-fns/locale";
import type { AssessmentStepProps } from "../AssessmentWizard";

const BasicInfoStep = ({ onNext, setFormData, formData }: AssessmentStepProps) => {
  const [errors, setErrors] = useState({
    name: "",
    birthDate: "",
    city: "",
  });

  const cities = [
    "Paulínia",
    "Hortolândia",
    "Sumaré",
    "Cosmópolis",
    "Campinas",
    "Santa Bárbara do Oeste",
    "Indaiatuba",
    "Itu"
  ];

  const comorbidities = [
    { id: "diabetes", label: "Diabetes" },
    { id: "hypertension", label: "Hipertensão" },
    { id: "heart", label: "Doença Cardíaca" },
    { id: "respiratory", label: "Doença Respiratória" },
  ];

  const medications = [
    { id: "antiplatelet", label: "Uso de Antiplaquetário (AAS, Clopidogrel)" },
    { id: "anticoagulant", label: "Uso de Anticoagulante" },
  ];

  const calculateAge = (birthDate: Date | undefined) => {
    if (!birthDate) return null;
    return differenceInYears(new Date(), birthDate);
  };

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

  const age = calculateAge(formData.basicInfo.birthDate);

  return (
    <div className="space-y-6 animate-fade-in">
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
            placeholder="Digite seu nome completo"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <Label>Data de Nascimento</Label>
          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start text-left font-normal ${
                    errors.birthDate ? "border-red-500" : ""
                  }`}
                >
                  {formData.basicInfo.birthDate ? (
                    format(formData.basicInfo.birthDate, "dd 'de' MMMM 'de' yyyy", {
                      locale: ptBR,
                    })
                  ) : (
                    <span className="text-muted-foreground">
                      Selecione sua data de nascimento
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={formData.basicInfo.birthDate}
                  onSelect={(date) =>
                    setFormData({
                      basicInfo: { ...formData.basicInfo, birthDate: date },
                    })
                  }
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                  locale={ptBR}
                />
              </PopoverContent>
            </Popover>
            {age !== null && (
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {age} anos
              </span>
            )}
          </div>
          {errors.birthDate && (
            <p className="text-sm text-red-500 mt-1">{errors.birthDate}</p>
          )}
        </div>

        <div>
          <Label htmlFor="city">Cidade</Label>
          <Select
            value={formData.basicInfo.city}
            onValueChange={(value) =>
              setFormData({
                basicInfo: { ...formData.basicInfo, city: value },
              })
            }
          >
            <SelectTrigger className={errors.city ? "border-red-500" : ""}>
              <SelectValue placeholder="Selecione sua cidade" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.city && (
            <p className="text-sm text-red-500 mt-1">{errors.city}</p>
          )}
        </div>

        <div className="space-y-3">
          <Label>Comorbidades</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comorbidities.map((comorbidity) => (
              <div
                key={comorbidity.id}
                className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
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

        <div className="space-y-3">
          <Label>Medicações em Uso</Label>
          <div className="grid grid-cols-1 gap-4">
            {medications.map((medication) => (
              <div
                key={medication.id}
                className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Checkbox
                  id={medication.id}
                  checked={formData.basicInfo.medications?.includes(
                    medication.id
                  )}
                  onCheckedChange={() =>
                    handleMedicationChange(medication.id)
                  }
                />
                <label
                  htmlFor={medication.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {medication.label}
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
