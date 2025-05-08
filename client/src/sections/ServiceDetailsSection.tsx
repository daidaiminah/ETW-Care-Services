import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import icons from react-icons
import { FaHeartbeat, FaBed, FaHandHoldingHeart, FaMedal } from 'react-icons/fa';
import { MdOutlinePersonalInjury } from 'react-icons/md';
import { GiHealthNormal } from 'react-icons/gi';

const servicesData = [
  {
    id: 'personal-care',
    title: 'Personal Care',
    description: 'Our professional caregivers provide assistance with activities of daily living such as bathing, dressing, grooming, medication reminders, and mobility support, all tailored to your specific needs and preferences.',
    icon: <MdOutlinePersonalInjury size={36} color="#fff" />,
    bgColor: 'bg-green-600',
    benefits: [
      'Assistance with personal hygiene and grooming',
      'Medication reminders and management',
      'Mobility assistance and fall prevention',
      'Respectful and dignified care at all times'
    ]
  },
  {
    id: 'companion-care',
    title: 'Companion Care',
    description: 'Our companion care provides meaningful social interaction, emotional support, and assistance with everyday tasks to combat loneliness and isolation while improving overall quality of life.',
    icon: <FaHandHoldingHeart size={36} color="#fff" />,
    bgColor: 'bg-rose-400',
    benefits: [
      'Meaningful conversation and social engagement',
      'Assistance with hobbies and activities',
      'Light housekeeping and meal preparation',
      'Transportation to appointments and social events'
    ]
  },
  {
    id: 'respite-care',
    title: 'Respite Care',
    description: 'Our respite care services offer primary caregivers a much-needed break while ensuring their loved ones receive the highest quality care in their absence, whether for a few hours, days, or weeks.',
    icon: <GiHealthNormal size={36} color="#fff" />,
    bgColor: 'bg-yellow-400',
    benefits: [
      'Temporary relief for family caregivers',
      'Flexible scheduling options to meet your needs',
      'Peace of mind knowing your loved one is in good hands',
      'Same high-quality care standards as our regular services'
    ]
  },
  {
    id: 'dementia-care',
    title: 'Dementia Care',
    description: 'Our specialized dementia care services are delivered by trained professionals who understand the unique challenges of Alzheimer\'s and other forms of dementia, focusing on dignity, comfort, and quality of life.',
    icon: <FaHeartbeat size={36} color="#fff" />,
    bgColor: 'bg-orange-400',
    benefits: [
      'Specialized training in Teepa Snow\'s Positive Approach to Care',
      'Safe and secure environment to prevent wandering',
      'Engaging activities designed for cognitive stimulation',
      'Consistent routines to reduce anxiety and confusion'
    ]
  },
  {
    id: 'hospice-care',
    title: 'Hospice Care',
    description: 'Our compassionate hospice care support services work alongside your hospice provider to ensure comfort, dignity, and quality of life during end-of-life care for both patients and their families.',
    icon: <FaBed size={36} color="#fff" />,
    bgColor: 'bg-blue-300',
    benefits: [
      'Compassionate end-of-life care focused on comfort',
      'Coordination with hospice medical providers',
      'Emotional support for patients and family members',
      'Assistance with personal care and household needs'
    ]
  },
  {
    id: 'veteran-care',
    title: 'Veteran Care',
    description: 'Our veteran care services are tailored to the unique needs of those who served our country, with caregivers who understand military culture and assistance navigating VA benefits.',
    icon: <FaMedal size={36} color="#fff" />,
    bgColor: 'bg-yellow-400',
    benefits: [
      'Caregivers trained in veteran-specific needs',
      'Assistance with VA benefits and programs',
      'Understanding of military culture and experiences',
      'Support for service-related health issues'
    ]
  }
];

const ServiceDetailsSection = () => {
  return (
    <div className="grid grid-cols-1 gap-12">
      {servicesData.map((service) => (
        <motion.div 
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
          id={service.id}
        >
          <div className="grid md:grid-cols-12 gap-0">
            {/* Icon and title section */}
            <div className="md:col-span-3 p-8 flex flex-col items-center justify-center bg-gray-50">
              <div className={`flex items-center justify-center w-24 h-24 rounded-full ${service.bgColor} mb-6`}>
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 text-center">{service.title}</h2>
            </div>
            
            {/* Description and benefits */}
            <div className="md:col-span-9 p-8">
              <p className="text-lg text-gray-700 mb-6">{service.description}</p>
              
              <h3 className="font-semibold text-lg text-primary mb-4">Benefits:</h3>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded uppercase text-sm tracking-wider transition-colors duration-300"
                >
                  REQUEST THIS SERVICE
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      
      <div className="text-center mt-8">
        <Link 
          to="/pricing" 
          className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded uppercase tracking-wider font-medium transition duration-300"
        >
          REQUEST PRICING
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetailsSection;