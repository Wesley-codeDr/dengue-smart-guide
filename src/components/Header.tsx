
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="modern-hero py-16 md:py-28 text-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="modern-blob top-[-10%] left-[5%] opacity-70"></div>
      <div className="modern-blob bottom-[-5%] right-[15%] opacity-50" style={{animationDelay: "2s"}}></div>
      
      <div className="modern-container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-block"
        >
          <img 
            src="/logo-new.svg" 
            alt="Dengue Smart Guide Logo" 
            className="mx-auto mb-8 w-32 md:w-40 h-auto object-contain rounded-full shadow-xl drop-shadow-lg bg-white/80 p-2 backdrop-blur-sm"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white bg-opacity-70 shadow-sm backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-success animate-pulse mr-2"></span>
            Avaliação rápida e confiável
          </span>
          
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-900">
              {isMobile ? "Avaliação de Dengue" : "Avaliação de Dengue Online"}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            Avalie seus sintomas de forma rápida e segura, recebendo orientações personalizadas baseadas
            nos mais recentes protocolos médicos para dengue
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
            <motion.button 
              className="modern-button group flex items-center justify-center text-base px-8 py-4 w-full md:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center items-center mt-6 md:mt-8"
        >
          <div className="flex -space-x-3 mr-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-white shadow-md border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                {i}
              </div>
            ))}
          </div>
          <span className="text-gray-700 font-medium">Milhares de avaliações já realizadas</span>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
