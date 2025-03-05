
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type HeroProps = {
  onStartAssessment: () => void;
};

const Hero = ({ onStartAssessment }: HeroProps) => {
  return (
    <section className="modern-hero py-24 md:py-32 text-center relative overflow-hidden">
      <div className="modern-blob top-[-20%] left-[10%] opacity-70"></div>
      <div className="modern-blob bottom-[-10%] right-[5%] opacity-50" style={{animationDelay: "3s"}}></div>
      
      <div className="modern-container relative z-10">
        <div className="flex justify-center mb-10">
          <div className="group relative flex items-center gap-3 px-6 py-3.5 rounded-full
               bg-gradient-to-r from-primary/15 via-white/95 to-secondary/15
               shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md
               border border-white/20
               transition-all duration-300 ease-in-out hover:shadow-[0_10px_40px_rgb(0,0,0,0.15)] hover:scale-[1.02]
               dark:from-primary/20 dark:via-gray-900/90 dark:to-secondary/20 dark:border-white/10">
               
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 opacity-50 animate-pulse"></span>
            
            <div className="flex items-center gap-3 z-10">
              <span className="flex h-2 w-2 rounded-full bg-success animate-pulse"></span>
              <span className="font-medium text-sm bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-900 dark:from-white dark:to-gray-200">
                Avaliação rápida e confiável
              </span>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-8 leading-tight tracking-tight">
          Avaliação de <span className="modern-gradient-text">Dengue Online</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Descubra rapidamente se seus sintomas podem estar relacionados à dengue
          e receba orientações médicas confiáveis em minutos.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <motion.button
            onClick={onStartAssessment}
            className="modern-button group flex items-center justify-center text-base px-8 py-4 w-full md:w-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Iniciar Avaliação"
          >
            Iniciar Avaliação
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
          <motion.button
            className="modern-button-secondary flex items-center justify-center text-base px-8 py-4 w-full md:w-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Saiba Mais
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
