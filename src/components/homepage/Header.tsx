
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

type HeaderProps = {
  handleLogoClick: () => void;
  scrollToSection: (id: string) => void;
  logo: string;
};

const Header = ({ handleLogoClick, scrollToSection, logo }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
            className="h-14 w-auto object-contain"
            whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
          />
        </motion.div>
        
        <nav className="hidden md:block" role="navigation" aria-label="Menu Principal">
          <ul className="flex gap-8">
            {[
              { name: "Início", href: "#", action: handleLogoClick },
              { name: "Sobre", href: "#sobre", action: () => scrollToSection('sobre') },
              { name: "Contato", href: "#contato", action: () => scrollToSection('contato') }
            ].map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); item.action(); }}
                  className="nav-link py-2 px-1 group"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-button"
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </motion.button>
          
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full right-4 mt-2 w-48 rounded-lg shadow-lg bg-white/95 backdrop-blur-md border border-gray-100 py-2 z-50"
            >
              {[
                { name: "Início", href: "#", action: handleLogoClick },
                { name: "Sobre", href: "#sobre", action: () => scrollToSection('sobre') },
                { name: "Contato", href: "#contato", action: () => scrollToSection('contato') }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); item.action(); }}
                  className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
