
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
