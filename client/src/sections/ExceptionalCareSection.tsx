import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import CareGivingImg from "../assets/images/african-social-worker-taking-care-senior-woman.jpg"

// FAQ Interface
interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const ExceptionalCareSection = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    if (expandedFaq === id) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(id);
    }
  };

  const faqs: FaqItem[] = [
    {
      id: 1,
      question: "How do I know if my loved one is ready for in-home senior care services?",
      answer: "Signs that indicate your loved one might benefit from in-home care include difficulty with daily activities like bathing or dressing, medication management problems, mobility issues, or noticeable changes in their home's cleanliness. We're happy to discuss your situation and help determine if in-home care is appropriate."
    },
    {
      id: 2,
      question: "How does personal care differ from other types of home care services?",
      answer: "Personal care specifically focuses on helping with activities of daily living such as bathing, dressing, grooming, toileting, and mobility assistance. This differs from companion care, which primarily provides social interaction and light housekeeping, or specialized care for conditions like dementia which requires specific training and approaches."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Exceptional Rehab In-Home Caregivers</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Serving adults of all ages, ETW Care Services of Rehab is a leading provider for home care, senior care and respite care in 
              Matthews, Charlotte, Huntersville, Mint Hill and the surrounding communities. Regardless of where someone lives, our home 
              care services enable our clients to live high-quality, meaningful lives. Every situation is different, and 
              ETW Care Services of 
              Rehab specializes in providing solutions that meet the individual needs of those who wish to continue living independently 
              at home, including seniors, those who need assistance with daily tasks, and people who struggle with loneliness and need a 
              caring person to spend time with. Whether you need our private home care services for a few hours each day or full-time, 
              we're here for you.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              ETW Care Services of Rehab is fully certified and compliant with Monrovia rules and regulations, and has a 
              <Link to="/team" className="text-primary hover:underline"> Registered Nurse on staff</Link> to provide even further assistance with the in-home caregiver needs of your loved one.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-6">What Sets Our Home Care Services Apart in Monrovia</h3>
             
            <p className="text-gray-700 mb-6 leading-relaxed">
              The care and support ETW Care Services of Rehab provides allows adults to age in place with independence and dignity. 
              Every caregiving situation is different and hiring a caregiver for in-home help is a big decision, so we have built a skilled in-
              home caregiver team dedicated to meeting needs of you and your loved one.
            </p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              With ETW Care Services of Rehab you can also expect:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">Experienced caregivers who are empathetic and committed to building relationships built on trust and respect.</li>
              <li className="text-gray-700">A home care assistance team who confidently creates the best home care plan for your family.</li>
              <li className="text-gray-700">A complete approach to care that physically, emotionally and socially supports your loved one.</li>
              <li className="text-gray-700">The information and guidance that you need to make the most informed choices possible for your individual situation.</li>
            </ul>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              You and your loved one deserve the best home care services available - for home care you can trust, call ETW Care Services of Rehab at (704) 595-2220.
            </p>
            
            <Link 
              to="/pricing" 
              className="inline-block bg-primary hover:bg-primary/70 text-white font-medium px-8 py-3 rounded uppercase text-sm tracking-wider transition duration-300"
            >
              HOME CARE PRICING
            </Link>
            
            <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-8">Frequently Asked Questions</h3>
            
            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div 
                  key={faq.id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="flex justify-between items-center w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span className="flex items-center">
                      <span className="flex items-center justify-center bg-primary text-white rounded-full w-6 h-6 text-sm mr-3">
                        {faq.id}
                      </span>
                      <span className="font-medium text-gray-700">{faq.question}</span>
                    </span>
                    <FaChevronDown 
                      className={`text-primary transition-transform duration-300 ${expandedFaq === faq.id ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {expandedFaq === faq.id && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full flex items-start justify-center"
          >
            <img 
              src={CareGivingImg}
              alt="Caregiver with elderly client" 
              className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/600x800/d7e5ea/1E40AF?text=Caregiver+with+Client";
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExceptionalCareSection;
