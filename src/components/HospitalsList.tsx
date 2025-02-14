
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { ExternalLink, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Hospital = {
  id: string;
  name: string;
  url: string;
  city: string;
};

const HospitalsList = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const { data, error } = await supabase
          .from('hospitals')
          .select('*')
          .order('city');
        
        if (error) {
          console.error('Error fetching hospitals:', error);
          return;
        }

        setHospitals(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  const handleHospitalClick = (url: string) => {
    window.open(url, '_blank');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-6">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
      </div>
    );
  }

  const hospitalsByCity = hospitals.reduce((acc, hospital) => {
    if (!acc[hospital.city]) {
      acc[hospital.city] = [];
    }
    acc[hospital.city].push(hospital);
    return acc;
  }, {} as Record<string, Hospital[]>);

  return (
    <Card className="p-4 bg-gradient-to-br from-white to-primary/5">
      <h2 className="text-xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-primary-dark/80">
        Hospitais Parceiros
      </h2>
      
      <Accordion type="single" collapsible className="space-y-2">
        {Object.entries(hospitalsByCity).map(([city, cityHospitals]) => (
          <AccordionItem
            key={city}
            value={city}
            className="border rounded-md bg-white shadow-sm hover:shadow transition-all duration-300"
          >
            <AccordionTrigger className="px-4 py-3 flex items-center justify-between w-full hover:bg-primary/5 transition-colors">
              <div className="flex items-center gap-2">
                <span className="text-base font-medium text-primary-dark">{city}</span>
                <span className="text-xs text-muted-foreground">
                  ({cityHospitals.length} {cityHospitals.length === 1 ? 'hospital' : 'hospitais'})
                </span>
              </div>
            </AccordionTrigger>
            
            <AccordionContent>
              <div className="px-4 py-2 space-y-1 bg-white">
                {cityHospitals.map((hospital) => (
                  <div
                    key={hospital.id}
                    onClick={() => handleHospitalClick(hospital.url)}
                    className="group flex items-center justify-between py-2 px-3 rounded hover:bg-primary/5 cursor-pointer transition-all duration-200"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-primary-dark">
                      {hospital.name}
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-gray-400 group-hover:text-primary-dark transition-colors" />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
};

export default HospitalsList;
