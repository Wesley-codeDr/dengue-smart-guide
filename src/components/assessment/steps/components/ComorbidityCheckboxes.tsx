import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { Comorbidity } from "../../types";

type ComorbidityCheckboxesProps = {
  selectedComorbidities: string[];
  onChange: (comorbidity: string) => void;
  error?: string;
};

const comorbidities: Comorbidity[] = [
  { id: "diabetes", label: "Diabetes" },
  { id: "hypertension", label: "Hipertensão" },
  { id: "heart", label: "Doença Cardíaca" },
  { id: "respiratory", label: "Doença Respiratória" },
];

export const ComorbidityCheckboxes = ({
  selectedComorbidities,
  onChange,
  error,
}: ComorbidityCheckboxesProps) => {
  return (
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
              checked={selectedComorbidities.includes(comorbidity.id)}
              onCheckedChange={() => onChange(comorbidity.id)}
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
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
