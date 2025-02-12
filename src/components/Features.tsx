
import { motion } from "framer-motion";
import { Clock, Stethoscope, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Avaliação Rápida",
    description: "Complete a avaliação em menos de 5 minutos",
  },
  {
    icon: Stethoscope,
    title: "Orientação Profissional",
    description: "Receba recomendações baseadas em protocolos médicos",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description: "Seus dados são protegidos e tratados com confidencialidade",
  },
];

const Features = () => {
  return (
    <div className="py-6 md:py-12 bg-white rounded-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4 md:p-6"
            >
              <feature.icon className="h-10 w-10 md:h-12 md:w-12 text-primary-dark mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
