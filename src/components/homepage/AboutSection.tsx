
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type AboutSectionProps = {
  logo: string;
};

const AboutSection = ({ logo }: AboutSectionProps) => {
  return (
    <section id="sobre" className="modern-section bg-white">
      <div className="modern-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="modern-section-title">Sobre a WellWave</h2>
          <p className="modern-section-subtitle">
            Conheça nossa missão e como ajudamos pacientes em todo o Brasil a acessar serviços de saúde de qualidade com tecnologia e cuidado humanizado.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-xs mx-auto md:mx-0 mb-6 md:mb-0 group">
              <div className="absolute inset-0 rounded-xl bg-gradient-conic from-primary/30 via-transparent to-primary/30 opacity-70 animate-spin-slow blur-sm"></div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-accent/20 via-transparent to-accent/20 opacity-50 blur-md animate-pulse-slow"></div>
              <img 
                src={logo} 
                alt="Wellwave Logo" 
                className="h-auto w-full max-w-[280px] relative z-10 transition-all duration-500 group-hover:scale-105" 
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Nossa Missão</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A WellWave nasceu com a missão de democratizar o acesso à saúde de qualidade, conectando pacientes e profissionais de saúde por meio de tecnologia acessível e intuitiva. Especialmente durante períodos críticos como surtos de dengue, buscamos oferecer ferramentas que auxiliem na avaliação inicial e no direcionamento correto dos casos.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Como Ajudamos</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nossa avaliação online de dengue é apenas um dos recursos que oferecemos para ajudar pacientes a entenderem seus sintomas e buscarem o tratamento adequado no momento certo. Combinamos tecnologia avançada com diretrizes médicas atualizadas para fornecer orientações confiáveis.
            </p>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300"
            >
              Saiba mais sobre nossa equipe
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
