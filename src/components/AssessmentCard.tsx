
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface AssessmentCardProps {
  title: string;
  description: string;
  onStart: () => void;
}

const AssessmentCard = ({ title, description, onStart }: AssessmentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-sm md:max-w-none"
    >
      <Card className="p-4 md:p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">{title}</h2>
        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">{description}</p>
        <Button
          onClick={onStart}
          className="w-full bg-primary-dark text-white hover:bg-primary-dark/90 transition-colors py-2 md:py-3 text-sm md:text-base"
        >
          Iniciar Avaliação
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Card>
    </motion.div>
  );
};

export default AssessmentCard;
