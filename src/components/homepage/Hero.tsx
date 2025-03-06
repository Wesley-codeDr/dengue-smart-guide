
import { motion } from "framer-motion";
import { ArrowRight, Video } from "lucide-react";

type HeroProps = {
  onStartAssessment: () => void;
};

const Hero = ({ onStartAssessment }: HeroProps) => {
  return (
    <section className="modern-hero py-24 md:py-32 text-center relative overflow-hidden">
      {/* Background elements */}
      <div className="background-gradient absolute inset-0 bg-gradient-radial from-white to-primary/5 z-[-2]"></div>
      
      {/* Elegant shapes */}
      <div className="elegant-shapes absolute inset-0 overflow-hidden z-[-1]">
        <div className="elegant-shape shape-1 absolute w-[600px] h-[140px] -left-[10%] top-[15%] bg-gradient-to-r from-primary/20 to-transparent rounded-full backdrop-blur-sm border-2 border-primary/15 shadow-lg opacity-0 rotate-12 animate-appear-float-1"></div>
        <div className="elegant-shape shape-2 absolute w-[500px] h-[120px] -right-[5%] top-[70%] bg-gradient-to-r from-secondary/20 to-transparent rounded-full backdrop-blur-sm border-2 border-primary/15 shadow-lg opacity-0 -rotate-15 animate-appear-float-2"></div>
        <div className="elegant-shape shape-3 absolute w-[300px] h-[80px] left-[5%] bottom-[5%] bg-gradient-to-r from-primary/20 to-transparent rounded-full backdrop-blur-sm border-2 border-primary/15 shadow-lg opacity-0 -rotate-8 animate-appear-float-3"></div>
        <div className="elegant-shape shape-4 absolute w-[200px] h-[60px] right-[15%] top-[10%] bg-gradient-to-r from-primary/20 to-transparent rounded-full backdrop-blur-sm border-2 border-primary/15 shadow-lg opacity-0 rotate-20 animate-appear-float-4"></div>
        <div className="elegant-shape shape-5 absolute w-[150px] h-[40px] left-[20%] top-[5%] bg-gradient-to-r from-accent/30 to-transparent rounded-full backdrop-blur-sm border-2 border-primary/15 shadow-lg opacity-0 -rotate-25 animate-appear-float-5"></div>
      </div>
      
      {/* Waves */}
      <div className="waves absolute bottom-0 w-full h-[30vh] overflow-hidden z-[-1]">
        <div className="wave wave-1 absolute w-[200%] h-[200%] rounded-[40%] opacity-15 animate-waveSpin bg-primary-light bottom-[-120%] left-[-50%]"></div>
        <div className="wave wave-2 absolute w-[200%] h-[200%] rounded-[40%] opacity-10 animate-waveSpinReverse bg-primary bottom-[-110%] left-[-40%]"></div>
      </div>
      
      {/* Overlay gradient */}
      <div className="overlay-gradient absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none z-[-1]"></div>
      
      {/* Main content */}
      <div className="modern-container relative z-10 animate-fadeUp opacity-0">
        {/* Title intro */}
        <div className="title-intro text-sm font-semibold tracking-wider uppercase text-gray-600 mb-6 animate-fadeIn opacity-0" style={{ animationDelay: "0.6s" }}>
          WellWave Apresenta
        </div>
        
        {/* Main title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight animate-fadeIn opacity-0" style={{ animationDelay: "0.7s" }}>
          <div className="title-gradient bg-gradient-to-r from-[#00C9FF] via-primary to-[#06D6A0] bg-clip-text text-transparent bg-size-300 animate-gradient-shift">
            WaveScan
          </div>
          <div className="title-gradient bg-gradient-to-r from-[#00C9FF] via-primary to-[#06D6A0] bg-clip-text text-transparent bg-size-300 animate-gradient-shift">
            Dengue
          </div>
        </h1>
        
        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div className="badge group relative flex items-center gap-3 px-6 py-3.5 rounded-full
               bg-gradient-to-r from-primary/15 via-white/95 to-secondary/15
               shadow-lg backdrop-blur-md
               border border-white/20
               transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]">
               
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 opacity-50 animate-pulse"></span>
            
            <div className="flex items-center gap-3 z-10">
              <span className="flex h-2 w-2 rounded-full bg-success animate-pulse"></span>
              <span className="font-medium text-sm bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-900">
                Ferramenta Inovadora
              </span>
            </div>
          </div>
        </div>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed animate-fadeIn opacity-0" style={{ animationDelay: "0.9s" }}>
          <span className="text-gray-700 font-medium">E se você pudesse descobrir em apenas 2 minutinhos se aquela febre e dor no corpo são sinais de dengue?</span>{" "}
          <span className="text-gray-600">É rápido como tirar uma selfie e pode fazer toda diferença enquanto você espera sua consulta!</span>
        </p>
        
        {/* Disclaimer */}
        <p className="text-gray-600 text-sm mb-8 italic animate-fadeIn opacity-0" style={{ animationDelay: "1.2s" }}>
          Não substitui uma consulta médica, mas é como ter aquele amigo médico que dá aquela dica antes de você ir ao hospital.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4 animate-fadeIn opacity-0" style={{ animationDelay: "1.5s" }}>
          <motion.button
            onClick={onStartAssessment}
            className="button button-primary group flex items-center justify-center text-base px-8 py-4 w-full md:w-auto rounded-lg bg-primary text-white shadow-lg transition-all hover:translate-y-[-3px] hover:shadow-xl active:scale-[0.98]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Iniciar Avaliação"
          >
            <span>Descobrir Agora</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
          <motion.button
            className="button button-green flex items-center justify-center text-base px-8 py-4 w-full md:w-auto rounded-lg bg-[#10B981] text-white shadow-lg transition-all hover:translate-y-[-3px] hover:shadow-xl active:scale-[0.98]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Falar com Médico</span>
            <Video className="ml-2 h-5 w-5" />
          </motion.button>
        </div>
        
        {/* Insights section */}
        <div className="insights mt-10 animate-fadeIn opacity-0" style={{ animationDelay: "1.4s" }}>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              <span className="text-gray-600 text-sm">Super preciso</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span className="text-gray-600 text-sm">Só 2 minutinhos</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span className="text-gray-600 text-sm">+ 1000 pessoas já usaram</span>
            </div>
          </div>
        </div>
        
        {/* User stats */}
        <div className="user-stats mt-8 flex items-center justify-center animate-fadeIn opacity-0" style={{ animationDelay: "1.7s" }}>
          <div className="flex mr-3">
            <div className="avatar w-6 h-6 rounded-full bg-primary-light mr-[-8px] border-2 border-white"></div>
            <div className="avatar w-6 h-6 rounded-full bg-primary mr-[-8px] border-2 border-white"></div>
            <div className="avatar w-6 h-6 rounded-full bg-secondary border-2 border-white"></div>
          </div>
          <span className="text-gray-600 text-sm">30 pessoas usando agora mesmo</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
