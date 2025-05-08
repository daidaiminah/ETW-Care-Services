import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  phone?: string;
  linkedin?: string;
}

const TeamMember = ({ name, role, bio, image, email, phone, linkedin }: TeamMemberProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover object-center"
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/400x400/e2e8f0/1e40af?text=Team+Member";
        }}
      />
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-primary font-medium mb-4">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        
        <div className="mt-auto pt-4 flex flex-wrap gap-3">
          {email && (
            <a href={`mailto:${email}`} className="flex items-center text-sm text-gray-600 hover:text-primary transition">
              <FaEnvelope className="mr-2" />
              {email}
            </a>
          )}
          {phone && (
            <a href={`tel:${phone}`} className="flex items-center text-sm text-gray-600 hover:text-primary transition">
              <FaPhone className="mr-2" />
              {phone}
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 hover:text-primary transition">
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Nat Daimit",
      role: "Founder & CEO",
      bio: "Nat founded ETW Care Services after experiencing firsthand the challenges of finding quality care for his aging parents. With over 15 years of healthcare management experience, he's dedicated to providing exceptional care services that prioritize dignity and independence.",
      image: "/src/assets/images/team-ceo.jpg",
      email: "nat@etwcareservices.com",
      phone: "(704) 595-2220",
      linkedin: "https://linkedin.com/in/natdaimit"
    },
    {
      name: "Mary Ellen Daimit",
      role: "Co-Founder & Care Director",
      bio: "Mary Ellen brings 20+ years of nursing experience to ETW Care Services. Her expertise in geriatric care and passion for improving senior lives drives our care standards. She personally oversees caregiver training and care plan development.",
      image: "/src/assets/images/team-director.jpg",
      email: "maryellen@etwcareservices.com",
      phone: "(704) 595-2221"
    },
    {
      name: "Sarah Johnson",
      role: "Care Coordinator",
      bio: "Sarah excels at matching clients with the perfect caregivers based on needs, personalities, and preferences. Her background in social work and senior services helps her develop comprehensive care plans that address both physical and emotional needs.",
      image: "/src/assets/images/team-coordinator.jpg",
      email: "sarah@etwcareservices.com"
    },
    {
      name: "Michael Williams",
      role: "Veteran Care Specialist",
      bio: "As a veteran himself, Michael understands the unique challenges facing our veteran clients. He specializes in connecting veterans with benefits they've earned and developing care plans that address service-related conditions with dignity and respect.",
      image: "/src/assets/images/team-specialist.jpg",
      email: "michael@etwcareservices.com"
    },
    {
      name: "Rachel Chen",
      role: "Dementia Care Trainer",
      bio: "Rachel is certified in the Positive Approach to Care methodology for dementia care. She trains our caregiving team on the latest techniques and approaches to provide compassionate, effective care for clients with cognitive challenges.",
      image: "/src/assets/images/team-trainer.jpg",
      email: "rachel@etwcareservices.com"
    },
    {
      name: "James Thompson",
      role: "Client Relations Manager",
      bio: "James ensures that every client experience exceeds expectations. He regularly checks in with clients and families, addresses concerns promptly, and works to continuously improve our care services based on client feedback.",
      image: "/src/assets/images/team-manager.jpg",
      email: "james@etwcareservices.com",
      phone: "(704) 595-2223"
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
            <h1 className="text-4xl font-bold text-primary mb-4">Our Care Team</h1>
            <p className="text-xl text-gray-700">
              Meet the dedicated professionals behind ETW Care Services who are committed to 
              providing exceptional care with compassion, respect, and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Leadership Philosophy</h2>
            <p className="text-lg text-gray-600 mb-8">
              At ETW Care Services, we believe in leading by example. Our leadership team is hands-on, 
              involved in day-to-day operations, and committed to knowing every client by name. 
              We foster a culture of excellence where every team member feels valued and empowered 
              to provide exceptional care.
            </p>
            <div className="border-b border-gray-200 w-24 mx-auto"></div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-primary p-12 text-white flex items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
                  <p className="mb-6">
                    We're always looking for compassionate, dedicated caregivers to join our team. 
                    If you share our values and commitment to exceptional care, we'd love to hear from you.
                  </p>
                  <a 
                    href="/careers" 
                    className="inline-block bg-white text-primary font-medium px-6 py-3 rounded hover:bg-gray-100 transition duration-300"
                  >
                    View Open Positions
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">What Our Team Says</h3>
                <blockquote className="italic text-gray-600 border-l-4 border-primary pl-4 py-2 mb-4">
                  "Working at ETW Care Services has been rewarding beyond measure. The leadership truly cares about both 
                  clients and caregivers, creating an environment where we can provide the best possible care."
                </blockquote>
                <p className="text-gray-800 font-medium">- Maria G., Caregiver since 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Team;
