
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { Medication } from "../../types";

type MedicationCheckboxesProps = {
  selectedMedications: string[];
  onChange: (medication: string) => void;
};

const medications: Medication[] = [
  { id: "antiplatelet", label: "Uso de Antiplaquetário (AAS, Clopidogrel)" },
  { id: "anticoagulant", label: "Uso de Anticoagulante" },
];

export const MedicationCheckboxes = ({
  selectedMedications,
  onChange,
}: MedicationCheckboxesProps) => {
  return (
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
              checked={selectedMedications.includes(medication.id)}
              onCheckedChange={() => onChange(medication.id)}
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
  );
};
