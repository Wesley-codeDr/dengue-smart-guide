export type FormErrors = {
  name: string;
  birthDate: string;
  city: string;
};

export type Comorbidity = {
  id: string;
  label: string;
};

export type Medication = {
  id: string;
  label: string;
};

export type BasicInfoFormData = {
  name: string;
  birthDate?: Date;
  city: string;
  comorbidities: string[];
  medications: string[];
  travelHistory: TravelHistory;
};

export type TravelHistory = {
  visitedAreas: string[];
};
