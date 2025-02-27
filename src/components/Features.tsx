import { motion } from "framer-motion";
import { Stethoscope, Clock, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Avaliação Rápida",
    description: "Complete a avaliação em menos de 5 minutos e receba orientações imediatas sobre seus sintomas",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Stethoscope,
    title: "Orientação Profissional",
    description: "Receba recomendações baseadas em protocolos médicos atualizados e validados por especialistas",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e Privacidade",
    description: "Seus dados são protegidos e tratados com confidencialidade seguindo os mais rigorosos padrões",
    color: "from-emerald-500 to-green-600",
  },
];

const Features = () => {
  return (
    <section className="modern-section bg-gradient-to-br from-white via-gray-50 to-primary/5">
      <div className="modern-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="modern-section-title">Por que usar nossa avaliação?</h2>
          <p className="modern-section-subtitle">
            Nossa plataforma fornece uma avaliação rápida e confiável baseada nas diretrizes médicas 
            mais atuais, garantindo que você receba orientações precisas sobre seus sintomas
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
              className="modern-card group hover:scale-[1.02] transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "var(--shadow-md)"
              }}
        >
              <div className={`h-2 bg-gradient-to-r ${feature.color} rounded-t-lg`}></div>
              <div className="p-8 flex flex-col h-full">
                <div className="mb-8 p-5 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-10 w-10 text-primary" />
          </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed mb-6 flex-grow">
                  {feature.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-100 flex justify-center">
                  <button className="text-primary font-medium flex items-center transition-all duration-300 group-hover:translate-x-1">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:ml-3" />
                  </button>
                </div>
      </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center rounded-full bg-primary/5 px-6 py-3">
            <span className="text-sm font-medium text-primary mr-2">Baseado em +500 mil casos de dengue</span>
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;