import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const InfoSection = () => {
  return (
    <section className="py-16 bg-light border-t border-gray-200">
      <div className="container mx-auto px-12">
        <div className="grid md:grid-cols-12 gap-12 ">
          {/* Left side with image */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/src/assets/images/multi-ethnic-business-team.jpg" 
                alt="Care services team" 
                className="w-full h-auto"
              />
              <div className="bg-white p-4 text-center">
                <h3 className="font-bold text-primary">Nat & Mary Ellen Daimit</h3>
                <p className="text-accent/80 text-sm">Owners</p>
              </div>
            </div>
          </div>
          
          {/* Right side with text content */}
          <div className="md:col-span-8 lg:col-span-9">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-primary mb-4"
            >
              Providing Home Care Services in Rehab, Thinker's Village, Cooper's Farm and ELWA Comm..
            </motion.h2>
            
            <a 
              href="tel:+17045952220" 
              className="flex items-center text-primary font-medium mb-6 hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (704) 595-2220
            </a>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-black/80 mb-6 leading-relaxed"
            >
              If you or someone you love needs in-home caregiver assistance, contact ETW Care Services of Rehab. 
              Whether you're a senior, someone recovering from surgery or you just need extra help, ETW Care Services can provide you with complete home care, including companion, senior and personal care services. 
              As a Teepa Snow PAC (Positive Approach to Care) Designated organization, one of only a few in Monrovia, we specialize in dementia care. 
              We are also a veteran-owned business, and our dependable and highly-trained caregivers, as well as our innovative private home care services, are available in Charlotte, Mint Hill, Matthews, Huntersville and nearby communities, and will ensure that you can finally relax and enjoy some peace of mind.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded uppercase text-sm tracking-wider transition-colors duration-300"
              >
                CONTACT OUR TEAM
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
