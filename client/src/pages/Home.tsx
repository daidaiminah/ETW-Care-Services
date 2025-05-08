import { motion } from 'framer-motion';
import HeroSection from '../sections/HeroSection';
import InfoSection from '../sections/InfoSection';
import ServicesSection from '../sections/ServicesSection';
import AreasServedSection from '../sections/AreasServedSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import MeetFleminSection from '../sections/MeetFleminSection';
import AwardsSection from '../sections/AwardsSection';
import ExceptionalCareSection from '../sections/ExceptionalCareSection';
import CTASection from '../sections/CTASection';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      <HeroSection />
      <InfoSection />
      <ServicesSection />
      <AreasServedSection />
      <TestimonialsSection />
      <MeetFleminSection />
      <AwardsSection />
      <ExceptionalCareSection />
      <CTASection />
    </motion.div>
  );
};

export default Home;
