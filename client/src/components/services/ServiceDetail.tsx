import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ServiceDetailProps {
  title: string;
  description: string;
  icon: ReactNode;
  benefits: string[];
  iconBgColor: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

const ServiceDetail = ({ 
  title, 
  description, 
  icon, 
  benefits, 
  iconBgColor, 
  image,
  ctaText = "REQUEST THIS SERVICE",
  ctaLink = "/contact"
}: ServiceDetailProps) => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Left column with icon and title */}
          <div className="md:col-span-4 lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="sticky top-24"
            >
              <div className="flex flex-col items-center md:items-start">
                <div className={`${iconBgColor} w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-md`}>
                  {icon}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">{title}</h1>
                
                <Link 
                  to={ctaLink}
                  className="bg-primary hover:bg-primary/80 text-white text-center font-medium px-6 py-3 rounded shadow-md transition duration-300 w-full md:w-auto"
                >
                  {ctaText}
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Right column with content */}
          <div className="md:col-span-8 lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    // Fallback image if the provided image fails to load
                    e.currentTarget.src = "https://placehold.co/800x400/e2e8f0/1e40af?text=Care+Services";
                  }}
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-8 leading-relaxed">{description}</p>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits of Our {title}</h2>
                
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Choose ETW Care Services?</h3>
                  <p className="text-gray-700">
                    Our caregivers are thoroughly screened, trained, and insured. We match caregivers not only based on 
                    skills and experience but also personality and compatibility to ensure the best possible care relationship.
                  </p>
                </div>
                
                <div className="text-center mt-12">
                  <Link 
                    to="/pricing" 
                    className="bg-primary hover:bg-primary/80 text-white font-medium px-8 py-3 rounded inline-block"
                  >
                    REQUEST PRICING INFORMATION
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
