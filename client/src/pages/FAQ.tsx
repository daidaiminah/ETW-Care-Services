import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
}

const FaqItem = ({ question, answer, isOpen, toggleOpen, index }: FaqItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-gray-200 rounded-lg overflow-hidden mb-4"
    >
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
      >
        <span className="font-medium text-gray-800">{question}</span>
        <FaChevronDown 
          className={`text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="prose prose-sm max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "How do I know if my loved one is ready for in-home care?",
      answer: `
        <p>Look for these common signs that indicate in-home care might be beneficial:</p>
        <ul>
          <li>Difficulty with daily activities like bathing, dressing, or meal preparation</li>
          <li>Medication management issues</li>
          <li>Noticeable decline in home cleanliness or personal hygiene</li>
          <li>Mobility challenges or recent falls</li>
          <li>Increased isolation or signs of loneliness</li>
          <li>Weight loss or poor nutrition</li>
          <li>Cognitive changes or memory issues</li>
        </ul>
        <p>If you notice several of these signs, we recommend scheduling a free care consultation to discuss your specific situation.</p>
      `
    },
    {
      question: "How are your caregivers screened and trained?",
      answer: `
        <p>We maintain rigorous hiring standards to ensure our caregivers provide exceptional care:</p>
        <ul>
          <li>Comprehensive background checks</li>
          <li>Verification of experience and certifications</li>
          <li>Multiple interviews and reference checks</li>
          <li>Drug screening</li>
        </ul>
        <p>All caregivers complete our thorough training program covering:</p>
        <ul>
          <li>Personal care techniques</li>
          <li>Safety procedures and emergency protocols</li>
          <li>Communication skills</li>
          <li>Dementia care approaches</li>
          <li>Fall prevention</li>
          <li>Infection control</li>
        </ul>
        <p>Additionally, we provide ongoing education and specialized training for specific client needs.</p>
      `
    },
    {
      question: "How do you match caregivers with clients?",
      answer: `
        <p>Our matching process considers multiple factors to ensure a successful care relationship:</p>
        <ul>
          <li>Care needs and level of assistance required</li>
          <li>Personality traits and preferences</li>
          <li>Specific skills or experience needed</li>
          <li>Schedule requirements</li>
          <li>Language or cultural preferences</li>
          <li>Hobbies and interests</li>
        </ul>
        <p>We take time to understand both our clients and our caregivers as individuals, allowing us to create matches that go beyond just meeting physical care needs. If at any time you feel the match isn't optimal, we'll work quickly to find a better fit.</p>
      `
    },
    {
      question: "What if our caregiver is sick or unavailable?",
      answer: `
        <p>We understand the importance of consistent care and have systems in place to handle caregiver absences:</p>
        <ul>
          <li>A team of backup caregivers familiar with your care needs</li>
          <li>A Care Coordinator available 24/7 to manage schedule changes</li>
          <li>Advance notice whenever possible for planned absences</li>
          <li>Careful matching of replacement caregivers to maintain continuity of care</li>
        </ul>
        <p>Your care is our priority, and we guarantee that qualified care will always be available when scheduled.</p>
      `
    },
    {
      question: "How does billing work? Do you accept insurance?",
      answer: `
        <p>Our billing process is straightforward and transparent:</p>
        <ul>
          <li>Services are billed hourly, with detailed weekly or monthly invoices</li>
          <li>Multiple payment options including automatic payments</li>
          <li>No long-term contracts required in most cases</li>
        </ul>
        <p>Regarding insurance:</p>
        <ul>
          <li>We work with most long-term care insurance policies</li>
          <li>We can help determine if your policy covers our services</li>
          <li>We accept VA Aid & Attendance benefits</li>
          <li>Medicare typically does not cover non-medical home care</li>
          <li>Medicaid coverage varies by state and program</li>
        </ul>
        <p>We're happy to discuss payment options and help you understand potential coverage sources. <a href="/pricing" class="text-primary hover:underline">View our pricing page</a> for more information.</p>
      `
    },
    {
      question: "Can your services change if my loved one's needs change?",
      answer: `
        <p>Absolutely. Our care plans are designed to be flexible and responsive to changing needs:</p>
        <ul>
          <li>Regular reassessments to evaluate current needs</li>
          <li>Care plans can be easily adjusted (adding hours, services, or specialized care)</li>
          <li>Seamless transitions between different types of care (companion to personal care, etc.)</li>
          <li>Coordination with healthcare providers to address new medical recommendations</li>
        </ul>
        <p>We understand that needs often evolve over time, and our goal is to provide the right level of support at every stage. Our Care Coordinators work closely with families to ensure care plans remain appropriate and effective.</p>
      `
    },
    {
      question: "What geographic areas do you serve?",
      answer: `
        <p>ETW Care Services proudly serves clients throughout the Rehab area, including:</p>
        <ul>
          <li>Rehab</li>
          <li>Thinker's Village</li>
          <li>Lover's Street</li>
          <li>Cooper's Farm</li>
          <li>Surrounding communities</li>
        </ul>
        <p>If you're unsure if we serve your specific location, please <a href="/contact" class="text-primary hover:underline">contact us</a> and we'll be happy to discuss your needs.</p>
      `
    },
    {
      question: "How do we get started with your services?",
      answer: `
        <p>Getting started is simple:</p>
        <ol>
          <li><strong>Initial Consultation:</strong> Call us at (704) 595-2220 or <a href="/contact" class="text-primary hover:underline">complete our online form</a> to schedule a free, no-obligation consultation.</li>
          <li><strong>Assessment:</strong> We'll meet with you and your loved one to understand needs, preferences, and goals.</li>
          <li><strong>Care Plan Development:</strong> We'll create a personalized care plan based on the assessment.</li>
          <li><strong>Caregiver Matching:</strong> We'll carefully select caregivers who match your needs and preferences.</li>
          <li><strong>Begin Service:</strong> Care begins on your schedule, with ongoing support from our care management team.</li>
        </ol>
        <p>We can typically begin services within 24-48 hours of the initial assessment, or on a schedule that works for you.</p>
      `
    }
  ];
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-700">
              Find answers to common questions about our home care services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    toggleOpen={() => toggleFaq(index)}
                    index={index}
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Have More Questions?</h3>
              <p className="text-gray-600 mb-6">
                We're happy to answer any other questions you might have about our services.
                Contact us today to learn more about how we can help you or your loved one.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-block bg-primary hover:bg-primary/80 text-white font-medium px-6 py-3 rounded transition duration-300"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:+17045952220"
                  className="inline-block bg-white hover:bg-gray-100 text-primary border border-primary font-medium px-6 py-3 rounded transition duration-300"
                >
                  Call (704) 595-2220
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default FAQ;
