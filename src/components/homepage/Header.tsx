
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

type HeaderProps = {
  handleLogoClick: () => void;
  scrollToSection: (id: string) => void;
  logo: string;
};

const Header = ({ handleLogoClick, scrollToSection, logo }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Navigation items array for cleaner rendering
  const navItems = [
    { name: "Início", href: "#", action: handleLogoClick },
    { name: "Sobre", href: "#sobre", action: () => scrollToSection('sobre') },
    { name: "Contato", href: "#contato", action: () => scrollToSection('contato') }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header className="modern-header sticky top-0 z-50 backdrop-blur-md bg-white/90">
      <div className="modern-container modern-header-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="logo-container"
          onClick={handleLogoClick}
        >
          <motion.img 
            src={logo} 
            alt="Wellwave Logo" 
            className="h-10 w-auto object-contain"
            whileHover={{ 
              rotate: [0, -5, 5, -5, 0], 
              filter: "brightness(1.1)",
              transition: { duration: 0.5 } 
            }}
          />
        </motion.div>
        
        <motion.nav 
          className="hidden md:block" 
          role="navigation" 
          aria-label="Menu Principal"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ul className="flex gap-6 items-center">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); item.action(); setIsMenuOpen(false); }}
                  className="nav-link py-2 px-1 text-base"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        <div className="md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
          
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-4 mt-2 w-48 rounded-xl shadow-xl bg-white/98 backdrop-blur-md border border-gray-100 py-3 z-50 overflow-hidden"
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      variants={itemVariants}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); item.action(); setIsMenuOpen(false); }}
                      className="block px-5 py-2.5 text-gray-700 hover:bg-primary/10 hover:text-primary transition-all duration-300 relative"
                      whileHover={{ x: 5 }}
                      custom={index}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
