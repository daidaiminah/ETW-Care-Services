import { motion } from 'framer-motion';

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <h2 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-primary-light p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">Our Location</h3>
            <p className="text-gray-600">
              123 Care Street<br />
              Suite 456<br />
              New York, NY 10001
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary-light p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
            <p className="text-gray-600 mb-1">Main: (555) 123-4567</p>
            <p className="text-gray-600">Toll-free: 1-800-CARE-123</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary-light p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">Email</h3>
            <p className="text-gray-600">info@etwcareservices.com</p>
            <p className="text-gray-600">support@etwcareservices.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary-light p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">Hours of Operation</h3>
            <p className="text-gray-600 mb-1">Monday - Friday: 8:00 AM - 8:00 PM</p>
            <p className="text-gray-600 mb-1">Saturday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Sunday: Closed (Emergency Care Available)</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
