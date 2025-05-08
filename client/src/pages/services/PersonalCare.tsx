import { motion } from 'framer-motion';
import { MdOutlinePersonalInjury } from 'react-icons/md';
import ServiceDetail from '../../components/services/ServiceDetail';

const PersonalCare = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-4">Personal Care Services</h1>
            <p className="text-xl text-gray-600">
              Dignified assistance with daily living activities while promoting independence and wellbeing.
            </p>
          </div>
        </div>
      </div>
      
      <ServiceDetail
        title="Personal Care"
        description="ETW Care Services provides compassionate personal care assistance that helps individuals maintain independence and dignity in their daily lives. Our trained caregivers offer respectful support with personal hygiene, mobility, and other essential activities of daily living. We understand the sensitive nature of personal care and ensure that all services are delivered with the utmost respect, maintaining privacy and promoting the highest level of independence possible for each client."
        icon={<MdOutlinePersonalInjury size={36} color="#fff" />}
        benefits={[
          "Dignified assistance with bathing, grooming, and personal hygiene",
          "Help with dressing and maintaining personal appearance",
          "Mobility assistance to prevent falls and ensure safety",
          "Toileting and incontinence care with respect and privacy",
          "Medication reminders to ensure proper adherence to prescribed regimens",
          "Assistance with feeding when needed",
          "Transfer assistance between bed, chair, and wheelchair",
          "Personalized care plans that adapt to changing needs and abilities"
        ]}
        iconBgColor="bg-green-600"
        image="/src/assets/images/personal-care.jpg"
      />
    </motion.div>
  );
};

export default PersonalCare;
