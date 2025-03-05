
import { motion } from "framer-motion";
import { ArrowRight, Timer, ClipboardCheck, Compass } from "lucide-react";

const Features = () => {
  const features = [{
    icon: Timer,
    title: "Rápido e Fácil",
    description: "Complete a avaliação em menos de 5 minutos"
  }, {
    icon: ClipboardCheck,
    title: "Confiável",
    description: "Baseado nas diretrizes mais recentes de saúde"
  }, {
    icon: Compass,
    title: "Orientação Clara",
    description: "Receba recomendações personalizadas imediatamente"
  }];

  return (
    <section className="modern-section">
      <div className="modern-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="modern-section-title">Confiável e Eficiente</h2>
          <p className="modern-section-subtitle">
            Nossa plataforma utiliza tecnologia avançada e protocolos médicos atualizados para fornecer
            uma avaliação rápida, segura e confiável dos seus sintomas.
          </p>
        </motion.div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="modern-card modern-3d-card group">
                <div className="mb-8 p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-all duration-300">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed mb-6">{feature.description}</p>
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-center">
                  <button className="text-primary font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
