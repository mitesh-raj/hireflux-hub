
import { JOB_STATUS } from '../lib/constants';

export const jobsData = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCo Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    category: 'Technology',
    description: 'We are looking for a skilled Frontend Developer to join our growing team. The ideal candidate will have experience with React, TypeScript, and modern web development practices.',
    responsibilities: [
      'Build responsive and performant user interfaces using React',
      'Collaborate with designers and backend developers to implement features',
      'Write clean, maintainable, and well-tested code',
      'Optimize applications for maximum speed and scalability',
      'Stay up-to-date with emerging trends and technologies'
    ],
    requirements: [
      'React',
      'TypeScript',
      'CSS/SASS',
      'JavaScript',
      'RESTful APIs'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Health, dental, and vision insurance',
      'Flexible working hours',
      'Remote work options',
      'Professional development budget'
    ],
    postedDate: '2023-05-10',
    status: JOB_STATUS.OPEN,
    remote: true,
    assessment: true
  },
  {
    id: '2',
    title: 'UX Designer',
    company: 'DesignHub',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    category: 'Design',
    description: 'DesignHub is seeking a creative and experienced UX Designer to join our product team. You will be responsible for creating intuitive and engaging user experiences for our web and mobile applications.',
    responsibilities: [
      'Create wireframes, prototypes, and user flows',
      'Conduct user research and usability testing',
      'Collaborate with product managers and developers',
      'Design intuitive and visually appealing interfaces',
      'Iterate on designs based on user feedback'
    ],
    requirements: [
      'Figma',
      'Adobe Creative Suite',
      'UI/UX Design',
      'Prototyping',
      'User Research'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Flexible work schedule',
      'Design conference budget',
      'Downtown office with great views'
    ],
    postedDate: '2023-05-12',
    status: JOB_STATUS.OPEN,
    remote: false
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: 'InnovateTech',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$100,000 - $140,000',
    category: 'Technology',
    description: 'Join our dynamic team as a Full Stack Developer. You will be working on both frontend and backend technologies to build scalable and robust applications.',
    responsibilities: [
      'Develop and maintain web applications',
      'Work with both frontend and backend technologies',
      'Implement security and data protection measures',
      'Optimize applications for performance',
      'Collaborate with cross-functional teams'
    ],
    requirements: [
      'JavaScript/TypeScript',
      'Node.js',
      'React',
      'SQL',
      'Git'
    ],
    benefits: [
      'Competitive salary',
      'Remote work options',
      'Health and dental insurance',
      'Generous PTO policy',
      '401(k) matching'
    ],
    postedDate: '2023-05-15',
    status: JOB_STATUS.OPEN,
    remote: true
  },
  {
    id: '4',
    title: 'Product Manager',
    company: 'GrowthPlus',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$110,000 - $150,000',
    category: 'Product',
    description: 'GrowthPlus is looking for a skilled Product Manager to lead our product development initiatives. You will be responsible for defining product strategy, prioritizing features, and collaborating with engineering, design, and marketing teams.',
    responsibilities: [
      'Define product vision, strategy, and roadmap',
      'Gather and prioritize product requirements',
      'Work closely with engineering and design teams',
      'Analyze market trends and competitive landscape',
      'Make data-driven decisions'
    ],
    requirements: [
      'Product Management',
      'Agile Methodologies',
      'Data Analysis',
      'User Research',
      'Technical Background'
    ],
    benefits: [
      'Competitive compensation',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development opportunities',
      'Team building events'
    ],
    postedDate: '2023-05-18',
    status: JOB_STATUS.OPEN,
    remote: false,
    assessment: true
  },
  {
    id: '5',
    title: 'Marketing Specialist',
    company: 'BrandWave',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$70,000 - $90,000',
    category: 'Marketing',
    description: 'We are seeking a creative and analytical Marketing Specialist to join our growing team. You will be responsible for implementing marketing campaigns across various channels and analyzing their performance.',
    responsibilities: [
      'Execute marketing campaigns across digital channels',
      'Analyze campaign performance metrics',
      'Create engaging content for social media',
      'Manage email marketing initiatives',
      'Collaborate with design and sales teams'
    ],
    requirements: [
      'Digital Marketing',
      'Content Creation',
      'Social Media Management',
      'Data Analysis',
      'Email Marketing'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance benefits',
      'Casual dress code',
      'Professional development',
      'Work from home options'
    ],
    postedDate: '2023-05-20',
    status: JOB_STATUS.OPEN,
    remote: true
  }
];
