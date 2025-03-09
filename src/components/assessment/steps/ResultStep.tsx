import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { AssessmentStepProps } from "../AssessmentWizard";
import HospitalsList from "@/components/HospitalsList";

const calculateRiskScore = (formData: any) => {
  let riskScore = 0;

  // Sintomas comuns (1 ponto cada)
  if (formData.symptoms.fever) riskScore += 1;
  if (formData.symptoms.headache) riskScore += 1;
  if (formData.symptoms.eyePain) riskScore += 1;
  if (formData.symptoms.muscularPain) riskScore += 1;
  if (formData.symptoms.jointPain) riskScore += 1;
  if (formData.symptoms.nausea) riskScore += 1;

  // Sinais de alarme (2 pontos cada)
  if (formData.warningSigns.persistentVomiting) riskScore += 2;
  if (formData.warningSigns.abdominalPain) riskScore += 2;
  if (formData.warningSigns.bleeding) riskScore += 2;
  if (formData.warningSigns.lethargy) riskScore += 2;
  if (formData.warningSigns.dizziness) riskScore += 2;

  // Comorbidades (1 ponto cada)
  formData.basicInfo.comorbidities.forEach((comorbidity: string) => {
    if (comorbidity === "immunossuppression") {
      riskScore += 2; // Imunossupressão vale 2 pontos
    } else {
      riskScore += 1;
    }
  });

  // Medicações especiais (2 pontos cada)
  formData.basicInfo.medications.forEach((medication: string) => {
    if (medication === "anticoagulant" || medication === "antiplatelet") {
      riskScore += 2;
    }
  });

  // Fatores adicionais
  if (formData.basicInfo.isPregnant) riskScore += 2;
  if (parseInt(formData.basicInfo.age) >= 65) riskScore += 2;

  // Define o nível de risco
  if (riskScore >= 5) return "ALTO";
  if (riskScore >= 3) return "MÉDIO";
  return "BAIXO";
};

const ResultStep = ({ onBack, formData }: AssessmentStepProps) => {
  const [showHospitals, setShowHospitals] = useState(false);
  const riskLevel = calculateRiskScore(formData);

  const TELEMEDICINE_URL = "https://phs.telemedicina.drtis.com.br/";

  const recommendations = {
    BAIXO: {
      title: "Risco Baixo",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      message:
        "Seus sintomas indicam um caso leve. Monitore os sintomas em casa e considere agendar uma teleconsulta para acompanhamento.",
      recommendations: [
        "Mantenha-se bem hidratado",
        "Descanse adequadamente",
        "Monitore sua temperatura",
        "Evite automedicação",
      ],
      action: "Agendar Teleconsulta",
    },
    MÉDIO: {
      title: "Risco Médio",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      message:
        "Seus sintomas requerem atenção médica. Recomendamos avaliação nas próximas 24 horas.",
      recommendations: [
        "Procure atendimento médico em até 24h",
        "Mantenha-se hidratado",
        "Monitore os sinais de alarme",
        "Evite esforços físicos",
      ],
      action: "Agendar Consulta Urgente",
    },
    ALTO: {
      title: "Risco Alto",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      message:
        "Seus sintomas indicam necessidade de atendimento médico imediato. Procure um pronto-socorro.",
      recommendations: [
        "Procure atendimento médico IMEDIATAMENTE",
        "Não espere os sintomas piorarem",
        "Leve seus documentos e lista de medicações",
        "Se possível, peça ajuda para se deslocar",
      ],
      action: "Localizar Pronto-Socorro",
    },
  };

  const currentRecommendation = recommendations[riskLevel];

  const handleActionClick = () => {
    if (riskLevel === "ALTO") {
      setShowHospitals(true);
    } else {
      window.open(TELEMEDICINE_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="space-y-6">
      <div
        className={`p-6 rounded-lg ${currentRecommendation.bgColor} ${currentRecommendation.borderColor} border`}
      >
        <h3
          className={`text-xl font-semibold mb-3 ${currentRecommendation.color}`}
        >
          {currentRecommendation.title}
        </h3>
        <p className="text-gray-700 mb-4">{currentRecommendation.message}</p>
        <Button
          className={`w-full ${riskLevel === "ALTO" ? "bg-red-600 hover:bg-red-700" : "gradient-bg hover:opacity-90"}`}
          onClick={handleActionClick}
        >
          {currentRecommendation.action}
        </Button>
      </div>

      {showHospitals && <HospitalsList />}

      <div className="space-y-4">
        <h4 className="font-medium text-gray-700">Recomendações Específicas:</h4>
        <ul className="space-y-2">
          {currentRecommendation.recommendations.map((rec, index) => (
            <li
              key={index}
              className="flex items-center p-3 bg-white rounded-lg shadow-sm"
            >
              <div
                className={`w-2 h-2 rounded-full mr-3 ${
                  riskLevel === "ALTO"
                    ? "bg-red-500"
                    : riskLevel === "MÉDIO"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
              />
              <span className="text-gray-700">{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-600 italic">
          Importante: Esta avaliação é apenas para orientação inicial. Não substitui uma avaliação médica presencial. Em caso de dúvida, sempre procure atendimento médico.
        </p>
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
