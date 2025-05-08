import { motion } from 'framer-motion';
import { GiHealthNormal } from 'react-icons/gi';
import ServiceDetail from '../../components/services/ServiceDetail';

const RespiteCare = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-4">Respite Care Services</h1>
            <p className="text-xl text-gray-600">
              Temporary relief for family caregivers, ensuring your loved one receives quality care while you rest and recharge.
            </p>
          </div>
        </div>
      </div>
      
      <ServiceDetail
        title="Respite Care"
        description="ETW Care Services offers reliable respite care to provide family caregivers with essential breaks from the demands of caring for a loved one. Our compassionate caregivers step in temporarily, whether for a few hours, days, or weeks, allowing family caregivers to rest, handle personal matters, or simply recharge. We maintain the same routines and care standards the primary caregiver has established, ensuring continuity of care and peace of mind."
        icon={<GiHealthNormal size={36} color="#fff" />}
        benefits={[
          "Flexible scheduling options, from a few hours to several days or weeks",
          "Maintenance of established care routines and preferences",
          "Prevention of caregiver burnout and associated health issues",
          "Opportunity for family caregivers to attend to personal needs and commitments",
          "Professional care that meets the same standards as permanent caregiving",
          "No long-term commitment required—available when you need it",
          "Peace of mind knowing your loved one is in capable hands",
          "Comprehensive care that addresses physical, emotional, and social needs"
        ]}
        iconBgColor="bg-yellow-400"
        image="/src/assets/images/respite-care.jpg"
      />
    </motion.div>
  );
};

export default RespiteCare;
