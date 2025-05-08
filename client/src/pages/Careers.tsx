import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaHeart, FaCalendarAlt, FaMoneyBillWave, FaGraduationCap, FaUsers, FaClipboardCheck } from 'react-icons/fa';

interface JobPostingProps {
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Flexible';
  description: string;
  requirements: string[];
  id: string;
  postedDate: string;
}

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full"
    >
      <div className="text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const JobPosting = ({ 
  title, 
  location, 
  type, 
  description, 
  requirements,
  id,
  postedDate
}: JobPostingProps) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
    >
      <div className="p-6">
        <div className="flex flex-wrap justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
            <p className="text-gray-600">{location}</p>
          </div>
          <div className="mt-2 sm:mt-0">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              type === 'Full-time' ? 'bg-green-100 text-green-800' :
              type === 'Part-time' ? 'bg-blue-100 text-blue-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {type}
            </span>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-500">Posted: {postedDate}</p>
        </div>
        
        <div className={`transition-all duration-300 overflow-hidden ${expanded ? 'max-h-[2000px]' : 'max-h-24'}`}>
          <p className="text-gray-700 mb-6">{description}</p>
          
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-2">Requirements:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {requirements.map((requirement, index) => (
                <li key={index} className="text-gray-700">{requirement}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-2">How to Apply:</h4>
            <p className="text-gray-700">
              To apply for this position, please send your resume and cover letter to 
              <a href="mailto:careers@etwcareservices.com" className="text-primary hover:underline"> careers@etwcareservices.com</a> with 
              the subject line "Application for {title} - {id}".
            </p>
          </div>
        </div>
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary hover:text-primary/80 font-medium focus:outline-none transition-colors duration-300"
        >
          {expanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
      
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <a 
          href={`/careers/apply?job=${id}`}
          className="inline-block bg-primary hover:bg-primary/80 text-white font-medium px-6 py-2 rounded transition duration-300"
        >
          Apply Now
        </a>
      </div>
    </motion.div>
  );
};

