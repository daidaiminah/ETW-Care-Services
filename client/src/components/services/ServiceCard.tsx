import React from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  bgColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon, bgColor = 'bg-gray-100' }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center p-6">
        <div className={`flex items-center justify-center w-20 h-20 rounded-full ${bgColor} mb-6`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{title}</h3>
        <p className="text-center text-gray-600 text-sm mb-4 hidden">{description}</p>
        <div className="border-t border-gray-200 w-24 my-4"></div>
        <Link 
          to={`/services#${id}`} 
          className="text-gray-700 font-medium uppercase text-sm tracking-wider hover:text-primary transition-colors"
        >
          LEARN MORE
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
