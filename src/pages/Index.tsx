
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Timer, ClipboardCheck, ArrowRight, Video, Compass, Mail, Phone, MapPin, Menu } from "lucide-react";
import AssessmentWizard from "@/components/assessment/AssessmentWizard";

const logo = "/lovable-uploads/d3aeafc9-4401-4dc6-808f-08b9288b0356.png";

const Index = () => {
  const [showAssessment, setShowAssessment] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const features = [{
    icon: Timer,
    title: "Rápido e Fácil",
    description: "Complete a avaliação em menos de 5 minutos"
  }, {
    icon: ClipboardCheck,
    title: "Confiável",
    description: "Baseado nas diretrizes mais recentes de saúde"
  }, {
    icon: Compass,
    title: "Orientação Clara",
    description: "Receba recomendações personalizadas imediatamente"
  }];

  const handleLogoClick = () => {
    setShowAssessment(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const scrollToSection = (id: string): void => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTeleconsultaClick = () => {
    window.open('https://phs.telemedicina.drtis.com.br', '_blank', 'noopener,noreferrer');
  };

  return <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5">
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
                    className="nav-link py-2 px-1"
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

      {!showAssessment ? <main>
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
                  onClick={() => setShowAssessment(true)}
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

          <section className="modern-section">
            <div className="modern-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="modern-section-title">Confiável e Eficiente</h2>
                <p className="modern-section-subtitle">
                  Nossa plataforma utiliza tecnologia avançada e protocolos médicos atualizados para fornecer
                  uma avaliação rápida, segura e confiável dos seus sintomas.
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
                  >
                    <div className="modern-card modern-3d-card group">
                      <div className="mb-8 p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-all duration-300">
                        <feature.icon className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-center leading-relaxed mb-6">{feature.description}</p>
                      
                      <div className="mt-auto pt-4 border-t border-gray-100 flex justify-center">
                        <button className="text-primary font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                          Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

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
                  <div className="max-w-xs mx-auto md:mx-0 mb-6 md:mb-0">
                    <img 
                      src={logo} 
                      alt="Wellwave Logo" 
                      className="h-auto w-full max-w-[280px]" 
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
          
          <section id="contato" className="modern-section bg-gradient-to-br from-gray-50 to-primary/5">
            <div className="modern-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="modern-section-title">Entre em Contato</h2>
                <p className="modern-section-subtitle">
                  Tem dúvidas sobre nossos serviços? Entre em contato com nossa equipe ou envie uma mensagem
                  diretamente pelo formulário abaixo e retornaremos em até 24 horas.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
                <motion.div
                  className="md:col-span-3 bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                        <input
                          type="text"
                          id="name"
                          className="modern-input w-full focus:ring-primary focus:border-primary"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="modern-input w-full focus:ring-primary focus:border-primary"
                          placeholder="seu.email@exemplo.com"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                      <input
                        type="text"
                        id="subject"
                        className="modern-input w-full focus:ring-primary focus:border-primary"
                        placeholder="Assunto da mensagem"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="modern-input w-full focus:ring-primary focus:border-primary"
                        placeholder="Sua mensagem..."
                      ></textarea>
                    </div>
                    <motion.button
                      type="submit"
                      className="modern-button w-full group"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Enviar Mensagem <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                  </form>
                </motion.div>
                
                <motion.div
                  className="md:col-span-2 space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">contato@wellwave.com.br</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Telefone</h3>
                      <p className="text-gray-600">(11) 4002-8922</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Endereço</h3>
                      <p className="text-gray-600">Av. Paulista, 1000 - São Paulo, SP</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main> : <AssessmentWizard />}

      <footer className="modern-footer">
        <div className="modern-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src={logo} 
                  alt="Wellwave Logo" 
                  className="h-12 w-auto" 
                />
                <div>
                  <div className="text-xl font-semibold text-white">Wellwave</div>
                  <div className="text-xs text-gray-400">Saúde Digital</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6">Soluções digitais para saúde acessível e de qualidade, conectando pacientes e profissionais de saúde através da tecnologia.</p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-primary transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-primary transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-primary transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="modern-footer-title">Links Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="modern-footer-link group flex items-center"
                  >
                    <span className="mr-2 w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300"></span>
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    className="modern-footer-link group flex items-center"
                  >
                    <span className="mr-2 w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300"></span>
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="modern-footer-link group flex items-center"
                  >
                    <span className="mr-2 w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300"></span>
                    Contato
                  </a>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="modern-footer-title">Serviços</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="modern-footer-link group flex items-center">
                    <span className="mr-2 w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300"></span>
                    Avaliação de Dengue
                  </a>
                </li>
                <li>
                  <a href="#" className="modern-footer-link group flex items-center">
                    <span className="mr-2 w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300"></span>
                    Acompanhamento
                  </a>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="modern-footer-title">Horário de Atendimento</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <div className="mr-3 p-2 rounded-full bg-gray-800 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>Segunda - Sexta: 8h às 20h</div>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 p-2 rounded-full bg-gray-800 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>Sábado: 8h às 14h</div>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 p-2 rounded-full bg-gray-800 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>Domingo: Plantão online</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p
                className="text-gray-400 text-sm mb-4 md:mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                © 2025 WellWave Saúde Digital | Todos os direitos reservados
              </motion.p>
              <motion.div
                className="flex space-x-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Termos de Uso</a>
                <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Política de Privacidade</a>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
