import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

const AreasServedSection = () => {
  return (
    <section className="py-16 border-t border-gray-200">
      <div className="container mx-auto px-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content - info box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary/10 rounded-lg text-primary p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6">Areas We Serve</h2>
            <p className="mb-6">
              ETW Care Services of Rehab is proud to offer our home care services to families in:
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Rehab</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <Link to="/areas/thinkersvillage" className="flex items-center hover:underline">
                    <span>Thinker's Village</span>
                    <FaExternalLinkAlt size={12} className="ml-1" />
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Lover's Street</span>
                </li>
              </ul>
              
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <Link to="/areas/coopersfarm" className="flex items-center hover:underline">
                    <span>Cooper's Farm</span>
                    <FaExternalLinkAlt size={12} className="ml-1" />
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Omage</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Red Light</span>
                </li>
              </ul>
            </div>
            
            <p className="italic mb-6">Also serving the surrounding areas.</p>
            
            <Link
              to="/pricing"
              className="inline-block bg-primary hover:bg-primary/70 text-white font-medium px-6 py-3 rounded uppercase text-sm tracking-wider transition duration-300"
            >
              REQUEST PRICING
            </Link>
          </motion.div>
          
          {/* Right content - map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              {/* Google Maps iframe with Rehab */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.791877873438!2d-10.764699224153228!3d6.29106232581904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0a03005792ffb9%3A0x118b0d4e1e9bbff9!2sRehab%20community!5e0!3m2!1sen!2s!4v1746733002313!5m2!1sen!2s" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Rehab community location"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AreasServedSection;
