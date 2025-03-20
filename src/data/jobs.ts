
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
    description: 'DesignHub is seeking a talented UX Designer to create beautiful, intuitive interfaces for our clients. You will work closely with our team to understand user needs and translate them into effective design solutions.',
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity mockups',
      'Conduct user research and usability testing',
      'Collaborate with developers to implement designs',
      'Stay current with design trends and best practices',
      'Create and maintain design systems'
    ],
    requirements: [
      'Figma',
      'Adobe Creative Suite',
      'User Research',
      'Prototyping',
      'Design Systems'
    ],
    benefits: [
      'Comprehensive health benefits',
      'Flexible work schedule',
      'Professional development stipend',
      'Gym membership reimbursement',
      'Unlimited PTO'
    ],
    postedDate: '2023-05-12',
    status: JOB_STATUS.OPEN,
    remote: true,
    assessment: false
  },
  {
    id: '3',
    title: 'Product Manager',
    company: 'InnovateTech',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$100,000 - $130,000',
    category: 'Product',
    description: 'InnovateTech is looking for a strategic Product Manager to drive the development of our enterprise software solutions. The ideal candidate will blend technical knowledge with business acumen to deliver products that delight our customers.',
    responsibilities: [
      'Define product strategy and roadmap',
      'Gather and prioritize product requirements',
      'Work closely with engineering, design, and marketing teams',
      'Analyze market trends and competitive landscape',
      'Use data to inform product decisions'
    ],
    requirements: [
      'Product Management',
      'Agile/Scrum',
      'Market Analysis',
      'Technical Background',
      'Data Analysis'
    ],
    benefits: [
      'Competitive compensation package',
      'Remote work flexibility',
      'Health and wellness programs',
      'Stock options',
      'Career advancement opportunities'
    ],
    postedDate: '2023-05-05',
    status: JOB_STATUS.OPEN,
    remote: false,
    assessment: true
  },
  {
    id: '4',
    title: 'Backend Developer',
    company: 'CloudSystems',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$110,000 - $140,000',
    category: 'Technology',
    description: 'CloudSystems is seeking a Backend Developer to build and maintain scalable server-side applications. The ideal candidate has strong experience with Node.js, databases, and cloud infrastructure.',
    responsibilities: [
      'Design and implement server-side architectures',
      'Optimize application performance and scalability',
      'Ensure data security and integrity',
      'Write clean, maintainable code with proper documentation',
      'Collaborate with frontend developers for seamless integration'
    ],
    requirements: [
      'Node.js',
      'MongoDB',
      'AWS/Azure',
      'Microservices',
      'Docker'
    ],
    benefits: [
      'Competitive salary',
      'Remote work options',
      'Comprehensive health coverage',
      'Professional development budget',
      '401k matching'
    ],
    postedDate: '2023-05-08',
    status: JOB_STATUS.OPEN,
    remote: true,
    assessment: false
  },
  {
    id: '5',
    title: 'Marketing Specialist',
    company: 'GrowthPlus',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$70,000 - $90,000',
    category: 'Marketing',
    description: 'GrowthPlus is looking for a data-driven Marketing Specialist to help grow our customer base. You will be responsible for planning and executing marketing campaigns across various channels.',
    responsibilities: [
      'Develop and implement marketing strategies',
      'Create content for social media and email campaigns',
      'Analyze campaign performance and optimize accordingly',
      'Collaborate with sales team to generate qualified leads',
      'Stay updated with digital marketing trends'
    ],
    requirements: [
      'Digital Marketing',
      'Content Creation',
      'SEO/SEM',
      'Analytics Tools',
      'Social Media Management'
    ],
    benefits: [
      'Competitive base salary plus performance bonuses',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development opportunities',
      'Collaborative and innovative work environment'
    ],
    postedDate: '2023-05-15',
    status: JOB_STATUS.OPEN,
    remote: false,
    assessment: false
  },
  {
    id: '6',
    title: 'Data Scientist',
    company: 'AnalyticsPro',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$130,000 - $160,000',
    category: 'Technology',
    description: 'AnalyticsPro is seeking a Data Scientist to help us extract insights from complex datasets. You will work on challenging problems and develop machine learning models to drive business decisions.',
    responsibilities: [
      'Develop and implement machine learning algorithms',
      'Clean and prepare data for analysis',
      'Create data visualizations to communicate findings',
      'Collaborate with product and engineering teams',
      'Stay current with advancements in AI and machine learning'
    ],
    requirements: [
      'Python',
      'Machine Learning',
      'SQL',
      'Data Visualization',
      'Statistical Analysis'
    ],
    benefits: [
      'Competitive salary and equity',
      'Flexible work schedule',
      'Remote work options',
      'Continuous learning opportunities',
      'Health and wellness programs'
    ],
    postedDate: '2023-04-28',
    status: JOB_STATUS.OPEN,
    remote: true,
    assessment: true
  },
  {
    id: '7',
    title: 'DevOps Engineer',
    company: 'InfrastructureX',
    location: 'Denver, CO',
    type: 'Full-time',
    salary: '$115,000 - $145,000',
    category: 'Technology',
    description: 'InfrastructureX is looking for a DevOps Engineer to help us build and maintain scalable infrastructure. You will work on automating deployments, ensuring system reliability, and optimizing performance.',
    responsibilities: [
      'Design and implement CI/CD pipelines',
      'Automate infrastructure provisioning and management',
      'Monitor system performance and troubleshoot issues',
      'Ensure security best practices are followed',
      'Collaborate with development teams to improve deployment processes'
    ],
    requirements: [
      'Kubernetes',
      'Jenkins/GitLab CI',
      'Terraform',
      'AWS/Azure/GCP',
      'Linux Administration'
    ],
    benefits: [
      'Competitive compensation package',
      'Remote work options',
      'Flexible hours',
      'Professional development budget',
      'Comprehensive health benefits'
    ],
    postedDate: '2023-05-02',
    status: JOB_STATUS.OPEN,
    remote: true,
    assessment: false
  },
  {
    id: '8',
    title: 'Technical Writer',
    company: 'DocuTech',
    location: 'Portland, OR',
    type: 'Contract',
    salary: '$80,000 - $100,000',
    category: 'Technology',
    description: 'DocuTech is seeking a Technical Writer to create clear, concise documentation for our software products. You will work with product and engineering teams to understand complex features and explain them in user-friendly language.',
    responsibilities: [
      'Create and maintain product documentation',
      'Develop tutorials and how-to guides',
      'Collaborate with subject matter experts',
      'Ensure documentation meets quality standards',
      'Keep documentation updated with product changes'
    ],
    requirements: [
      'Technical Writing',
      'Markdown/HTML',
      'Documentation Tools',
      'Copy Editing',
      'Information Architecture'
    ],
    benefits: [
      'Competitive hourly rate',
      'Fully remote position',
      'Flexible schedule',
      'Long-term contract opportunity',
      'Professional development resources'
    ],
    postedDate: '2023-05-07',
    status: JOB_STATUS.OPEN,
    remote: true,
    assessment: false
  },
  {
    id: '9',
    title: 'HR Specialist',
    company: 'PeopleFirst',
    location: 'Miami, FL',
    type: 'Full-time',
    salary: '$65,000 - $85,000',
    category: 'HR',
    description: 'PeopleFirst is looking for an HR Specialist to join our team. You will handle various HR functions, including recruitment, onboarding, employee relations, and benefits administration.',
    responsibilities: [
      'Assist with full-cycle recruitment process',
      'Coordinate new employee onboarding',
      'Administer employee benefits programs',
      'Address employee questions and concerns',
      'Maintain employee records and HR documentation'
    ],
    requirements: [
      'HR Experience',
      'Recruitment',
      'Benefits Administration',
      'Employee Relations',
      'HR Software'
    ],
    benefits: [
      'Competitive salary',
      'Comprehensive benefits package',
      'Professional development opportunities',
      'Positive work environment',
      'Work-life balance'
    ],
    postedDate: '2023-05-09',
    status: JOB_STATUS.CLOSED,
    remote: false,
    assessment: false
  },
  {
    id: '10',
    title: 'Customer Success Manager',
    company: 'ClientHappy',
    location: 'Atlanta, GA',
    type: 'Full-time',
    salary: '$70,000 - $90,000',
    category: 'Customer Service',
    description: 'ClientHappy is seeking a Customer Success Manager to ensure our clients achieve their desired outcomes while using our SaaS platform. You will serve as the primary point of contact for a portfolio of clients.',
    responsibilities: [
      'Build and maintain strong relationships with clients',
      'Ensure successful onboarding of new clients',
      'Monitor client satisfaction and address concerns',
      'Identify upsell and cross-sell opportunities',
      'Work with product team to advocate for client needs'
    ],
    requirements: [
      'Customer Success',
      'Account Management',
      'SaaS Experience',
      'Communication Skills',
      'Problem Solving'
    ],
    benefits: [
      'Competitive base salary plus commission',
      'Health, dental, and vision insurance',
      'Remote work flexibility',
      'Career advancement opportunities',
      'Collaborative team environment'
    ],
    postedDate: '2023-04-30',
    status: JOB_STATUS.OPEN,
    remote: true,
    assessment: false
  }
];
