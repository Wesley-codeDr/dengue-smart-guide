
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { AssessmentStepProps } from "../AssessmentWizard";
import HospitalsList from "@/components/HospitalsList";

const calculateRiskLevel = (formData: any) => {
  let riskScore = 0;

  // Adiciona pontos baseado nos sintomas
  Object.values(formData.symptoms).forEach((value: any) => {
    if (value === true) riskScore += 1;
  });

  // Adiciona pontos baseado nos sinais de alarme
  Object.values(formData.warningSigns).forEach((value: any) => {
    if (value === true) riskScore += 2;
  });

  // Considera comorbidades como fator de risco
  if (formData.basicInfo.comorbidities.length > 0) {
    riskScore += formData.basicInfo.comorbidities.length;
  }

  // Define o nível de risco
  if (riskScore >= 8) return "ALTO";
  if (riskScore >= 4) return "MÉDIO";
  return "BAIXO";
};

const ResultStep = ({ onBack, formData }: AssessmentStepProps) => {
  const [showHospitals, setShowHospitals] = useState(false);
  const riskLevel = calculateRiskLevel(formData);

  const TELEMEDICINE_URL = "https://www.doctoralia.com.br/";

  const recommendations = {
    BAIXO: {
      title: "Risco Baixo",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      message:
        "Seus sintomas indicam um caso leve. Recomendamos monitoramento em casa e agendamento de teleconsulta para acompanhamento.",
      action: "Agendar Teleconsulta",
    },
    MÉDIO: {
      title: "Risco Médio",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      message:
        "Seus sintomas requerem atenção. Recomendamos avaliação médica nas próximas 24 horas.",
      action: "Agendar Consulta Urgente",
    },
    ALTO: {
      title: "Risco Alto",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      message:
        "Seus sintomas indicam um caso grave. Procure atendimento médico imediatamente.",
      action: "Localizar Pronto-Socorro",
    },
  };

  const currentRecommendation = recommendations[riskLevel];

  const handleActionClick = () => {
    if (riskLevel === "ALTO") {
      setShowHospitals(true);
    } else {
      // Para casos de risco baixo e médio, redireciona para a telemedicina
      window.open(TELEMEDICINE_URL, '_blank');
    }
  };

  return (
    <div className="space-y-6">
      <div
        className={`p-6 rounded-lg ${currentRecommendation.bgColor} ${currentRecommendation.borderColor} border`}
      >
        <h3
          className={`text-xl font-semibold mb-2 ${currentRecommendation.color}`}
        >
          {currentRecommendation.title}
        </h3>
        <p className="text-gray-700 mb-4">{currentRecommendation.message}</p>
        <Button
          className={`w-full ${
            riskLevel === "ALTO"
              ? "bg-red-600 hover:bg-red-700"
              : "bg-primary-dark hover:bg-primary-dark/90"
          }`}
          onClick={handleActionClick}
        >
          {currentRecommendation.action}
        </Button>
      </div>

      {showHospitals && <HospitalsList />}

      <div className="space-y-4">
        <h4 className="font-medium text-gray-700">Recomendações Gerais:</h4>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Mantenha-se bem hidratado</li>
          <li>Descanse adequadamente</li>
          <li>Monitore sua temperatura</li>
          <li>Evite automedicação</li>
        </ul>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
      </div>
    </div>
  );
};

export default ResultStep;
