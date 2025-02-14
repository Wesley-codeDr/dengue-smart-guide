import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { format, differenceInYears } from "date-fns";
import { ptBR } from "date-fns/locale";
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
  return <div>
      <Label>Data de Nascimento</Label>
      <div className="flex items-center gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className={`w-full justify-start text-left font-normal ${error ? "border-red-500" : ""}`}>
              {value ? format(value, "dd 'de' MMMM 'de' yyyy", {
              locale: ptBR
            }) : <span className="text-muted-foreground">
                  Selecione sua data de nascimento
                </span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={value} onSelect={onChange} disabled={date => date > new Date() || date < new Date("1900-01-01")} initialFocus locale={ptBR} className="bg-slate-50" />
          </PopoverContent>
        </Popover>
        {age !== null && <span className="text-sm text-muted-foreground whitespace-nowrap">
            {age} anos
          </span>}
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>;
};