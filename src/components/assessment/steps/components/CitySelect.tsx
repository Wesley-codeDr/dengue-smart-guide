
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CitySelectProps = {
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

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

export const CitySelect = ({ value, onChange, error }: CitySelectProps) => {
  return (
    <div>
      <Label htmlFor="city">Cidade</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className={error ? "border-red-500" : ""}>
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
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};
