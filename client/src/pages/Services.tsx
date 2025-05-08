import { motion } from 'framer-motion';
import ServiceDetailsSection from '../sections/ServiceDetailsSection';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full py-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Our Care Services</h1>
        <ServiceDetailsSection />
      </div>
    </motion.div>
  );
};

export default Services;
