
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

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
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Hospitais Parceiros</h2>
      <div className="space-y-4">
        {hospitals.map((hospital) => (
          <Button
            key={hospital.id}
            variant="outline"
            className="w-full flex items-center justify-between text-left"
            onClick={() => handleHospitalClick(hospital.url)}
          >
            <div>
              <span className="font-medium">{hospital.name}</span>
              <span className="text-sm text-muted-foreground block">{hospital.city}</span>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default HospitalsList;
