import { motion } from 'framer-motion';
import { FaUserNurse } from 'react-icons/fa';
import ServiceDetail from '../../components/services/ServiceDetail';

const SeniorCare = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-4">Senior Care Services</h1>
            <p className="text-xl text-gray-600">
              Compassionate support for seniors to remain independent and safe in the comfort of their own homes.
            </p>
          </div>
        </div>
      </div>
      
      <ServiceDetail
        title="Senior Care"
        description="ETW Care Services provides exceptional in-home care that allows seniors to age in place with dignity and independence. Our dedicated caregivers offer personalized support tailored to the unique needs of each senior, from basic assistance with daily activities to specialized care. We understand the challenges seniors face and provide compassionate care that enhances quality of life while respecting independence."
        icon={<FaUserNurse size={36} color="#fff" />}
        benefits={[
          "Personalized care plans designed for each senior's specific needs and preferences",
          "Assistance with daily living activities such as bathing, dressing, and grooming",
          "Medication reminders and monitoring to ensure proper management",
          "Meal preparation focusing on nutritional needs and dietary restrictions",
          "Light housekeeping to maintain a clean and safe living environment",
          "Transportation to medical appointments, shopping, and social activities",
          "Regular companionship to prevent loneliness and isolation",
          "Peace of mind for family members knowing their loved one is receiving quality care"
        ]}
        iconBgColor="bg-green-600"
        image="/src/assets/images/senior-care.jpg"
      />
    </motion.div>
  );
};

export default SeniorCare;
