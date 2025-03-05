
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowRight, Video } from "lucide-react";

type TeleconsultaCardProps = {
  logo: string;
  handleTeleconsultaClick: () => void;
};

const TeleconsultaCard = ({ logo, handleTeleconsultaClick }: TeleconsultaCardProps) => {
  return (
    <section className="modern-section bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="modern-container">
        <Card className="max-w-4xl mx-auto overflow-hidden shadow-xl border-0">
          <div className="flex flex-col md:flex-row items-center">
            <div className="p-8 md:p-12 flex-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col space-y-6"
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary font-medium text-sm backdrop-blur-sm shadow-sm"
                  whileHover={{ scale: 1.03, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  >
                    <Video className="h-4 w-4" />
                  </motion.div>
                  <span className="relative">
                    Teleconsulta disponível
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary/30"></span>
                  </span>
                </motion.div>
                
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <span className="block">Proteja sua saúde</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">sem sair de casa</span>
                </motion.h2>
                
                <motion.p
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Consulte-se com médicos especialistas através de nossa plataforma segura e receba atendimento de qualidade onde estiver.
                </motion.p>
                
                <motion.button
                  className="self-start px-6 py-3 bg-primary text-white rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90 transition-all duration-300 shadow-md"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleTeleconsultaClick}
                >
                  Agendar agora
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </motion.div>
            </div>
            <div className="md:w-2/5 p-8 flex justify-center items-center">
              <img 
                src={logo} 
                alt="Teleconsulta logo" 
                className="w-full max-w-[200px] h-auto object-contain filter brightness-105 contrast-125 mix-blend-multiply" 
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TeleconsultaCard;
