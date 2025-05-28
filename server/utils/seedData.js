import bcrypt from 'bcrypt';
import db from '../models/index.js';

const seedDatabase = async () => {
  try {
    // Sync database with { force: true } to start fresh
    await db.sequelize.sync({ force: true });
    console.log('Database synced and all tables dropped');

    // Create default admin user
    const adminPassword = await bcrypt.hash('admin123', 10);
    await db.Admin.create({
      name: 'Admin User',
      email: 'admin@etwcare.com',
      password: adminPassword,
      role: 'superadmin'
    });
    console.log('Default admin user created');

    // Create services
    const services = [
      {
        name: 'Senior Care',
        slug: 'senior-care',
        description: 'Our comprehensive senior care services are designed to support aging loved ones with dignity and respect in the comfort of their homes. Our trained caregivers provide assistance with daily activities, medication reminders, mobility support, and companionship.',
        shortDescription: 'Professional care services tailored for seniors to maintain independence and quality of life at home.',
        icon: 'FaUserNurse',
        image: '/images/services/senior-care.jpg',
        isActive: true,
        order: 1
      },
      {
        name: 'Dementia Care',
        slug: 'dementia-care',
        description: 'Our specialized dementia care services focus on the unique needs of individuals with Alzheimer\'s disease and other forms of dementia. Our caregivers are trained in memory care techniques and create safe, structured environments to reduce confusion and anxiety.',
        shortDescription: 'Specialized care for individuals with Alzheimer\'s and other forms of dementia.',
        icon: 'FaBrain',
        image: '/images/services/dementia-care.jpg',
        isActive: true,
        order: 2
      },
      {
        name: 'Respite Care',
        slug: 'respite-care',
        description: 'Our respite care services provide temporary relief for primary caregivers, allowing them time to rest, attend to personal matters, or simply take a break. Our professional caregivers step in to ensure your loved one receives the care they need during your absence.',
        shortDescription: 'Temporary care services that provide family caregivers with much-needed breaks.',
        icon: 'FaHandHoldingHeart',
        image: '/images/services/respite-care.jpg',
        isActive: true,
        order: 3
      },
      {
        name: 'Companion Care',
        slug: 'companion-care',
        description: 'Our companion care services focus on providing emotional support, friendship, and engaging activities for seniors who may be experiencing isolation or loneliness. Our companions engage in conversation, games, hobbies, and outdoor activities to enhance quality of life.',
        shortDescription: 'Social engagement and emotional support to prevent isolation and loneliness.',
        icon: 'FaUsers',
        image: '/images/services/companion-care.jpg',
        isActive: true,
        order: 4
      },
      {
        name: 'Personal Care',
        slug: 'personal-care',
        description: 'Our personal care services assist with activities of daily living such as bathing, grooming, dressing, and toileting. Our trained caregivers provide these intimate services with dignity and respect, helping maintain hygiene and personal appearance.',
        shortDescription: 'Assistance with daily living activities while maintaining dignity and independence.',
        icon: 'FaHandsWash',
        image: '/images/services/personal-care.jpg',
        isActive: true,
        order: 5
      }
    ];

    await db.Service.bulkCreate(services);
    console.log('Sample services created');

    // Create testimonials
    const testimonials = [
      {
        name: 'Jennifer Smith',
        position: 'Daughter of Client',
        content: 'ETW Care Services has been a blessing for our family. Their caregivers are professional, compassionate, and truly care about my mother\'s wellbeing. I can finally rest easy knowing she\'s in good hands.',
        rating: 5,
        isActive: true
      },
      {
        name: 'Robert Johnson',
        position: 'Son of Client',
        content: 'I cannot express enough gratitude for the exceptional care provided to my father. The caregivers from ETW are attentive to his needs and have become like family to us. Their dementia care expertise has made a world of difference.',
        rating: 5,
        isActive: true
      },
      {
        name: 'Patricia Williams',
        position: 'Client',
        content: 'As someone who values independence, I was hesitant to accept help. But the companion care I receive from ETW has enhanced my quality of life while allowing me to maintain my dignity. My caregiver is a joy to have around.',
        rating: 4,
        isActive: true
      }
    ];

    await db.Testimonial.bulkCreate(testimonials);
    console.log('Sample testimonials created');

    console.log('Database seeding completed successfully');

  } catch (error) {
    console.error('Database seeding failed:', error);
  } finally {
    process.exit();
  }
};

seedDatabase();
