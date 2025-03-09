import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { differenceInYears } from "date-fns";

type BirthDateInputProps = {
  value?: Date;
  onChange: (date: Date | undefined) => void;
  error?: string;
};

export const BirthDateInput = ({
  value,
  onChange,
  error
}: BirthDateInputProps) => {
  const calculateAge = (birthDate: Date | undefined) => {
    if (!birthDate) return null;
    return differenceInYears(new Date(), birthDate);
  };

  const age = calculateAge(value);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value ? new Date(e.target.value) : undefined;
    onChange(newDate);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="birthDate">Data de Nascimento</Label>
      <div className="flex items-center gap-4">
        <Input
          id="birthDate"
          type="date"
          value={value ? value.toISOString().split('T')[0] : ''}
          onChange={handleDateChange}
          className={`w-full ${error ? "border-red-500" : ""}`}
          min="1900-01-01"
          max={new Date().toISOString().split('T')[0]}
        />
        {age !== null && (
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {age} anos
          </span>
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
