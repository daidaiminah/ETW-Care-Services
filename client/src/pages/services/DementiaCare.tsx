import { motion } from 'framer-motion';
import { FaHeartbeat } from 'react-icons/fa';
import ServiceDetail from '../../components/services/ServiceDetail';

const DementiaCare = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-4">Dementia Care Services</h1>
            <p className="text-xl text-gray-600">
              Specialized care for individuals with dementia or Alzheimer's disease, providing safety, dignity, and engagement.
            </p>
          </div>
        </div>
      </div>
      
      <ServiceDetail
        title="Dementia Care"
        description="ETW Care Services offers specialized dementia care that focuses on the unique needs of individuals living with Alzheimer's disease or other forms of dementia. Our caregivers are specially trained in best practices for dementia care, using the Positive Approach to Care techniques. We provide a safe, structured environment while maximizing independence and maintaining dignity, working closely with families to develop personalized care strategies that adapt as needs change."
        icon={<FaHeartbeat size={36} color="#fff" />}
        benefits={[
          "Caregivers specially trained in dementia care techniques and approaches",
          "Structured daily routines that provide consistency and reduce anxiety",
          "Memory-enhancing activities to maintain cognitive function",
          "Safety monitoring to prevent wandering and other risks",
          "Assistance with personal care needs while preserving dignity",
          "Redirection techniques for challenging behaviors",
          "Meaningful engagement and activities tailored to abilities and interests",
          "Regular communication with family members about changes and progress"
        ]}
        iconBgColor="bg-orange-500"
        image="/src/assets/images/dementia-care.jpg"
      />
    </motion.div>
  );
};

export default DementiaCare;
