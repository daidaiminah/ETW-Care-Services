import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full py-16"
    >
      <motion.div className="container mx-auto px-4">
        <motion.h1 className="text-4xl font-bold text-center mb-12 text-primary">Contact Us</motion.h1>
        <motion.div className="grid md:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