const Careers = () => {
  const benefits = [
    {
      icon: <FaMoneyBillWave size={32} />,
      title: "Competitive Pay",
      description: "We offer industry-leading wages that recognize your skills, experience, and dedication to quality care."
    },
    {
      icon: <FaCalendarAlt size={32} />,
      title: "Flexible Scheduling",
      description: "Choose shifts that work with your lifestyle and obligations, with both part-time and full-time opportunities available."
    },
    {
      icon: <FaGraduationCap size={32} />,
      title: "Ongoing Training",
      description: "Access continuous education opportunities to build your skills and advance your caregiving career."
    },
    {
      icon: <FaHeart size={32} />,
      title: "Meaningful Work",
      description: "Make a real difference in people's lives every day, creating lasting relationships with clients and families."
    },
    {
      icon: <FaUsers size={32} />,
      title: "Supportive Team",
      description: "Join a collaborative environment where you'll receive mentorship, guidance, and respect from leadership."
    },
    {
      icon: <FaClipboardCheck size={32} />,
      title: "Career Growth",
      description: "Develop professionally with opportunities for advancement, specialization, and leadership roles."
    }
  ];
  
  const jobPostings: JobPostingProps[] = [
    {
      title: "Senior Caregiver",
      location: "Rehab Community",
      type: "Full-time",
      description: "We're seeking compassionate, dedicated caregivers to provide personal care and companionship to seniors in their homes. In this role, you'll help clients maintain their independence and quality of life by assisting with daily activities, providing emotional support, and ensuring a safe environment.",
      requirements: [
        "Previous caregiving experience (1+ years preferred)",
        "Ability to perform physical tasks including lifting, transferring, and mobility assistance",
        "Strong communication and interpersonal skills",
        "Reliable transportation",
        "Current CPR and First Aid certification (or willingness to obtain)",
        "High school diploma or equivalent",
        "Compassionate attitude and patience"
      ],
      id: "SC-2025-05",
      postedDate: "May 5, 2025"
    },
    {
      title: "Dementia Care Specialist",
      location: "Rehab and surrounding areas",
      type: "Full-time",
      description: "Join our specialized dementia care team providing support to clients with Alzheimer's and other forms of dementia. You'll implement best practices in memory care, create engaging activities, maintain safe environments, and provide respite and guidance for family caregivers.",
      requirements: [
        "Minimum 2 years experience working with dementia or Alzheimer's clients",
        "Specialized training in dementia care (PAC, CARES, or similar)",
        "Exceptional patience and problem-solving abilities",
        "Strong understanding of dementia behaviors and appropriate interventions",
        "Ability to communicate effectively with clients who have cognitive impairments",
        "CPR and First Aid certification",
        "Reliable transportation"
      ],
      id: "DCS-2025-04",
      postedDate: "May 2, 2025"
    },
    {
      title: "Weekend Caregiver",
      location: "Cooper's Farm area",
      type: "Part-time",
      description: "We're looking for weekend caregivers to support our clients when many other services are unavailable. This position is perfect for those seeking part-time work or additional hours to supplement another job. You'll provide essential care services including personal care, meal preparation, medication reminders, and companionship.",
      requirements: [
        "Ability to work weekends consistently",
        "Previous caregiving experience preferred but not required",
        "Compassionate attitude and strong work ethic",
        "Basic understanding of personal care techniques",
        "Reliable transportation",
        "Willingness to work in different client homes",
        "High school diploma or equivalent"
      ],
      id: "WC-2025-06",
      postedDate: "May 7, 2025"
    },
    {
      title: "Overnight Caregiver",
      location: "Rehab, Thinker's Village, and surrounding areas",
      type: "Flexible",
      description: "Join our team providing overnight care to clients who need monitoring, assistance, or reassurance during nighttime hours. This role involves sleep or wake shifts depending on client needs, ensuring safety, providing scheduled care, and responding to emergencies or requests for assistance during the night.",
      requirements: [
        "Willingness to work overnight hours (typically 10pm-6am)",
        "Previous caregiving experience preferred",
        "Ability to maintain alertness during wake shifts",
        "Good judgment in emergency situations",
        "Strong observation and reporting skills",
        "CPR and First Aid certification (or willingness to obtain)",
        "Reliable transportation"
      ],
      id: "ON-2025-03",
      postedDate: "April 28, 2025"
    }
  ];

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
            <h1 className="text-4xl font-bold text-primary mb-4">Join Our Care Team</h1>
            <p className="text-xl text-gray-700">
              Make a meaningful difference in the lives of others through compassionate care
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Work With Us</h2>
            <p className="text-lg text-gray-600">
              At ETW Care Services, we value our caregivers as our most important asset. 
              When you join our team, you become part of a supportive community dedicated 
              to providing exceptional care while growing professionally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BenefitCard {...benefit} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Current Openings</h2>
            
            <div className="space-y-6">
              {jobPostings.map((job, index) => (
                <JobPosting key={index} {...job} />
              ))}
            </div>
            
            <div className="mt-12 bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Don't See the Right Fit?</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for compassionate caregivers to join our team. 
                Submit your resume for future opportunities.
              </p>
              <a 
                href="/careers/apply"
                className="inline-block bg-primary hover:bg-primary/80 text-white font-medium px-6 py-3 rounded transition duration-300"
              >
                Submit General Application
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Application Process</h2>
            
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                {[
                  {
                    title: "Application Submission",
                    description: "Submit your application online or via email with your resume and cover letter."
                  },
                  {
                    title: "Initial Screening",
                    description: "Our hiring team will review your application and contact qualified candidates for a phone interview."
                  },
                  {
                    title: "In-Person Interview",
                    description: "Meet with our care coordinators to discuss your experience, skills, and how you might fit with our team."
                  },
                  {
                    title: "Background Check & References",
                    description: "We'll conduct a comprehensive background check and contact your professional references."
                  },
                  {
                    title: "Skills Assessment",
                    description: "Demonstrate your caregiving skills and knowledge through our assessment process."
                  },
                  {
                    title: "Onboarding & Training",
                    description: "Complete our orientation program and receive specialized training for your role."
                  }
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="flex-shrink-0 z-10">
                        <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-md">
                          {index + 1}
                        </div>
                      </div>
                      <div className="md:ml-8 mt-4 md:mt-0 text-center md:text-left">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-16">
              <a 
                href="/careers/apply"
                className="inline-block bg-primary hover:bg-primary/80 text-white font-medium px-8 py-3 rounded transition duration-300"
              >
                Apply Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Careers;
