import { motion } from 'framer-motion';

const AboutHeroSection = () => {
  return (
    <section className="bg-primary text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="text-xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At ETW Care Services, we believe everyone deserves compassionate, dignified care.
            Our journey began with a simple mission: to provide exceptional care services that enhance
            the quality of life for our clients and bring peace of mind to their families.
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-20 h-1 bg-white rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
