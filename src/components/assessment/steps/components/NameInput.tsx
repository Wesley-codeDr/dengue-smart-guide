import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type NameInputProps = {
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

export const NameInput = ({ value, onChange, error }: NameInputProps) => {
  return (
    <div>
      <Label htmlFor="name">Nome Completo</Label>
      <Input
        id="name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={error ? "border-red-500" : ""}
        placeholder="Digite seu nome completo"
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};
