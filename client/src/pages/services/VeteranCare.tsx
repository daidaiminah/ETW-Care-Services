import { motion } from 'framer-motion';
import { FaMedal } from 'react-icons/fa';
import ServiceDetail from '../../components/services/ServiceDetail';

const VeteranCare = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-4">Veteran Care Services</h1>
            <p className="text-xl text-gray-600">
              Specialized care and support for veterans, honoring their service with dignity and respect.
            </p>
          </div>
        </div>
      </div>
      
      <ServiceDetail
        title="Veteran Care"
        description="ETW Care Services proudly offers specialized care for veterans, designed to address the unique needs and challenges they may face. As a veteran-owned business, we have firsthand understanding of military experience and the transition to civilian life. Our dedicated caregivers provide compassionate support while honoring the service and sacrifice of our veteran clients. We also help navigate VA benefits and resources, ensuring veterans receive all the support they're entitled to while maintaining independence and dignity."
        icon={<FaMedal size={36} color="#fff" />}
        benefits={[
          "Caregivers trained to understand and address the unique needs of veterans",
          "Assistance with accessing and maximizing VA benefits and resources",
          "Support for veterans dealing with service-related conditions",
          "Understanding approach to PTSD and other service-connected challenges",
          "Transportation to VA medical facilities and appointments",
          "Coordination with VA healthcare providers and services",
          "Companionship from caregivers who respect and honor military service",
          "Specialized care that promotes independence, dignity, and quality of life"
        ]}
        iconBgColor="bg-yellow-400"
        image="/src/assets/images/veteran-care.jpg"
      />
    </motion.div>
  );
};

export default VeteranCare;
