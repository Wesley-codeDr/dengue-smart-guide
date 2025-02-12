
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-12 bg-gradient-to-b from-primary to-primary-light"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Avaliação de Dengue Online
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
        Avalie seus sintomas rapidamente e receba orientações personalizadas sobre os próximos passos
      </p>
    </motion.header>
  );
};

export default Header;
