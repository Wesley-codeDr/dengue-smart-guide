
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-8 md:py-12 bg-gradient-to-b from-primary to-primary-light px-4"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
        {isMobile ? "Avaliação de Dengue" : "Avaliação de Dengue Online"}
      </h1>
      <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
        Avalie seus sintomas rapidamente e receba orientações personalizadas
      </p>
    </motion.header>
  );
};

export default Header;
